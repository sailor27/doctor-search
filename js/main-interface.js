var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();

    let condition = $('#condition-search').val();
    $.ajax({
      url:`https://api.betterdoctor.com/2016-03-01/doctors?query={$condition}&location=or-portland&skip=0&limit=1&user_key=5b888eeaf84ae50166ab683362de6b01`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#output').text(`Successful API Connection. You did it! You searched for:  ${condition}`);
      },
      error: function() {
        $('#output1').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
