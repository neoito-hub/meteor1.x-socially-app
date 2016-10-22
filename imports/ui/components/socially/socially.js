import angular from 'angular'
import angularMeteor from 'angular-meteor'

import template from './socially.html'
import {name as PartiesList} from '../partiesList/partiesList'

class Socially {}
const name = 'sociallyx'

//create a module
export default function() {

console.log('hi')
return angular.module(name,[
	angularMeteor,
	PartiesList
]).component(name, {
	template,
	controllerAs: name,
	controller : Socially
})
}()