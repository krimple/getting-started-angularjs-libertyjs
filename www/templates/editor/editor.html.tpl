
<h2>File : {{ file.fileName }}</h2>
<alert type='danger' 
      ng-if="vm.condition === 'dirtydata'">Please save your changes first.</alert>
<div class="panel panel-default">
<nav class="navbar navbar-default">
	<a ng-click="vm.save(vm.file.fileName, vm.file.fileData)" 
		class="btn btn-sm btn-default" 
		ng-disabled="vm.fileForm.$pristine">Save</a>
</nav>
	<div class="panel-body">
		<form name="vm.fileForm" class="col-md-12">
			<div class="inline-form">
				<label class="col-md-12">Edit</label>
				<textarea 
				    style="height: 500px;"
					class="col-md-6" 
					ng-model="vm.file.fileData">
				</textarea>
				</div>
				<div class="form-group">

				<preview
					class="col-md-6" 
					ng-model="vm.file.fileData">
				</preview>
			</div>
		</form>
	</div>
</div>