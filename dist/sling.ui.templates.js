angular.module('sling.ui.templates')
.run([ '$templateCache', function($templateCache) {
  return $templateCache.put('/sling.ui/templates/sling-ahead.html', [
'',
'<div class="sling-ahead">',
'  <form>',
'    <input type="text" ng-model="term" autocomplete="off" ng-change="query()" class="form-control">',
'  </form>',
'  <div ng-transclude></div>',
'</div>',''].join("\n"));
}])
.run([ '$templateCache', function($templateCache) {
  return $templateCache.put('/sling.ui/templates/sling-pager.html', [
'',
'<div ng-show="pager.showPager()">',
'  <ul class="pager">',
'    <li class="previous disabled"><a ng-click="pager.previousPage()" class="sling-interactable">&larr; Previous</a></li>',
'    <li class="next disabled"> <a ng-click="pager.nextPage()" class="sling-interactable">&rarr; Next</a></li>',
'  </ul>',
'</div>',''].join("\n"));
}])
.run([ '$templateCache', function($templateCache) {
  return $templateCache.put('/sling.ui/templates/sling-search.html', [
'',
'<div ng-show="tableSearch">',
'  <form class="form-inline">',
'    <div class="input-group"><span class="input-group-addon">',
'        <div class="glyphicon glyphicon-search"></div></span>',
'      <input type="search" ng-keyup="search()" ng-model="slingSearch" placeholder="Search Table..." class="form-control sling-table-search">',
'    </div>',
'  </form>',
'</div>',''].join("\n"));
}])
.run([ '$templateCache', function($templateCache) {
  return $templateCache.put('/sling.ui/templates/sling-table.html', [
'',
'<div class="sling-table-container">',
'  <div ng-show="pager.showPager()">',
'    <ul class="pager">',
'      <li class="previous disabled"><a ng-click="pager.previousPage()" class="sling-interactable">&larr; Previous</a></li>',
'      <li class="next disabled"> <a ng-click="pager.nextPage()" class="sling-interactable">&rarr; Next</a></li>',
'    </ul>',
'  </div>',
'  <div ng-show="tableSearch">',
'    <form class="form-inline">',
'      <div class="input-group"><span class="input-group-addon">',
'          <div class="glyphicon glyphicon-search"></div></span>',
'        <input type="search" ng-keyup="search()" ng-model="slingSearch" placeholder="Search Table..." class="form-control sling-table-search">',
'      </div>',
'    </form>',
'  </div>',
'  <table ng-class="tableClass" class="table">',
'    <thead>',
'      <tr>',
'        <th ng-repeat="column in tableConfig.order" ng-click="switchColumn(column)" ng-class="getSortedClass(column)" class="{{tableConfig.display[column].className}} sling-interactable">{{tableConfig.display[column].label}}<span ng-show="sort.column == column">',
'            <div ng-hide="sort.descending" class="glyphicon glyphicon-chevron-up"></div>',
'            <div ng-show="sort.descending" class="glyphicon glyphicon-chevron-down"></div></span></th>',
'      </tr>',
'    </thead>',
'    <tbody>',
'      <tr ng-repeat="data in pagedData">',
'        <td ng-repeat="column in tableConfig.order" ng-class="getSortedClass(column)" ng-bind-html="data[column]"></td>',
'      </tr>',
'    </tbody>',
'  </table>',
'</div>',''].join("\n"));
}]);
