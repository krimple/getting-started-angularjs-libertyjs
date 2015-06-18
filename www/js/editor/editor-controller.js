(function() {
  'use strict';
  angular.module('editorApp')
  .controller('EditorController', ['$scope', '$routeParams', 'fileService', EditorController]);

  function EditorController($scope, $routeParams, fileService) {
  	console.log("OUCH!");
  	var fileName = $routeParams.fileName;
  	$scope.file = fileService.getFile(fileName);
  }
}());