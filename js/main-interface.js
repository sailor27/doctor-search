
import { getData, Results } from './../js/scripts.js';

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let condition = $('#condition-search').val();

    //API CALL
    getData(condition, function(response) {
    //connection success
      $('#output').append(`Successful API Connection. You did it! You searched for:  ${condition}. The search found ${response.data.length} results`);
      // $('#output2').append(firstDoctor.profile.first_name);
    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${condition} . Please try again.`);
    });
    //
    // console.log(getData());
    // const newResults = new Results(response.data);
    // console.log(newResult);



  });
});

//for loop experiment to get doctor arrays out of fetched array
        // for (i=0; i < response.data.length; i++){
        //   let doctor = [i].pop();
        //   console.log("doctor")
        // }

//for each experiment to get first doctor from fetched array
      // response.data.forEach(function(doctor){
      //   var firstDoctor = response.data.pop();
      //   console.log(firstDoctor);
      // });
