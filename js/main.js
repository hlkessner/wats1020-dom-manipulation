//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

$('.btn-login').on('click',function(){
  var email=$('.email-input').val();
  //hides the login form when the user logs into the page
  $("#login-form").hide();
  //fills in the users info once they're logged in 
  $('.user-info').show();
  $('.user-fullname').html(email);

  
    // A function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
  
        $('.view-details').on('click',function(event){
          console.log(event);
          var targetElement = event.target;
          //When user clicks a "view details" button, find the parent of that element.
          var container= targetElement.parentElement.parentElement;
          //Within that parent, find all the elements that have the class `details`.
          $(container).find('.details').each(function (index,el) {
            //Toggle visibility of all the elements within that parent with the class `details`.
            if ($(el).is (':visible') ) {
              $(el).fadeOut();
              targetElement.innerText = "Veiw Details"
            } else {
              $(el).fadeIn();
              targetElement.innerText = "Hide Details"
            }
          });
        });

    // A function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
  
$('.vote').on('click',function(event){
  var currentWidth;
  // When a button is clicked, look at the `data-vote` attribute to determine
    //what the user is voting for ("great" or "greatest").
  if ($(event.target).data('vote') == 'great') {
    //changes the width of the great bar
    currentWidth= $('.great-progress').width();
    if (currentWidth + 72 > 720) {
      currentWidth= 720;
    } else {
      currentWidth += 72;
    }
    $('.great-progress').width(currentWidth);
  } else {
    //changes the width of the greatest bar
    currentWidth= $('.greatest-progress').width();
    if (currentWidth + 72 > 720) {
      currentWidth= 720;
    } else {
      currentWidth += 72;
    }
    $('.greatest-progress').width(currentWidth);
  }

});
});
});