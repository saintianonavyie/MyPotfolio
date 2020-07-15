

$(document).ready(function() {
        
    /* Navigation scroll */

      // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
});






(function() {
/****** MOBILE NAVIGATION IN ACTION ON CLICK*******/
var screenSize = window.matchMedia("(max-width: 636px)");
hideAndShow(screenSize);
screenSize.addListener(hideAndShow);


function hideAndShow(screenSize) {
        var display = document.querySelector('#nav-lists').style.display = 'none';
   
            document.querySelector('.fa-bars').style.display = 'block',
            document.querySelector('.fa-window-close').style.display = 'none',
            document.querySelector('#nav-lists').style.display = 'none',
            document.getElementById('nav-logo').style.justifyContent = 'flex-start'

        ///***///THE MAIN CLICK FUNCTION PERFORMED HERE///***///
    if (screenSize.matches) {        
    document.querySelector('.nav-icon').addEventListener('click', function() {
        if (display == document.querySelector('#nav-lists').style.display) {
    
        document.querySelector('.fa-bars').style.display = 'none';
        document.querySelector('.fa-window-close').style.display = 'block';
        document.querySelector('#nav-lists').style.display = 'flex';
        document.getElementById('nav-logo').style.justifyContent = 'center';
    
    } else {
        document.querySelector('.fa-bars').style.display = 'block',
        document.querySelector('.fa-window-close').style.display = 'none',
        document.querySelector('#nav-lists').style.display = 'none',
        document.getElementById('nav-logo').style.justifyContent = 'flex-start'
    }
    
    });
    
    } else {
        document.querySelector('#nav-lists').style.display = 'flex';
        document.querySelector('.fa-bars').style.display = 'none';
    }
};
})();
    

///***///THE IMAGE/TEXT CLICK FUNCTION PERFORMED HERE///***///
(function() {
var showImage = document.querySelector('#my-photo1').style.display = 'block';
 
document.querySelector('.my-details').addEventListener('click', function() {
    if (showImage == document.querySelector('#my-photo1').style.display) {
      document.querySelector('#my-photo1').style.display = 'none';
      document.querySelector('#my-photo2').style.display = 'block';
      document.getElementById('description-works-2').style.display = 'flex';
      document.getElementById('description-works').style.display = 'none';
      document.querySelector('.showSomething').style.display = 'none';
      document.querySelector('.Cultural').style.display = 'flex';
      document.getElementById('description-works-2').addClass.toggle('description-center');

    } else {
      document.querySelector('#my-photo1').style.display = 'block';
      document.querySelector('#my-photo2').style.display = 'none';
      document.getElementById('description-works-2').style.display = 'none';
      document.getElementById('description-works').style.display = 'block';
      document.querySelector('.showSomething').style.display = 'block';
      document.querySelector('.Cultural').style.display = 'none';
    }
});
})();










