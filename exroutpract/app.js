$( document ).ready(function() {

  $('#guess-number-form').on('submit', function(event){   // form id
    event.preventDefault();  // Prevent a link from opening the URL:
    $.ajax({
      url: '/pick-a-number',  //URL that you're sending the data to, needs to match in server.js
      method: 'GET',
      data: $('#guess-number-form').serialize(),   //Value you're sending, this is coming from the body so you'll need to add 'bodyParser' to your express   - body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
      success: handleGuessSuccess,   //what happens when the server sends back a code 200 response
      error: handleError
    });    // $.ajax({
  });     //  #guess-number-form').on('submit

  function handleGuessSuccess(guessResponse){   // from ajax - success 
    console.log(guessResponse);
    $('#high-low-correct').html(guessResponse);
  }

  $('#target-number-form').on('submit', function(event){  //  IS THIS A DUPLICATE ???
    event.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'POST',
      data: $('#target-number-form').serialize(),
      success: handleTargetChangeSuccess,
      error: handleError
    });   //  $.ajax
  });   // $('#target-number-form').on

  function handleTargetChangeSuccess(targetResponse){   // handleTargetChangeSuccess - to capture the html response of form.submit
    console.log(targetResponse);
    $('#target-number-form')[0].reset();
  }  // function handleTargetChangeSuccess

  function handleError(jqXHR, status, error){
    console.log('error:', error);
  }  // function handleError
});   //  document ).ready



//  from TA:
// $.AJAX({
// url: '/pickanum', //URL that you're sending the data to, needs to match in server.js
// data: $('input').val() //Value you're sending, this is coming from the body so you'll need to add 'bodyParser' to your express
// }).success(function(res){ //what happens when the server sends back a code 200 response
//  $('#guessResults').val('res');  //dynamically add the server's response to your page
// })
