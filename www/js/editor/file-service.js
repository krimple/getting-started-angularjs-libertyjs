(function(angular) {
  'use strict';

  angular.module('editorApp')
  .service('fileService', ['$log', FileService]);

  function FileService($log) {
    var files = [{
      fileName: 'customers.json',
      fileData: '[{"id": 1, "name" : "customerCo"}]'
    }, {
      fileName: 'description.txt',
      fileData: 'blah blah blah'
    }];

    this.files = files;

    this.getFile = function(fileName) {
      var file = locateFile(files, fileName);
      if (file) { 
        return angular.copy(file);
      } else {
        throw('no file found with this filename');
      }
    };

    this.saveFile = function(fileName, fileData) {
      var file = locateFile(files, fileName);
      if (file) {
        file.fileData = fileData;
      } else {
        files.push({ fileName: fileName, fileData: fileData});
      }
    };
  }

  function locateFile(files, fileName) {
    var result = files.find(function(element) {
      return angular.copy(element.fileName === fileName);
    });
    if (angular.isArray(result)) { 
      return result[0];
    } else {
      return result;
    } 
  }
}(window.angular));