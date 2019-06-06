$(function () {
    //* Navbar Fixed
    var nav_offset_top = $('header').height() + 50;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top ) {
            $(".header_area").addClass("navbar_fixed");
        } else {
            $(".header_area").removeClass("navbar_fixed");
        }
    });

    $(".brand-carousel").owlCarousel({
        items: 1,
        autoplay:false,
        loop:true,
        nav:false,
        dots:false,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 6,
            }
        }
    });

    function active_testimonial() {
        if ($('.active_testimonial').length) {
            $('.active_testimonial').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots: true,
                responsiveClass: true
            })
        }
    }
    active_testimonial();

    $('#play-home-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });
});

