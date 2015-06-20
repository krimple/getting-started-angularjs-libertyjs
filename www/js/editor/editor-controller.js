(function() {
  'use strict';
  angular.module('editorApp')
  .controller('EditorController', ['$log', '$rootScope', '$routeParams', 'fileService', EditorController]);

  function EditorController($log, $rootScope, $routeParams, fileService) {
  	var fileName = $routeParams.fileName,
        vm = this;
  	vm.file = fileService.getFile(fileName);

    vm.save = function(fileName, fileData) {
    	fileService.saveFile(fileName, fileData);
    	delete vm.condition;
    	vm.fileForm.$setPristine();
    };

    // alert me when we're about to route - are we dirty?
    // and when we leave, remove our event registration
    // to save memory
    var deregister = $rootScope.$on('$routeChangeStart', function(event) {
    	if (vm.fileForm.$dirty) {
    		$log.debug('cannot route with dirty data!');
    		vm.condition = 'dirtydata';
    		event.preventDefault();
    	} else {
    		deregister();
    	}
    });
  }
}());