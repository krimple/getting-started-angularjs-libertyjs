(function(angular) {
  'use strict';
  angular.module('editorApp')
  .controller('NavController', ['fileService', NavController]);

  function NavController(fileService) {
  	var vm = this;
  	vm.files = fileService.files;

  	vm.addFile = function(newName) {
  		vm.files.push({ fileName: newName, fileData: 'edit me!'});
  	};
  }
}(window.angular));