
import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let condition = $('#condition-search').val();

    //API CALL
    getData(condition, function(response) {
    //connection success
      $('#output').append(`Successful API Connection. You did it! You searched for:  ${condition}. The search found ${response.data[0].profile}`);
      const doctorProfile = response.data[0].profile.first_name;
      console.log(doctorProfile);
      $('#output2').append("Doctor Profile: " + doctorProfile);
    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${condition} . Please try again.`);
    });
    //



  });
});
