var apiKey = require('./../.env').apiKey;
var searchLimit = 2;
export function getData(condition, arg1, arg2){
  $.ajax({
    url:`https://api.betterdoctor.com/2016-03-01/doctors?query={$condition}&location=or-portland&skip=0&limit=${searchLimit}&user_key=${apiKey}`,
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

export class Results {
  constructor(doctors){

  }

}
