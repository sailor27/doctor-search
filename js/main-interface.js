
import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let condition = $('#condition-search').val();

    //API CALL
    getData(condition, function(response) {
    //connection success
      $('#output').append(`Successful API Connection. You did it! You searched for:  ${condition}. The search found ${response.data.length} results`);
      const doctorArray = [ [response.data[0]], [response.data[1]] ];
      console.log(doctorArray);
      const doctor = response.data[0].profile.first_name;
      console.log(doctor);
      $('#output2').append("Doctor Profile: " + doctor);
    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${condition} . Please try again.`);
    });
    //



  });
});
