// We transformed Controller to be a es6 class instead of just a function (it will be easier to move things to Angular2 in the future)
// We create angular module with the same name as the Component
// We export angular module
// We changed templateUrl

import angular from 'angular'
import angularMeteor from 'angular-meteor'

import template from './partiesList.html'

class PartiesList {
	constructor($scope, $reactive) {
		'ngInject'
		$reactive(this).attach($scope)
		this.helpers({
			parties() {
				return Parties.find({'name':'tests'})
			}
		})
	}
}
const name = 'partiesList'

// create module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: PartiesList
})