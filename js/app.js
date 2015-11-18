angular.module("app").controller("hoursController", ["$scope", function($scope) {
  var tenToFour = {
    "open": "10:00 am",
    "close": "4:00 pm"
  };
  var tenToSix = {
    "open": "10:00 am",
    "close": "6:00 pm"
  };
  var tenToThree = {
    "open": "10:00 am",
    "close": "3:00 pm"
  };
  var noonToFour = {
    "open": "12:00 pm",
    "close": "4:00 pm"
  };
  console.log("in the controller at least");
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var fallHours = {
    "Sunday": "CLOSED",
    "Monday": "CLOSED",
    "Tuesday": tenToSix,
    "Wednesday": tenToSix,
    "Thursday": tenToSix,
    "Friday": tenToSix,
    "Saturday": tenToSix
  };
  var winterHours = fallHours;

  var blackFridayHours = {
    "Sunday": noonToFour,
    "Monday": tenToSix,
    "Tuesday": tenToSix,
    "Wednesday": tenToSix,
    "Thursday": tenToSix,
    "Friday": tenToSix,
    "Saturday": tenToFour
  };
  var summerHours = {
    "Sunday": noonToFour,
    "Monday": "CLOSED",
    "Tuesday": tenToSix,
    "Wednesday": tenToSix,
    "Thursday": tenToSix,
    "Friday": tenToSix,
    "Saturday": tenToFour
  };

  var displayDate = function() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    //Winter
    if (month >= 1 && month <= 2) {
      $scope.hours = winterHours;
    } else if (month == 3 && date <= 26) {
      $scope.hours = winterHours;
    }
    //Spring   --TODO need spring hours
    else if (month >= 4 && month <= 5) {
      $scope.hours = "NO HOURS REGISTERED"
    }
    //Summer
    else if (month >= 6 && month <= 8) {
      $scope.hours = summerHours;
    }
    //Fall
    else if (month == 9 && date <= 26) {
      $scope.hours = fallHours;
    }
    //Black Friday
    else if (month >= 9 && month <= 11) {
      $scope.hours = blackFridayHours;
    }
    console.log("The dirty deed has been done");
  }

  displayDate();
}]);

//Fall  9/1 - > 9/26
//Mon: CLOSED
//Tues - Fri: 10am - 6pm
//Saturday: 10am - 3pm
//Sunday: CLOSED

//Black Friday 9/27 -> 12/23
//Mon - Fri: 10am - 6pm
//Saturday: 10am - 4pm
//Sunday: 12pm - 4pm

//Winter 1/2 -> 3/21st
// Same as fall hours

//Summer  6/1 - > 7/30
//Monday: CLOSED
//Tues - Fri: 10am - 6pm
//Saturday: 10am - 4pm
//Sunday: 12pm - 4pm
