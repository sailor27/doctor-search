
import { getQuery, getByName} from './../js/scripts.js';
$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let search = $('#condition-search').val();

    //API CALL FOR QUERY SEARCH
    getQuery(search, function(response) {
    //connection success
      $('#output').empty();
      $('#output2').empty();
      $('#output').append(`Successful API Connection. You did it! <br> You searched for:  ${search}. <br> The search found ${response.data.length} results:`);

      if (response.data.length < 1) {
        $('#none').append(`Your search for the condition ${search} returned 0 results. Please try another term, or try searching by doctor name.`);
      } else{
        let i;
        for (i = 0; i < response.data.length; i++){
          let doctor = response.data[i];
          let address = doctor.practices[0].visit_address;
          console.log(address);
          $('#output2').append("<h5>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</h5>" + "<ul>" + "<li>" + address.street + "</li>" + "<li>" + address.city + ", " + address.state + ", " + address.zip + "</li>" + "</ul>");
        }
      }
    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${search} . Please try again.`);
    });
  });

  $('#search2').submit(function() {
    event.preventDefault();
    let name = $('#name-search').val();
    //API CALL FOR NAME SEARCH
    getByName(name, function(response) {
      $('#output3').empty();
      $('#output4').empty();

    //connection success
      $('#output3').append(`Successful API Connection. You did it! <br> You searched for:  ${name}. <br> The search found ${response.data.length} results.`);

      if (response.data.length < 1) {
        $('#none').append(`Your search for the condition ${name} returned 0 results. Please try another first or last name, or try searching by condition.`);
      }
      var i;
      for (i = 0; i < response.data.length; i++){
        let doctor = response.data[i];
        let address = doctor.practices[0].visit_address;
        $('#output4').append("<h5>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</h5>" + "<ul>" + "<li>" + address.street + "</li>" + "<li>" + address.city + ", " + address.state + ", " + address.zip + "</li>" + "</ul>");
      }
    },
    //connection failure
      function() {
      $('#output1').text(`NO API CONNECTION. There was an error processing your search for ${name} . Please try again.`);
    });
  });
}); // end of document.ready


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
