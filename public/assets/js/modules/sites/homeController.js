/**** script javascript ***/
// var app = angular
//           .module('appRoot', [])//, ['ngMessages','angularUtils.directives.dirPagination','ngRoute', 'currencyMask', 'ui.bootstrap'])
//           .config(function($interpolateProvider){
//               $interpolateProvider.startSymbol('[[');
//               $interpolateProvider.endSymbol(']]');
//           });

app.controller('homeController', function($scope, $cookies) {
	
	$scope.ssetCookies = function(_param){
		$cookies.username  = _param;	
		// alert('function '+_param+' diklik');
	}

	$scope.getCookies = function(_param){
		alert('username : '+$cookies.username);
		// alert('function simpan '+_param+' telah diklik 3x');
	}

});
