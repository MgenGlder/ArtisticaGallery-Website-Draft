angular.module("app", ["ui.calendar", "ngRoute", "ngAnimate"])
			.config(["$routeProvider", function ($routeProvider) {
				$routeProvider.
					when("/index", {
						templateUrl: "/partials/index.html",
						controller: "RootController"
					}).
					when("/about", {
						templateUrl: "/partials/about.html",
						controller: "RootController"
					}).
					when("/contact", {
						templateUrl: "/partials/contact.html",
						controller: "hoursController"
					}).
					when("/events", {
						templateUrl: "partials/events.html",
						controller: "MainController"
					}).
					when("/gallery", {
						templateUrl: "partials/gallery.html",
						controller: "RootController"
					}).
					when("/partner1", {
						templateUrl: "partials/aboutPartner1.html",
						controller: "RootController"
					})
					.when("/partner2", {
						templateUrl: "partials/aboutPartner2.html",
						controller: "RootController"
					})
					.when("/partner3", {
						templateUrl: "partials/aboutPartner3.html",
						controller: "RootController"
					}).
					otherwise({
						redirectTo: "/index"
					});
			}])
