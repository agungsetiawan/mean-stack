var AgungApp = angular.module('AgungApp', ['ngRoute','commentService','controller']);

		// configure our routes
	AgungApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'listPageController'
			})

			// route for the about page
			.when('/edit/:id', {
				templateUrl : 'pages/edit.html',
				controller  : 'editPageController'
			})

			// route for the contact page
			.when('/create', {
				templateUrl : 'pages/create.html',
				controller  : 'createPageController'
			})
			.otherwise({redirectTo: '/'});
	});