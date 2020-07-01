

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

        ///***///THE MAIN CLICK FUNCTION PERFORMED HERE///***///
        
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

    

///***///THE IMAGE/TEXT CLICK FUNCTION PERFORMED HERE///***///

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













