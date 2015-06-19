
<h2>File : {{ file.fileName }}</h2>
<alert type='danger' ng-if="condition === 'dirtydata'">Please save your changes first.</alert>
<div class="panel panel-default">
<nav class="navbar navbar-default">
	<a ng-click="save(file.fileName, file.fileData)" 
		class="btn btn-sm btn-default" 
		ng-disabled="fileForm.$pristine">Save</a>
</nav>
	<div class="panel-body">
		<form name="fileForm" class="col-md-12">
			<div class="form-group">
				<label class="col-md-12">Edit</label>
				<textarea 
					class="col-md-12" 
					ng-model="file.fileData">
				</textarea>
				<editor 
					class="col-md-12" 
					ng-model="file.fileData">
				</editor>
			</div>
		</form>
	</div>
</div>