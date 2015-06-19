(function() {
  'use strict';
  angular.module('editorApp')
  .controller('EditorController', ['$log', '$scope', '$routeParams', 'fileService', EditorController]);

  function EditorController($log, $scope, $routeParams, fileService) {
  	var fileName = $routeParams.fileName;
  	$scope.file = fileService.getFile(fileName);

    $scope.save = function(fileName, fileData) {
    	fileService.saveFile(fileName, fileData);
    	delete $scope.condition;
    	this.fileForm.$setPristine();
    };

    // alert me when we're about to route - are we dirty?
    // and when we leave, remove our event registration
    // to save memory
    var deregister = $scope.$on('$routeChangeStart', function(event) {
    	if ($scope.fileForm.$dirty) {
    		$log.debug('cannot route with dirty data!');
    		$scope.condition = 'dirtydata';
    		event.preventDefault();
    	} else {
    		deregister();
    	}
    });
  }
}());