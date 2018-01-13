var apiKey = require('./../.env').apiKey;
var searchLimit = 10;
export function getQuery(search, arg1, arg2){
  $.ajax({
    url:`https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&location=or-portland&skip=0&limit=${searchLimit}&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      arg1(response);
    },
    error: function(response) {
      arg2();
    }
  });
}

export function getByName(name, arg1, arg2){
  $.ajax({
    url:`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=${searchLimit}&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log("hello");
      arg1(response);
    },
    error: function(response) {
      arg2();
    }
  });
}
