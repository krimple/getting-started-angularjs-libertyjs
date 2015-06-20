(function(angular) {
  'use strict';
  
  angular.module('editorApp')
  .directive('preview', preview);

  function preview($sce) {
  	return {
  		restrict: 'E',
  		require: 'ngModel',
  		template: '<div style="border: 1px solid black; height: 500px !important;" ng-bind-html="value"></div>',
  		link: function(scope, element, attr, ngModelCtrl) {
  			ngModelCtrl.$render = function() {
  				scope.value = $sce.trustAsHtml(ngModelCtrl.$viewValue);
  			};
  			ngModelCtrl.$formatters.push(function(modelValue) {
  				return modelValue;
  			});
  			ngModelCtrl.$parsers.push(function(viewValue) {
  				return viewValue;
  			});
  			scope.$watch('value', function() {
  				// if we already have a wrapped trusted string, it's
  				// an object - so ask for the string of it
  				if (typeof scope.value === 'object') {
  					ngModelCtrl.$setViewValue(scope.value.toString());	
  				} else {
  				//ngModelCtrl.$setViewValue(scope.value);
  					ngModelCtrl.$setViewValue($sce.trustAsHtml(scope.value));
  				}
  			});
  		}
  	}

  }
}(window.angular));