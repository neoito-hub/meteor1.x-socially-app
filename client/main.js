import angular from 'angular'
import angularMeteor from 'angular-meteor'

angular.module('socially',[
	angularMeteor
])
.controller('PartiesListCtrl',function($scope, $reactive){
	'ngInject'

	// We also need to call $reactive now and attach the $scope in order to declare 
	// and extend the controller, and turn it to Reactive controller.
	$reactive(this).attach($scope);
	// A helper could be a function or any other variable type.

	// Functions will re-run every time something inside has changed and will bind
	// the returned value to a scope variable and to the view
	// Regular values will be declared both as Reactive Vars and scope variable. 
	// That means that they will bind directly to the view with Angular and also 
	// fire a Meteor change event to trigger a re-run if they are used inside a 
	// helper function or a Meteor.autorun
	this.helpers({
		// This line declares a new $scope.parties variable (so we don't need to 
		// do something like $scope.parties = []; ) and then binds it to the
		// Parties Mongo collection.
		// So you can access that $scope.parties exactly like you did before.
		parties(){
			// In this example, we return a MongoDB Cursor (the return value of find),
			// which is a function, and Angular-Meteor wraps it as array, so when we 
			// will use $scope.parties (in view or in a controller) - it would be a 
			// regular JavaScript array!
			return Parties.find({})
		}
	})
})
.component('partiesList', {
	templateUrl: 'client/partiesList.html',
	controllerAs: 'partiesList',
	controller($scope, $reactive){
		'ngInject'
		$reactive(this).attach($scope);
		this.helpers({
			parties(){
				return Parties.find({})
			}
		})
	}
})