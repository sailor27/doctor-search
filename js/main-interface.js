
import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    let condition = $('#condition-search').val();
    getData(condition, function(response) {
      $('#output').text(`Successful API Connection. You did it! You searched for:  ${condition}`);
    }, function() {
      $('#output1').text(`There was an error processing your search for ${condition} . Please try again.`);
    });

  });
});
