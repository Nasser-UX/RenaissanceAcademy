(function ($) {
    "use strict";
  
    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });

    // nice scroll

        // $("body").niceScroll({
        //     cursorcolor: "#178ac8",
        //     cursorwidth: "5px",
        //     cursorborder: "0",
        // });
 
  
    // Back to top button
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $('.back-to-top').fadeIn('slow');
    //   } else {
    //     $('.back-to-top').fadeOut('slow');
    //   }
    // });

    // $('.back-to-top').click(function(){
    //   $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    //   return false;
    // });
  
    // Initiate the wowjs animation library
   
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });

    new WOW().init();
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
      //  start main carousel

      $('.owl-carousel.home_slider').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    //  start Courses carousel

    $('.courses_slider.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin: 20,
        navigation: true,
        navigationText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            990:{
                items:3
            },
            1200: {
                items:4
            }
        }
    })

    //  start Testimonials carousel

    $('.testimonials_carousel.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        center: false,
        dots: true,
        margin: 20,
        // autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            990:{
                items:3,
            },
            1000:{
                items:3
            }
        }
    })


    //  start partners carousel

    $('.partners_carousel.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        nav: false,
        dots: false,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            990: {
                items:4
            },
            1200:{
                items:5
            }
        }
    })
 
    //  start datetime picker

    $('#datetimepicker1').datetimepicker({
        format: 'L'
    });
    $('#Reservation_datetime').datetimepicker({
        format: 'L'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'L'
    });
    $('#Inline_datepicker').datetimepicker({
        inline: true,
        format: 'L',
    });

    $('#accordion .card-header button').click(function (e) {
        $('.card-header button + span svg').toggleClass('fa-plus fa-minus');
    });
 
    $('.with_sub li').click(function() {
        $(this).toggleClass('active');
    });

    $('.open_request').click(function() {
        $('.request_solution').slideToggle(500);
    })

  })(jQuery);

