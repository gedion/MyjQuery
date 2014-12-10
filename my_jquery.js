(function() {

    /**
     * My jQuery.
     *
     * @class $
     * @constructor
     * @param selector
     * @example
     *	var $contacts = $('#contacts li.contact');
     *
     */
    $ = function(selector) {
        if (!(this instanceof $)) {
            return new $(selector);
        }

        var _self = this,
            els;
        if (typeof selector === 'string') {
            els = document.body.querySelectorAll(selector);
        } else {
            els = selector;
        }
        $.each(els, function(index, el) {
            _self[index] = el;
        });
        // [].prototype.push.apply(this,els);
        /**
         * @property length
         * @type {String}
         * @default null
         */
        this['length'] = els.length;
        return this;
    };
    /**
     *
     * @method extend
     * @param target {Object}
     * @param object {Object}
     * @returns {Object}
     * @example
     *	var target = {first: 'Justin'},
     *		object = {last: 'Meyer'};
     *
     *	var result = $.extend(target,object);
     *	equal( result, target, 'target and result are equal');
     */
    $.extend = function(target, object) {
        var props = Object.keys(object);
        props.forEach(function(prop) {
            target[prop] = object[prop];
        });
        return target;
    };

    // Static methods
    var isArrayLike = function(obj) {
        if (obj === null) {
            return false;
        }
        var hasLenMethod = false,
            inOpPasses = false;

        hasLenMethod = obj && typeof obj.length === 'number' ? true : false;
        if (hasLenMethod && obj.length === 0) {
            inOpPasses = true;
        } else if (hasLenMethod) {
            inOpPasses = (obj.length - 1) in obj;
        }
        return hasLenMethod && inOpPasses;
    };
    var moveWith = function(el, propertyName) {
        var cur = el[propertyName];
        while (cur && cur.nodeType != 1) {
            cur = cur[propertyName];
        }
        return cur;
    };
    var makeTraverser = function(traverser) {
        return function() {
            var elements = [],
                args = arguments;
            $.each(this, function(i, element) {
                var els = traverser.apply(element, args);
                if (isArrayLike(els)) {
                    elements.push.apply(elements, els);
                } else if (els) {
                    elements.push(els);
                }
            });
            return $(elements);
        };
    };

    $.extend($, {
        /**
         *
         * @method isArray
         * @param obj {Object}
         * @returns {boolean}
         * @example
         *	var  = {first: 'Justin'},
         *	object = {last: 'Meyer'};
         *	equal( $.isArray([]), true, 'An array is an array' );
         *	equal( $.isArray(arguments), false, 'Arguments are not an array' );
         *	var iframe = document.createElement('iframe');
         *	document.body.appendChild(iframe);
         *	var IframeArray = iframe.contentWindow.Array;
         *	equal( $.isArray( new IframeArray() ), true, 'Arrays from other iframes are Arrays' );
         *
         */
        isArray: function(obj) {
            var isArray = false,
                strRep = Object.prototype.toString.call(obj);
            if (strRep === '[object Array]') {
                isArray = true;
            }
            return isArray;
        },
        /**
         * Iterators through each element and object.
         * @method each
         * @param obj {Object}
         * @param cb {Function}
         * @returns {Object}
         * @example
         *	var collection = ['a','b'];
         *	var res = $.each(collection, function(index, value){
         *		if(index === 0 )	equal(value, 'a');
         *		else if(index === 1 ) equal(value, 'b');
         *		else ok(false,'called back with a bad index');
         *	});
         *	equal(collection, res);
         *
         *	collection = {foo: 'bar', zed: 'ted'};
         *	res = $.each(collection, function(prop, value){
         *		if(prop === 'foo' )		 equal(value, 'bar');
         *		else if(prop === 'zed' ) equal(value, 'ted');
         *		else ok(false,'called back with a bad index');
         *	});
         *	equal(collection, res);
         *
         *	var collection = {0:'a', 1:'b', length: 2};
         *	var res = $.each(collection, function(index, value){
         *		if(index === 0 )	equal(value, 'a');
         *		else if(index === 1 ) equal(value, 'b');
         *		else ok(false,'called back with a bad index');
         *	});
         *	equal(collection, res);
         */
        each: function(collection, cb) {
            var value;
            if (isArrayLike(collection)) {
                for (var i = 0; i < collection.length; i++) {
                    value = collection[i];
                    cb.call(value, i, value);
                }
            } else {
                for (var prop in collection) {
                    value = collection[prop];
                    if (collection.hasOwnProperty(prop)) {
                        cb.call(value, prop, value);
                    }
                }
            }
            return collection;
        },
        /**
         * Given 'array like' Object, it create a new javascript array
         * @method makeArray
         * @param arr {Object}
         * @returns {Array}
         * @example
         * 	var childNodes = document.body.childNodes;
         * 	ok(! $.isArray(childNodes), 'node lists are not arrays' );
         * 	var childArray = $.makeArray(childNodes);
         * 	ok( $.isArray(childArray), 'made an array'	);
         * 	equal(childArray.length, childNodes.length, 'lengths are the same');
         * 	for(var i =0; i < childArray.length; i++){
         * 		equal(childArray[i], childNodes[i], 'array index '+i+' is equal.');
         * 	}
         */
        makeArray: function(arr) {
            var array = [];
            $.each(arr, function(index, value) {
                array.push(value);
            });
            return array;
        },

        /**
         * Changes the scope of function with context
         * @method proxy
         * @param fn {Function}
         * @param context {Object}
         * @returns {function}
         * @example
         *		var dog = {
         *			name: 'fido',
         *			speak: function(words){
         *				return this.name + ' says '+words;
         *			}
         *		};
         *
         *		var speakProxy = $.proxy(dog.speak, dog);
         *
         */
        proxy: function(fn, context) {
            return function() {
                return fn.apply(context, arguments);
            }
        }
    });

    var getText = function(el) {
        var text = "";
        $.each(el.childNodes, function(i, childNode) {
            if (childNode.nodeType === Node.TEXT_NODE) {
                text += childNode.nodeValue;
            } else if (childNode.nodeType === Node.ELEMENT_NODE) {
                text += getText(childNode);
            }
        });
        return text;
    }
    $.extend($.prototype, {
        /**
         *  Either Set the inner html value of an element[s] or get(if no param is passed) the first element.
         * @method html
         * @param newHtml {String} //optional
         * @chainable
         * @example
         * 	//set
         * 	new $('#qunit-fixture').html('<ul id="contacts"><li class="contact"></li><li class="contact"></li></ul>');
         * 	new $('.contact').html('Hi There');
         * 	//get
         * 	equal(new $('.contact').html(), 'Hi There', 'First contact html set correctly');
         * 	equal(new $('.contact:nth-child(2)').html(), 'Hi There', 'Second contact html set correctly');
         */
        html: function(newHtml) {
            if (arguments.length) {
                $.each(this, function(i, el) {
                    el.innerHTML = newHtml;
                });
                return this;
            } else {
                return this[0] && this[0].innerHTML;
            }
        },
        /**
         *  Either Set the value of an element[s] or get the value of the first element
         * @method val
         * @param newVal {String} //optional
         * @chainable
         * @example
         *	new $('#qunit-fixture').html('<input type="text" class="age"/><input type="text" class="age"/>');
         *	equal( new $('.age').val(), '', 'Input is initially empty');
         *	new $('.age').val('Hi There');
         *	equal( new $('.age').val(), 'Hi There', 'First .age value set correctly');
         *	equal( new $('.age:nth-child(2)').val(), 'Hi There', 'Second .age value set correctly');	 *
         */
        val: function(newVal) {
            if (arguments.length) {
                $.each(this, function(i, el) {
                    el.value = newVal;
                });
                return this;
            } else {
                return this[0] && this[0].value;
            }
        },
        /**	
         *
         * Either appends a text node with newText as value or fetches the text of the element[s].
         *
         * @method text
         * @param newText {String} //optional
         * @chainable
         * @example
         *	$('#qunit-fixture').html('Hi <span>there</span>.');
         *	equal( $('#qunit-fixture').text(), 'Hi there.', 'The text is right');
         *	$('#qunit-fixture span').text('<input/>');
         *	equal( $('#qunit-fixture input').length, 0, 'there\'s no input');
         *	equal( $('#qunit-fixture span').text(), '<input/>', 'The text is what we sent' );
         */
        text: function(newText) {
            if (arguments.length) {
                var textNode;

                $.each(this, function(i, el) {
                    el.innerHTML = "";
                    textNode = document.createTextNode(newText);
                    el.appendChild(textNode);
                });
            } else {
                return this[0] && getText(this[0]);
            }
        },
        /**	
         * Finds children elments that meet the selector criteria
         * @method find
         * @param selector {String} //optional
         * @chainable
         * @example
         */
        find: function(selector) {
            Finds children elments that meet the selector criteria
            var elements = [];
            $.each(this, function(i, el) {
                var els = el.querySelectorAll(selector);
                [].push.apply(elements, els);
            });
            return $(elements);
        },
        /**
         * Get next sibling
         * @method text
         * @chainable
         * @example
         */
        next: makeTraverser(function() {
            return moveWith(this, "nextSibling");
        }),
        /**
         * Get Prev sibling
         * @method prev
         * @chainable
         * @example
         */
        prev: makeTraverser(function() {
            return moveWith(this, "previousSibling");
        }),
        /**
         *
         * @method parent
         * @chainable
         * @example
         */
        parent: makeTraverser(function() {
            return this.parentNode;
        }),
        /**
         *
         * @method children
         * @chainable
         * @example
         */
        children: makeTraverser(function() {
            return this.children;
        }),
        /**
         * Either sets
         * @method attr
         * @param attrName
         * @param value;
         * @chainable
         * @example
         */
        attr: function(attrName, value) {
            if (arguments.length == 2) {
                $.each(this, function(i, el) {
                    el.setAttribute(attrName, value);
                });
                return this;
            } else {
                return this[0] && this[0].getAttribute(attrName);
            }
        },
        /**
         *
         * @method css
         * @param cssPropName
         * @param value;
         * @chainable
         * @example
         */
        css: function(cssPropName, value) {
            if (arguments.length == 2) {
                return $.each(this, function(i, element) {
                    element.style[cssPropName] = value;
                });
            } else {
                return this[0] && document.defaultView.getComputedStyle(this[0]).getPropertyValue(cssPropName);
            }
        },
        /**
         *
         * @method width
         * @example
         */
        width: function() {
            var paddingLeft = parseInt(this.css("padding-left"), 10),
                paddingRight = parseInt(this.css("padding-right"), 10);
            return this[0].clientWidth - paddingLeft - paddingRight;
        },
        /**
         *
         * @method offset
         * @example
         */
        offset: function() {
            debugger;
            var offset = this[0] && this[0].getBoundingClientRect();
            return {
                top: offset.top,
                left: offset.left
            };
        },
        /**
         *
         * @method hide
         * @chainable
         * @example
         *	$('#el').hide();
         */
        hide: function() {
            return this.css("display", "none");
        },
        /**
         * To Do
         * @method show
         * @chainable
         * @example
         */
        show: function() {
            return this.css("display", "");
        },

        // Events
        /**
         * To Do
         * @method bind
         * @param eventName {String}
         * @param  handler {function}
         * @example
         */
        bind: function(eventName, handler) {
            return $.each(this, function(i, element) {
                element.addEventListener(eventName, handler, false);
            });
        },
        /**
         * To Do
         * @method unbind
         * @param eventName {String}
         * @param  handler {function}
         * @example
         */
        unbind: function(eventName, handler) {
            return $.each(this, function(i, element) {
                element.removeEventListener(eventName, handler, false);
            });
        },
        /**
         * To Do
         * @method has
         * @param selector {String}
         * @chainable
         */
        has: function(selector) {
            var div = document.createElement("div"),
                matches = div.matches || div.webkitMatchesSelector || div.mozMatchesSelector;
            return makeTraverser(function(selector) {
                if (matches.call(this, selector)) {
                    return this;
                }
            });
        },
        /**
         * To Do
         * @method on
         * @param eventType {String}
         * @param select {String}
         * @param  handler {function}
         * @example
         */
        on: function(eventType, selector, handler) {
            var delegator = function(ev) {
                var cur = ev.target;
                do {
                    if ($([cur]).has(selector).length) {
                        handler.call(cur, ev);
                    }
                    cur = cur.parentNode;
                } while (cur && cur !== ev.currentTarget);
            };
            return $.each(this, function(i, element) {
                var events = $([element]).data("events"),
                    eventTypeEvents;
                if (!events) {
                    $([element]).data("events", events = {});
                }
                if (!(eventTypeEvents = events[eventType])) {
                    eventTypeEvents = events[eventType] = {};
                }
                if (!eventTypeEvents[selector]) {
                    eventTypeEvents[selector] = [];
                }
                eventTypeEvents[selector].push({
                    handler: handler,
                    delegator: delegator
                });
                element.addEventListener(eventType, delegator, false);
            });
        },
        /**
         * To Do
         * @method off
         * @param eventType {String}
         * @param select {String}
         * @param  handler {function}
         * @example
         */
        off: function(eventType, selector, handler) {},
        /**
         * To Do
         * @method data
         * @param propName {String}
         * @param data {Object}
         * @param  handler {function}
         * @example
         */
        data: function(propName, data) {},

        // Extra
        /**
         * To Do
         * @method addClass
         * @param className {String}
         * @example
         */
        addClass: function(className) {
            var classTest = new RegExp("(^| )" + className + "($| )");
            return $.each(this, function(i, element) {
                if (!classTest.test(element.className)) {
                    element.className = element.className + " " + className;
                }
            });
        },
        /**
         * To Do
         * @method removeClass
         * @param className {String}
         * @example
         */
        removeClass: function(className) {
            var classTest = new RegExp("(^| )" + className + "($| )");
            return $.each(this, function(i, element) {
                element.className = element.className.replace(classTest, "");
            });
        },
        /**
         * To Do
         * @method append
         * @param element {HTMLElement}
         * @example
         */
        append: function(element) {
            this[0].appendChild($.buildFragment(element));
        }
    });

    $.buildFragment = function(html) {
        if (typeof html === "string") {
            var matchData = html.match(/<(\w+)/),
                firstTag = matchData ? matchData[1] : "div",
                parentNodes = {
                    li: "ul",
                    tr: "table"
                },
                parentTag = parentNodes[firstTag] || "div",
                parentNode = document.createElement(parentTag),
                frag = document.createDocumentFragment();
            parentNode.innerHTML = html;
            $.each($.makeArray(parentNode.childNodes), function(i, node) {
                frag.appendChild(node);
            });
            return frag;
        } else {
            return html;
        }
    };
})();
