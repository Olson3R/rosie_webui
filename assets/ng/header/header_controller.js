angular.module('rosieApp.header')
  .directive('appHeader', function() {
    return {
      scope: true,
      restrict: 'A',
      templateUrl: 'ng/header/_header.tmpl.html',
      controller: function($scope) {
        $scope.navCollapsed = true
        $scope.navToggle = function() {
          $scope.navCollapsed = !$scope.navCollapsed
        }
        $scope.navCollapse = function() {
          $scope.navCollapsed = true
        }
      }
    }
  })
