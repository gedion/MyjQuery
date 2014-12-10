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
```javascript
./my-jQuery-test.js
````
Using PhantomJS, I managed to get decent test coverage.
<!-- saved from url=(0038)http://192.168.239.152:9004/index.html -->
<html lang="en" class="yui3-js-enabled"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css"></style><link charset="utf-8" rel="stylesheet" id="yui_3_6_0_1_1418096055503_2" href="http://yui.yahooapis.com/combo?3.6.0/build/widget-base/assets/skins/sam/widget-base.css&3.6.0/build/datatable-base/assets/skins/sam/datatable-base.css&3.6.0/build/datatable-message/assets/skins/sam/datatable-message.css&3.6.0/build/datatable-sort/assets/skins/sam/datatable-sort.css"><script charset="utf-8" id="yui_3_6_0_1_1418096055503_4" src="./Code coverage report for All files_files/combo" async=""></script><script charset="utf-8" id="yui_3_6_0_1_1418096055503_5" src="./Code coverage report for All files_files/combo(1)" async=""></script><script charset="utf-8" id="yui_3_6_0_1_1418096055503_6" src="./Code coverage report for All files_files/combo(2)" async=""></script></head>
<body>
<div class="header medium">
<h1>Code coverage report for <span class="entity">All files</span></h1>
<div class="path"></div>
</div>
<div class="body">
<div class="coverage-summary"><div id="yui_3_6_0_1_1418096055503_61" class="yui3-widget yui3-datatable yui3-datatable-sortable"><div id="yui_3_6_0_1_1418096055503_63" class="yui3-datatable-content"><table cellspacing="0" class="yui3-datatable-table" id="yui_3_6_0_1_1418096055503_206"><colgroup id="yui_3_6_0_1_1418096055503_277"><col><col><col><col><col><col><col><col><col><col></colgroup><thead class="yui3-datatable-columns" id="yui_3_6_0_1_1418096055503_209"><tr><th id="yui_3_6_0_1_1418096055503_89" colspan="1" rowspan="1" class="yui3-datatable-header file yui3-datatable-sorted yui3-datatable-first-header yui3-datatable-col-file yui3-datatable-sortable-column" scope="col" data-yui3-col-id="file" aria-sort="ascending" title="Reverse sort by File" aria-labelledby="yui_3_6_0_1_1418096055503_89"><div class="yui3-datatable-sort-liner" tabindex="0">File<span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_90" colspan="1" rowspan="1" class="yui3-datatable-header pic yui3-datatable-col-pic yui3-datatable-sortable-column" scope="col" data-yui3-col-id="pic" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_90"><div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_91" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-statements yui3-datatable-sortable-column" scope="col" data-yui3-col-id="statements" title="Sort by Statements" aria-labelledby="yui_3_6_0_1_1418096055503_91"><div class="yui3-datatable-sort-liner" tabindex="0">Statements<span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_92" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-statements_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="statements_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_92"><div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_93" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-branches yui3-datatable-sortable-column" scope="col" data-yui3-col-id="branches" title="Sort by Branches" aria-labelledby="yui_3_6_0_1_1418096055503_93"><div class="yui3-datatable-sort-liner" tabindex="0">Branches<span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_94" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-branches_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="branches_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_94"><div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_95" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-functions yui3-datatable-sortable-column" scope="col" data-yui3-col-id="functions" title="Sort by Functions" aria-labelledby="yui_3_6_0_1_1418096055503_95"><div class="yui3-datatable-sort-liner" tabindex="0">Functions<span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_96" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-functions_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="functions_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_96"><div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_97" colspan="1" rowspan="1" class="yui3-datatable-header pct yui3-datatable-col-lines yui3-datatable-sortable-column" scope="col" data-yui3-col-id="lines" title="Sort by Lines" aria-labelledby="yui_3_6_0_1_1418096055503_97"><div class="yui3-datatable-sort-liner" tabindex="0">Lines<span class="yui3-datatable-sort-indicator"></span></div></th><th id="yui_3_6_0_1_1418096055503_98" colspan="1" rowspan="1" class="yui3-datatable-header abs yui3-datatable-col-lines_raw yui3-datatable-sortable-column" scope="col" data-yui3-col-id="lines_raw" title="Sort by " aria-labelledby="yui_3_6_0_1_1418096055503_98"><div class="yui3-datatable-sort-liner" tabindex="0"> <span class="yui3-datatable-sort-indicator"></span></div></th></tr></thead><tbody class="yui3-datatable-data"><tr id="yui_3_6_0_1_1418096055503_259" data-yui3-record="model_1" class="yui3-datatable-even "><td class="yui3-datatable-col-file file yui3-datatable-sorted yui3-datatable-cell file high"><a href="http://192.168.239.152:9004/scripts/index.html">scripts/</a></td><td class="yui3-datatable-col-pic pic yui3-datatable-cell pic high"><span class="cover-fill cover-full" style="width: 100px;"></span><span class="cover-empty" style="width:0px;"></span></td><td class="yui3-datatable-col-statements pct yui3-datatable-cell pct high">100.00%</td><td class="yui3-datatable-col-statements_raw abs yui3-datatable-cell abs high">(2&nbsp;/&nbsp;2)</td><td class="yui3-datatable-col-branches pct yui3-datatable-cell pct high">100.00%</td><td class="yui3-datatable-col-branches_raw abs yui3-datatable-cell abs high">(0&nbsp;/&nbsp;0)</td><td class="yui3-datatable-col-functions pct yui3-datatable-cell pct high">100.00%</td><td class="yui3-datatable-col-functions_raw abs yui3-datatable-cell abs high">(0&nbsp;/&nbsp;0)</td><td class="yui3-datatable-col-lines pct yui3-datatable-cell pct high">100.00%</td><td class="yui3-datatable-col-lines_raw abs yui3-datatable-cell abs high">(2&nbsp;/&nbsp;2)</td></tr><tr id="yui_3_6_0_1_1418096055503_260" data-yui3-record="model_2" class="yui3-datatable-odd "><td class="yui3-datatable-col-file file yui3-datatable-sorted yui3-datatable-cell file medium"><a href="http://192.168.239.152:9004/scripts/lib/index.html">scripts/lib/</a></td><td class="yui3-datatable-col-pic pic yui3-datatable-cell pic medium"><span class="cover-fill" style="width: 70px;"></span><span class="cover-empty" style="width:30px;"></span></td><td class="yui3-datatable-col-statements pct yui3-datatable-cell pct medium">70.52%</td><td class="yui3-datatable-col-statements_raw abs yui3-datatable-cell abs medium">(122&nbsp;/&nbsp;173)</td><td class="yui3-datatable-col-branches pct yui3-datatable-cell pct medium">61.54%</td><td class="yui3-datatable-col-branches_raw abs yui3-datatable-cell abs medium">(56&nbsp;/&nbsp;91)</td><td class="yui3-datatable-col-functions pct yui3-datatable-cell pct medium">70.18%</td><td class="yui3-datatable-col-functions_raw abs yui3-datatable-cell abs medium">(40&nbsp;/&nbsp;57)</td><td class="yui3-datatable-col-lines pct yui3-datatable-cell pct medium">70.52%</td><td class="yui3-datatable-col-lines_raw abs yui3-datatable-cell abs medium">(122&nbsp;/&nbsp;173)</td></tr></tbody></table></div></div></div>
</div>
<div class="footer">
<div class="meta">Generated by <a href="http://istanbul-js.org/" target="_blank">istanbul</a> at Mon Dec 08 2014 21:33:21 GMT-0600 (CST)</div>
</div>
<script src="./Code coverage report for All files_files/prettify.js"></script>
<script src="./Code coverage report for All files_files/yui-min.js"></script><div id="yui3-css-stamp" style="position: absolute !important; visibility: hidden !important" class=""></div>
<script>
YUI().use('datatable', function (Y) {
var formatters = {
pct: function (o) {
o.className += o.record.get('classes')[o.column.key];
try {
return o.value.toFixed(2) + '%';
} catch (ex) { return o.value + '%'; }
},
html: function (o) {
o.className += o.record.get('classes')[o.column.key];
return o.record.get(o.column.key + '_html');
}
},
defaultFormatter = function (o) {
o.className += o.record.get('classes')[o.column.key];
return o.value;
};
function getColumns(theadNode) {
var colNodes = theadNode.all('tr th'),
cols = [],
col;
colNodes.each(function (colNode) {
col = {
key: colNode.getAttribute('data-col'),
label: colNode.get('innerHTML') || ' ',
sortable: !colNode.getAttribute('data-nosort'),
className: colNode.getAttribute('class'),
type: colNode.getAttribute('data-type'),
allowHTML: colNode.getAttribute('data-html') === 'true' || colNode.getAttribute('data-fmt') === 'html'
};
col.formatter = formatters[colNode.getAttribute('data-fmt')] || defaultFormatter;
cols.push(col);
});
return cols;
}
function getRowData(trNode, cols) {
var tdNodes = trNode.all('td'),
i,
row = { classes: {} },
node,
name;
for (i = 0; i < cols.length; i += 1) {
name = cols[i].key;
node = tdNodes.item(i);
row[name] = node.getAttribute('data-value') || node.get('innerHTML');
row[name + '_html'] = node.get('innerHTML');
row.classes[name] = node.getAttribute('class');
//Y.log('Name: ' + name + '; Value: ' + row[name]);
if (cols[i].type === 'number') { row[name] = row[name] * 1; }
}
//Y.log(row);
return row;
}
function getData(tbodyNode, cols) {
var data = [];
tbodyNode.all('tr').each(function (trNode) {
data.push(getRowData(trNode, cols));
});
return data;
}
function replaceTable(node) {
if (!node) { return; }
var cols = getColumns(node.one('thead')),
data = getData(node.one('tbody'), cols),
table,
parent = node.get('parentNode');
table = new Y.DataTable({
columns: cols,
data: data,
sortBy: 'file'
});
parent.set('innerHTML', '');
table.render(parent);
}
Y.on('domready', function () {
replaceTable(Y.one('div.coverage-summary table'));
if (typeof prettyPrint === 'function') {
prettyPrint();
}
});
});
</script>
</body></html>
