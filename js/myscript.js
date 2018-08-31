// parallax

    $(document).ready(function(){
            $('.parallax').parallax();
    });
      
// sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav,{});

// slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider,{
        height:500,
        transition:5000,
        interval:4000
    });
    
// materialboxed

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb,{});

// scrollspy

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{})

// carousel

const carousell = document.querySelectorAll('.carousel');
M.Carousel.init(carousell,{

   
    
    indicators:true

});

// -----------fixed floating button--------------------------------------------

const fixedbtn = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(fixedbtn,{

        direction:bottom

});

