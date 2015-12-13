angular.module("app")
		.controller("RootController", ["$scope", "$compile","$location", function ($scope, $compile, $location){
			$scope.location = "dung";
			$scope.tabLocation = function (location, e){
				$scope.location = location;
				e.preventDefault();
				$location.path("/" + location);
				console.log(location + " clicked on!");
			}
			$scope.$watch("location", function(oldValue, newValue){
				
			})
			
		}])
		.animation(".reveal-animation", function () {
			return {
				enter: function(element, done) {
					element.css("display", "none");
					element.fadeIn(500, done)
					return function() {
						element.stop();
					}
				},
				leave: function (element, done){
					element.css("display", "none");
					element.fadeOut(500, done)
					return function (){
						element.stop();
					}
				}
			}
		})