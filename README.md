MyjQuery - For educational purpose to understand vanilla javascript.
========
With the help of Frontendmasters.com, I created my own version of jQuery from scratch.
HTML doc using YUI3 can be found in
```javascript
./jsdoc/out
```
My rewrite can be found in the below script file. I wrote most of the methods. Some were given to me during lecture.
```javascript
./my_jquery.js
```
Test cases are in mocha and chai. It was originally written in qunit but I found it ugly. So I used my favorite testing frameworks


    passes: 47
    failures: 5
    duration: 2.21s

    Testing My jQuery
        Testing $ Constructor
            should have it's length property set to the number contacts found ‣
            should have it's first element of type HTMLElmentList ‣
            should have an element with class name contact ‣
        Testing non-dom methods
            $.extend
                should pouplate the properties of the 2nd parameter into target(first parameter) and return a combined object ‣
                should DEEP pouplate the properties of the 2nd parameter into target(first parameter) and return a combined object ‣
            $.isArray
                should validate an empty array to be an array ‣
                should not validate the primitive Argument attribute to be an array ‣
                should validate arrays from other iframes to be arrays ‣
            $.each
                should iterate through array of elements and pass it's index and element value ‣
                should iterate through a JSON object and retun it's prop and value ‣
                should iterate through 'Array-like' object and return it's numerically indexed properties and values ‣
            $.makeArray
                should create an array if passed node lists ‣
                should have the exact length amount ‣
                should have the same element values ‣
            $.proxy
                should have it's scope set according to the 2nd parameter ‣
        Testing DOM methods
            $.fn.html
                should have set the innerHTML attribute of the first element ‣
                should have set the innerHTML attribute of the second element ‣
            $.fn.val
                should have set the value attribute of the first element ‣
                should have set the value attribute of the second element ‣
            $.fn.text
                should set the text value of each found element ‣
                should not append an input element ‣
                should append an input(<input/>) text ‣
            $.fn.find
                should find two unordered lists ‣
                should find 4 lists ‣
            $.fn.children
                should have two ul children ‣
                should have four li children ‣
            $.fn.parent
                should find the 2 parents of each list ‣
            $.fn.next
                should have two lists siblings ‣
                should also have two next siblings ‣
                should have zero next siblings(calls next() twice via chaining) ‣
            $.fn.prev
                should have two lists siblings ‣
                should also have two prev siblings ‣
                should have zero prev siblings(calls prev() twice via chaining) ‣
            $.fn.attr
                should be able to read the attribute id ‣
                should be able to set the attributes of each elment and fetch it's first element's attribute ‣
                should be able to set the attributes of each elment and fetch it's second element's attribut ‣
                should fetch the first item in the set and set/get it's attribute ‣
            $.fn.css
                should get the padding-left css property of the span element ‣
                should set the padding-left css property of all span elements. test frist child ‣
                should set the padding-left css property of all span elements. Test second child ‣
            $.fn.width
                should have a width value set propertly ‣

                AssertionError: expected 1148 to equal 941

            $.fn.show
                should display the element ‣
            $.fn.hide
                should hide the element ‣
            $.fn.offset
                should have a top offset value of 120 ‣

                AssertionError: expected 1491.818115234375 to equal 120

                should have a left offset value of 10 ‣

                AssertionError: expected 0 to equal 10

            $.fn.bind
                should have the clicked element as it's 'this' scope ‣
                should have an event type of click ‣
            $.fn.unbind
                should be rejected as the event has been unbinded ‣

                Error: timeout of 2000ms exceeded
                    at http://192.168.239.152:9001/vendor/mocha/mocha.js:4104:14

            $.fn.data
                Should set the data attribute of element to foo:bar and be able to fetch it ‣
            $.fn.off
                ‣

                AssertionError: expected true to be false

            $.fn.addClass
                should add class name foo to the element ‣
            $.fn.removeClass
                should remove class name foob from the element ‣


```javascript
./my_jQuery_test.js
````
Using PhantomJS, I managed to get decent test coverage.
<!-- saved from url=(0038)http://192.168.239.152:9004/index.html -->
<div class="header medium">
	<h1>Code coverage report for <span class="entity" my_jquery.js</span></h1>
	<div class="path"></div>
	</div>
	<div class="body">
	<div class="coverage-summary">
	<div id="yui_3_6_0_1_1418096055503_61" class="yui3-widget yui3-datatable yui3-datatable-sortable">
	<div id="yui_3_6_0_1_1418096055503_63" class="yui3-datatable-content">
	<table cellspacing="0" class="yui3-datatable-table" id="yui_3_6_0_1_1418096055503_206">
	<colgroup id="yui_3_6_0_1_1418096055503_277">
	<col>
	<col>
	<col>
	<col>
	<col>
	<col>
	<col>
	<col>
	<col>
	<col>
	</colgroup>
	<thead class="yui3-datatable-columns" id="yui_3_6_0_1_1418096055503_209">
	<tr>
	<th id="yui_3_6_0_1_1418096055503_89" colspan="1" rowspan="1" class="yui3-datatable-header file yui3-datatable-sorted yui3-datatable-first-header yui3-datatable-col-file yui3-datatable-sortable-column" scope="col" data-yui3-col-id="file" aria-sort="ascending" title="Reverse sort by File" aria-labelledby="yui_3_6_0_1_1418096055503_89">
	<div class="yui3-datatable-sort-liner" tabindex="0">File<span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_90" colspan="1" rowspan="1" class="yui3-datatable-header pic yui3-datatable-col-pic yui3-datatable-sortable-column" scope="col" data-yui3-col-id="pic" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_90">
	<div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_91" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-statements yui3-datatable-sortable-column" scope="col" data-yui3-col-id="statements" title="Sort by Statements" aria-labelledby="yui_3_6_0_1_1418096055503_91">
	<div class="yui3-datatable-sort-liner" tabindex="0">Statements<span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_92" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-statements_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="statements_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_92">
	<div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_93" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-branches yui3-datatable-sortable-column" scope="col" data-yui3-col-id="branches" title="Sort by Branches" aria-labelledby="yui_3_6_0_1_1418096055503_93">
	<div class="yui3-datatable-sort-liner" tabindex="0">Branches<span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_94" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-branches_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="branches_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_94">
	<div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span>
	</div>
	</th>
	<th id="yui_3_6_0_1_1418096055503_95" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-functions yui3-datatable-sortable-column" scope="col" data-yui3-col-id="functions" title="Sort by Functions" aria-labelledby="yui_3_6_0_1_1418096055503_95">
	<div class="yui3-datatable-sort-liner" tabindex="0">
		Functions<span class="yui3-datatable-sort-indicator"></span>
	</div> </th> <th id="yui_3_6_0_1_1418096055503_96" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-functions_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="functions_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_96">
	<div class="yui3-datatable-sort-liner" tabindex="0">
		<span class="yui3-datatable-sort-indicator"></span>
	</div></th><th id="yui_3_6_0_1_1418096055503_97" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-lines yui3-datatable-sortable-column" scope="col" data-yui3-col-id="lines" title="Sort by Lines" aria-labelledby="yui_3_6_0_1_1418096055503_97">
	<div class="yui3-datatable-sort-liner" tabindex="0">
		Lines<span class="yui3-datatable-sort-indicator"></span>
	</div></th><th id="yui_3_6_0_1_1418096055503_98" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-lines_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="lines_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_98">
	<div class="yui3-datatable-sort-liner" tabindex="0">
		<span class="yui3-datatable-sort-indicator"></span>
	</div></th> </tr>
	</thead>
	<tbody class="yui3-datatable-data">
		
		<tr id="yui_3_6_0_1_1418096055503_260" data-yui3-record="model_2" class="yui3-datatable-odd ">
			<td class="yui3-datatable-col-file file yui3-datatable-sorted yui3-datatable-cell file medium"><a href="https://github.com/gedion/MyjQuery/blob/master/my_jquery.js">my_jquery.js</a></td>
			<td class="yui3-datatable-col-pic pic yui3-datatable-cell pic medium"><span class="cover-fill" style="width: 70px;"></span><span class="cover-empty" style="width:30px;"></span></td>
			<td class="yui3-datatable-col-statements pct yui3-datatable-cell pct medium">70.52%</td>
			<td class="yui3-datatable-col-statements_raw abs yui3-datatable-cell abs medium">(122&nbsp;/&nbsp;173)</td>
			<td class="yui3-datatable-col-branches pct yui3-datatable-cell pct medium">61.54%</td>
			<td class="yui3-datatable-col-branches_raw abs yui3-datatable-cell abs medium">(56&nbsp;/&nbsp;91)</td>
			<td class="yui3-datatable-col-functions pct yui3-datatable-cell pct medium">70.18%</td>
			<td class="yui3-datatable-col-functions_raw abs yui3-datatable-cell abs medium">(40&nbsp;/&nbsp;57)</td>
			<td class="yui3-datatable-col-lines pct yui3-datatable-cell pct medium">70.52%</td>
			<td class="yui3-datatable-col-lines_raw abs yui3-datatable-cell abs medium">(122&nbsp;/&nbsp;173)</td>
		</tr>
	</tbody> </table>
</div>
</div>
</div>
</div>
<div class="footer">
	<div class="meta">
		Generated by <a href="http://istanbul-js.org/" target="_blank">istanbul</a> at Mon Dec 08 2014 21:33:21 GMT-0600 (CST)
	</div>
</div>
<br />
