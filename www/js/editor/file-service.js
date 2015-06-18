(function() {
  'use strict';

  angular.module('editorApp')
  .service('fileService', FileService);

  function FileService() {
  	var files = [
  		{ fileName: 'customers.json', fileData: '[{"id": 1, "name" : "customerCo"}]'},
  		{ fileName: 'description.txt', fileData: 'blah blah blah' }
  	];

  	this.files = files;
  	this.getFile = function(fileName) {
  		var result = files.find(function(element, index, array) { 
   			return element.fileName === 'customers.json';
		});

		if (result.length === 1) {
			return result[0];
		}
		return undefined;
  	};
  }
}());