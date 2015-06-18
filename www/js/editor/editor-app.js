(function() {
  'use strict';
  angular.module('editorApp', ['ngMaterial', 'ngRoute'])
  .config(['$routeProvider', configFn]);

  function configFn($routeProvider) {
  	$routeProvider
  	.when('/', {
  		template: '<h2>Select a file...</h2>'
  	})
  	.when('/file/:fileName', {
  		templateUrl: 'templates/editor/editor.html.tpl',
  		controller: 'EditorController'
  	})
  	.otherwise({
  		redirectTo: '/'
  	});
  }

}());