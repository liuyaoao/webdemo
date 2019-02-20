
var demoModule = 'gantt.demo';
angular.module(demoModule, ['gantt', 'mgcrea.ngStrap', 'ngAnimate', 'gantt.bounds', 'gantt.corner',
    'gantt.dependencies', 'gantt.drawtask', 'gantt.groups', 'gantt.labels',
    'gantt.movable', 'gantt.overlap', 'gantt.progress',
    'gantt.resizeSensor', 'gantt.sections', 'gantt.sortable',
    'gantt.table', 'gantt.tooltips', 'gantt.tree'])
  .service('DemoService', window.demoService)
  .controller('DemoCtrl', window.demoController)
  .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false); // Remove debug info (angularJS >= 1.3)
}]);
