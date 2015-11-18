app
  .controller("MainController", ["$scope", "uiCalendarConfig", "$timeout", "$compile", function($scope, uiCalendarConfig, $timeout, $compile) {

    //get current date in variables
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    console.log("This is the newest version");
    $scope.test = "hello";
    $scope.eventSource = {
      googleCalendarId: "lk2ft9bah38bgde86rdn4ni8lk@group.calendar.google.com",
      googleCalendarApiKey: "AIzaSyDXkhOqrclsjGDNElsA-joExWX0TfBUiSM",
    };
    console.log("Got past the newest version");
    $scope.addRemoveEventSource = function(sources, source) {
      //does both adding and removing
      //if source is in sources, then remove it
      //if not, the push the given source into the sources array.
      var canAdd = 0;
      angular.forEach(sources, function(value, key) {
        if (sources[key] === source) {
          sources.splice(key, 1);
          canAdd = 1;
        }
      });
      if (canAdd === 0) { //if canAdd is 0, then nothing was deleted.
        //so add something.
        sources.push(source);
      } /* If you didn't remove anything, add the source */
    };

    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
          //adds an event to the events object with standard presets
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index, 1);
      //splice will go to index and delete "1" item starting at that index
    };

    $scope.renderCalender = function(calendar) {
      $timeout(function() {
        if (uiCalendarConfig.calendars[calendar]) {
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
        //render displays the calendar to the DOM
      });
    };


    /* Render Tooltip */
    $scope.eventRender = function(event, element, view) {
      element.attr({
        'tooltip': event.title,
        'tooltip-append-to-body': true
      });
      $compile(element)($scope);
    };

    // uiConfig is where you can set the details about the calendar.
    // calendar object inside is what calendar is initialized with
    // the rest is for other things
    $scope.uiConfig = {
      calendar: {
        height: 450,
        editable: true,
        header: {
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        displayEventTime: false,
        //,
        //  dayClick: $scope.alertEventOnClick,
        //  eventDrop: $scope.alertOnDrop,
        //  eventResize: $scope.alertOnResize
      },
    }

    $scope.eventSources = [$scope.eventSource];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
  }]);


//https://calendar.google.com/calendar/feeds/lk2ft9bah38bgde86rdn4ni8lk%40group.calendar.google.com/public/basic
//public google calendar
