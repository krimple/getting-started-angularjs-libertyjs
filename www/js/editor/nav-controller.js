(function() {
  'use strict';
  angular.module('editorApp')
  .controller('NavController', ['$scope', 'fileService', NavController]);

  function NavController($scope, fileService) {
  	$scope.files = fileService.files;
  }
}());