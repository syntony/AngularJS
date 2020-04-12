// SERVICES
weatherApp.service('cityService', function() {
  this.city = 'New York';
});

weatherApp.service('weatherService', [
  '$resource',
  function($resource) {
    this.GetWeather = function (city, days) {
      var weatherAPI =
        $resource(
          'http://api.openweathermap.org/data/2.5/forecast?APPID=' + openWeatherMapKey,
          {callback: 'JSON_CALLBACK'},
          {get: {method: 'JSONP'}},
        );

      return weatherResult =
        weatherAPI.get({
          q: city,
          cnt: days,
          units: 'metric',
        });
    };
  },
]);