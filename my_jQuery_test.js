define(function(require) {
	var clickIt = function(el) {
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
		el.dispatchEvent(event);
	};
	var $ = require('lib/test-object');
	createElement = function() {
		var container = document.body.querySelector('#qunit-fixture');
		if (container) {
			document.body.removeChild(container);
		}
		container = document.createElement('div');
		container.id = 'qunit-fixture';
		document.body.appendChild(container);
	};
	createElement();
	describe('Testing My jQuery', function() {
		afterEach(function(done) {
			createElement();
			done();
		});

		describe('Testing $ Constructor', function() {

			var container = document.body.querySelector('#qunit-fixture');
			container.innerHTML = '<ul id="contacts"><li class="contact"/><li class="contact"/></ul>';

			var $contacts = new $('#contacts li.contact');
			it('should have it\'s length property set to the number contacts found', function() {
				expect($contacts).to.have.length(2);
			});
			it('should have it\'s first element of type HTMLElmentList', function() {
				expect($contacts[0].nodeName.toLowerCase()).to.equal('li');
			});
			it('should have an element with class name contact', function() {
				expect($contacts[1].className).to.equal('contact');
			});
		});
		describe('Testing non-dom methods', function() {
			describe('$.extend', function() {
				var result,
				    target = {
					first : 'Gedion'
				},
				    object = {
					last : 'Woldeselassie'
				};
				it('should pouplate the properties of the 2nd parameter into target(first parameter) and return a combined object', function() {
					result = $.extend(target, object);
					expect(result).to.equal(target);
				});
				it('should DEEP pouplate the properties of the 2nd parameter into target(first parameter) and return a combined object', function() {
					result = $.extend(target, object);
					expect(result).to.deep.equal({
						first : 'Gedion',
						last : 'Woldeselassie'
					});
				});

			});
			describe('$.isArray', function() {
				it('should validate an empty array to be an array', function() {
					expect($.isArray([])).to.be.true
				});
				it('should not validate the primitive Argument attribute to be an array', function() {
					expect($.isArray(arguments)).to.be.false
				});
				it('should validate arrays from other iframes to be arrays', function() {
					var IframeArray,
					    iframe = document.createElement('iframe');
					document.body.appendChild(iframe);

					IframeArray = iframe.contentWindow.Array;

					expect($.isArray(new IframeArray())).to.be.true
					document.body.removeChild(iframe);

				});
			});

			describe('$.each', function() {
				it('should iterate through array of elements and pass it\'s index and element value', function() {
					var res,
					    collection = ['a', 'b'];
					res = $.each(collection, function(index, value) {
						if (index === 0) {
							expect(value).to.equal('a');
						} else if (index === 1) {
							expect(value).to.equal('b');
						} else {
							expect(false).to.be.true//'called back with a bad index';
						}
					});
					expect(collection).to.equal(res);
				});

				it('should iterate through a JSON object and retun it\'s prop and value', function() {
					var res,
					    collection = {
						foo : 'bar',
						zed : 'ted'
					};
					res = $.each(collection, function(prop, value) {
						if (prop === 'foo') {
							expect(value).to.equal('bar');
						} else if (prop === 'zed') {
							expect(value).to.equal('ted');
						} else {
							expect(false).to.be.true//'called back with a bad index';
						}
					});
					expect(collection).to.equal(res);
				});

				it('should iterate through \'Array-like\' object and return it\'s numerically indexed properties and values', function() {

					var res,
					    collection = {
						0 : 'a',
						1 : 'b',
						length : 2
					};
					res = $.each(collection, function(index, value) {
						if (index === 0) {
							expect(value).to.equal('a');
						} else if (index === 1) {
							expect(value).to.equal('b');
						} else {
							expect(false).to.be.true//'called back with a bad index';
						}
					});
					expect(collection).to.equal(res);
				});
			});

			describe('$.makeArray', function() {
				var childNodes = document.body.childNodes;
				it('should create an array if passed node lists', function() {
					var childArray = $.makeArray(childNodes);
					expect($.isArray(childArray)).to.be.true
				});
				it('should have the exact length amount', function() {
					var childArray = $.makeArray(childNodes);
					expect(childArray).to.have.length(childNodes.length);
				});
				it('should have the same element values', function() {
					var childArray = $.makeArray(childNodes);
					for (var i = 0; i < childArray.length; i++) {
						expect(childArray[i]).to.be.equal(childNodes[i]);
					}
				});
			});
			describe('$.proxy', function() {
				it('should have it\'s scope set according to the 2nd parameter', function() {
					var speakProxy,
					    dog = {
						name : 'fido',
						speak : function(words) {
							return this.name + ' says ' + words;
						}
					};
					speakProxy = $.proxy(dog.speak, dog);
					expect(speakProxy('woof!')).to.be.equal('fido says woof!');
				});
			});
		});
		describe('Testing DOM methods', function() {
			describe('$.fn.html', function() {
				var buildTestDiv = function() {
					new $('#qunit-fixture').html('<ul id="contacts"><li class="contact"></li><li class="contact"></li></ul>');
					new $('.contact').html('Hi There');
				}
				it('should have set the innerHTML attribute of the first element', function() {
					buildTestDiv();
					expect(new $('.contact').html()).to.equal('Hi There');
				});
				it('should have set the innerHTML attribute of the second element', function() {
					buildTestDiv();
					expect(new $('.contact:nth-child(2)').html()).to.equal('Hi There');
				});

			});
			describe('$.fn.val', function() {
				var buildTestDiv = function() {
					new $('#qunit-fixture').html('<input type="text" class="age"/><input type="text" class="age"/>');
					new $('.age').val('27');
				}
				it('should have set the value attribute of the first element', function() {
					buildTestDiv();
					expect(new $('.age').val()).to.equal('27');
				});
				it('should have set the value attribute of the second element', function() {
					buildTestDiv();
					expect(new $('.age:nth-child(2)').val()).to.equal('27');

				});
			});
			describe('$.fn.text', function() {
				var buildTestDiv = function() {
					$('#qunit-fixture').html('Hi <span>there</span>.');

				}
				it('should set the text value of each found element', function() {
					buildTestDiv();
					expect($('#qunit-fixture').text()).to.equal('Hi there.');
				});
				it('should not append an input element', function() {
					buildTestDiv();
					expect($('#qunit-fixture input')).to.have.length(0);
				});
				it('should append an input(<input/>) text ', function() {
					buildTestDiv();
					$('#qunit-fixture span').text('<input/>');
					expect($('#qunit-fixture span').text()).to.equal('<input/>');
				});
			});
			describe('$.fn.find', function() {
				var buildTestDiv = function() {
					return $ul = $('#qunit-fixture').html('<ul><li/><li/></ul><ul><li/><li/></ul>').find('ul');
				}
				it('should find two unordered lists', function() {
					var ul = buildTestDiv();
					expect($ul).to.have.length(2);
				});
				it('should find 4 lists ', function() {
					var ul = buildTestDiv();
					expect($ul.find('li')).to.have.length(4);
				});
			});
			describe('$.fn.children', function() {
				makeTestDiv = function() {
					var $ul = $('#qunit-fixture').html('<ul><li/><li/></ul><ul><li/><li/></ul>').children();
				};

				it('should have two ul children', function() {
					makeTestDiv();
					expect($ul).to.have.length(2);
				});
				it('should have four li children', function() {
					makeTestDiv();
					expect($ul.children()).to.have.length(4);
				});
			});
			describe('$.fn.parent', function() {
				it('should find the 2 parents of each list', function() {
					var $lis = $('#qunit-fixture').html('<ul><li/><li/></ul><ul><li/><li/></ul>').find('li:first-child');
					expect($lis.parent()).to.have.length(2);
				});
			});
			describe('$.fn.next', function() {
				var buildTestDiv = function() {
					var $lis = $('#qunit-fixture').html('<ul> <li></li> <li></li> </ul> <ul> <li></li> <li></li> </ul>').find('li:first-child');
					return $lis;
				}
				it('should have two lists siblings', function() {
					var $lis = buildTestDiv();
					expect($lis).to.have.length(2);
				});
				it('should also have two next siblings', function() {
					var $lis = buildTestDiv();
					expect($lis.next()).to.have.length(2);
				});
				it('should have zero next siblings(calls next() twice via chaining)', function() {
					var $lis = buildTestDiv();
					expect($lis.next().next()).to.have.length(0);
				});
			});

			describe('$.fn.prev', function() {
				var buildTestDiv = function() {
					var $lis = $('#qunit-fixture').html('<ul><li/><li/></ul><ul><li/><li/></ul>').find('li:last-child');
					return $lis;
				}
				it('should have two lists siblings', function() {
					var $lis = buildTestDiv();
					expect($lis).to.have.length(2);
				});
				it('should also have two prev siblings', function() {
					var $lis = buildTestDiv();
					expect($lis.prev()).to.have.length(2);
				});
				it('should have zero prev siblings(calls prev() twice via chaining)', function() {
					var $lis = buildTestDiv();
					expect($lis.prev().prev()).to.have.length(0);
				});
			});

			describe('$.fn.attr', function() {
				var makeTestDiv = function() {
					$('#qunit-fixture').html('<span></span><span></span>');
					$('#qunit-fixture span').attr('foo', 'bar');
				};
				it('should be able to read the attribute id', function() {
					expect($('#qunit-fixture').attr('id')).to.equal('qunit-fixture');
				});
				it('should be able to set the attributes of each elment and fetch it\'s first element\'s attribute', function() {
					makeTestDiv();
					expect($('#qunit-fixture span')[0].getAttribute('foo')).to.equal('bar');
				});
				it('should be able to set the attributes of each elment and fetch it\'s second element\'s attribut ', function() {
					makeTestDiv();
					expect($('#qunit-fixture span')[1].getAttribute('foo')).to.equal('bar');
				});
				it('should fetch the first item in the set and set/get it\'s attribute', function() {
					makeTestDiv();
					$('#qunit-fixture span')[0].setAttribute('foo', 'BAR');
					expect($('#qunit-fixture span').attr('foo')).to.equal('BAR');
				});
			});

			describe('$.fn.css', function() {
				var makeTestDiv = function() {
					$('#qunit-fixture').html('<span>Content</span><span>Second</span>');
					$('#qunit-fixture span').css('paddingLeft', '20px');
				};
				it('should get the padding-left css property of the span element', function() {
					makeTestDiv();
					expect($('#qunit-fixture span').css('padding-left')).to.equal('20px');
				});
				it('should set the padding-left css property of all span elements. test frist child', function() {
					makeTestDiv();
					$('#qunit-fixture span').css('paddingLeft', '40px');
					expect($('#qunit-fixture span').css('padding-left')).to.equal('40px');
				});
				it('should set the padding-left css property of all span elements. Test second child', function() {
					makeTestDiv();
					$('#qunit-fixture span').css('paddingLeft', '40px');
					expect($('#qunit-fixture span:nth-child(2)').css('padding-left')).to.equal('40px');
				});

			});
			describe('$.fn.width', function() {
				it('should have a width value set propertly', function() {
					$('#qunit-fixture').html('<div class="big-width"><div>Element</div></div>');
					expect($('#qunit-fixture .big-width div').width()).to.equal(1000 - 59);
				});
			});
			describe('$.fn.show', function() {
				it('should display the element', function() {
					$('#qunit-fixture').html('<div id="el">text</div>');
					expect($('#el').hide()[0].style.display).to.equal('none');
				});
			});
			describe('$.fn.hide', function() {
				it('should hide the element', function() {
					$('#qunit-fixture').html('<div id="el">text</div>');
					expect($('#el').show()[0].style.display).to.equal('');
				});
			});
			describe('$.fn.offset', function() {
				beforeEach(function(done) {
					$([document.body]).append('<div class="big-width"><div class="row"></div><div class="row"><div id="pos"></div></div></div>');

					offset = $('#pos').offset();
					done();
				});

				afterEach(function(done) {
					//cleaning up after our test
					var node = $('.big-width')[0];
					node.parentNode.removeChild(node);
					done();
				});
				it('should have a top offset value of 120', function() {
					expect(offset.top).to.equal(120);
				});
				it('should have a left offset value of 10', function() {
					expect(offset.left).to.equal(10);
				});
			});
			describe('$.fn.bind', function() {

				$('#qunit-fixture').html('<div id="el">text</div>');
				var handler = function(ev) {
					var _self = this;
					it('should have the clicked element as it\'s \'this\' scope', function() {
						expect(_self.nodeName.toLowerCase()).to.equal('div');
					});

					it('should have an event type of click', function() {
						expect(ev.type).to.equal('click');
					});
				}
				$('#el').bind('click', handler);
				clickIt($('#el')[0]);

			});
			describe('$.fn.unbind', function() {
				it("should be rejected as the event has been unbinded", function(done) {

				});
			});
			describe('$.fn.data', function() {
				it('Should set the data attribute of element to foo:bar and be able to fetch it', function() {
					$('#qunit-fixture').html('<div id="el">text</div>');
					$('#el').data('foo', 'bar');
					expect($('#el').data('foo')).to.equal('bar');

				});
			});
			/*
			 describe('$.fn.on', function() {
			 var handler = function() {
			 var _self = this;
			 it('should be called after a list element is clicked.', function() {
			 expect(_self.nodeName.toLowerCase()).to.equal('li');
			 });
			 }
			 var $ul = $('#qunit-fixture').html('<ul><li><span id="one"/></li><li><span id="two"/></li></ul>').children();
			 $ul.on('click', 'li', handler);
			 clickIt($('#one')[0]);
			 });
			 */
			describe('$.fn.off', function() {
				it(' ', function() {
					expect(true).to.be.false
				});
			});
			describe('$.fn.addClass', function() {
				it('should add class name foo to the element', function() {
					var count = function(reg, str) {
						var c = 0;
						str.replace(reg, function() {
							c++;
						});
						return c;
					};

					var $divs = $('#qunit-fixture').html('<div class="foo"></div><div class="foob"></div>').children();

					$divs.addClass('foo');

					expect(count(/foo/, $divs[0].className)).to.equal(1);

				});
			});
			describe('$.fn.removeClass', function() {
				it('should remove class name foob from the element', function() {
					var count = function(reg, str) {
						var c = 0;
						str.replace(reg, function() {
							c++;
						});
						return c;
					};

					var $divs = $('#qunit-fixture').html('<div class="foo"></div><div class="foob"></div>').children();

					$divs.removeClass('foob');
					expect(count(/foob/, $divs[0].className)).to.equal(0);
				});
			});
		});
	});
});
