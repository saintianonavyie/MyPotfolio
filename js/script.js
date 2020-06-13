$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    



    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
      
}); 




/****** MOBILE NAVIGATION IN ACTION ON CLICK*******/
var screenSize = window.matchMedia("(max-width: 636px)");
hideAndShow(screenSize);
screenSize.addListener(hideAndShow);


function hideAndShow(screenSize) {
    if (screenSize.matches) {
        var display = document.querySelector('#nav-lists').style.display = 'none';
        
         var items = (   
            faBars = document.querySelector('.fa-bars').style.display = 'block',
            
            windowClose = document.querySelector('.fa-window-close').style.display = 'none',
            
            navList = document.querySelector('#nav-lists').style.display = 'none',
            
            centerLogo = document.getElementById('nav-logo').style.justifyContent = 'flex-start'
         );

/////////////////////////************/////////////////////
////////////THE MAIN CLICK FUNCTION PERFORMED HERE////////////////////////////////************//////////////////////
        
document.querySelector('.nav-icon').addEventListener('click', function() {
        if (display == document.querySelector('#nav-lists').style.display) {
    
    faBars = document.querySelector('.fa-bars').style.display = 'none';
    
    windowClose = document.querySelector('.fa-window-close').style.display = 'block';
    
    navList = document.querySelector('#nav-lists').style.display = 'flex';
    
    centerLogo = document.getElementById('nav-logo').style.justifyContent = 'center';
    
    } else {
        items = (
            faBars = document.querySelector('.fa-bars').style.display = 'block',
        
        windowClose = document.querySelector('.fa-window-close').style.display = 'none',
        
        navList = document.querySelector('#nav-lists').style.display = 'none',
        
        centerLogo = document.getElementById('nav-logo').style.justifyContent = 'flex-start'
        );
    }
    
    })
    
    } else {
        document.querySelector('#nav-lists').style.display = 'flex';
        
        document.querySelector('.fa-bars').style.display = 'none';
    }
};

    



 
document.querySelector('.my-details').addEventListener('click', function() {
    document.querySelector('#my-photo1').style.display = 'none';
    
    document.querySelector('#my-photo2').style.display = 'block';
    document.querySelector('.showSomething').innerHTML = 'HOVER OVER THE DESCRIPTION';
    document.querySelector('.showSomething').style.color = 'red';
    document.querySelector('#it-works').style.overflow = 'unset';

    });














