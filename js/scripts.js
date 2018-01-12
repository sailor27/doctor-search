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
      console.log(response.data);

    },
    error: function(response) {
      arg2();
    }
  });
}

export class Results {
  constructor(stuff1, stuff2){
    this.stuff1 = stuff1;
    this.stuff2 = stuff2;
  }

}
