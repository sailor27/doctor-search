var apiKey = require('./../.env').apiKey;
export function getData(condition, arg1, arg2){
  $.ajax({
    url:`https://api.betterdoctor.com/2016-03-01/doctors?query={$condition}&location=or-portland&skip=0&limit=1&user_key=${apiKey}`,
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
