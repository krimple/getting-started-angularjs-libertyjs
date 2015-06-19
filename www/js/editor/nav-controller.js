(function(angular) {
  'use strict';
  angular.module('editorApp')
  .controller('NavController', ['$scope', 'fileService', NavController]);

  function NavController($scope, fileService) {
  	$scope.files = fileService.files;

  	$scope.addFile = function(newName) {
  		$scope.files.push({ fileName: newName, fileData: 'edit me!'});
  	};
  }
}(window.angular));