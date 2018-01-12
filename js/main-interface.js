
import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let search = $('#condition-search').val();

    //API CALL
    getData(search, function(response) {
    //connection success
      $('#output').append(`Successful API Connection. You did it! <br> You searched for:  ${search}. <br> The search found ${response.data.length} results`);
      var i;
      for (i = 0; i < response.data.length; i++){
        let doctor = response.data[i];
        $('#output2').append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</li>");
      }

    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${search} . Please try again.`);
    });

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
