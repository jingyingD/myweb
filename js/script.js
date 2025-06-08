/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });

    /* ########################################### hero parallax ############################################## */
    window.onload = function () {
        var parallaxBox = document.getElementById('parallax');
        if (parallaxBox) {
            var c2left = document.getElementById('l2')?.offsetLeft || 0,
                c2top = document.getElementById('l2')?.offsetTop || 0,
                c3left = document.getElementById('l3')?.offsetLeft || 0,
                c3top = document.getElementById('l3')?.offsetTop || 0,
                c4left = document.getElementById('l4')?.offsetLeft || 0,
                c4top = document.getElementById('l4')?.offsetTop || 0,
                c5left = document.getElementById('l5')?.offsetLeft || 0,
                c5top = document.getElementById('l5')?.offsetTop || 0,
                c6left = document.getElementById('l6')?.offsetLeft || 0,
                c6top = document.getElementById('l6')?.offsetTop || 0,
                c7left = document.getElementById('l7')?.offsetLeft || 0,
                c7top = document.getElementById('l7')?.offsetTop || 0,
                c8left = document.getElementById('l8')?.offsetLeft || 0,
                c8top = document.getElementById('l8')?.offsetTop || 0,
                c9left = document.getElementById('l9')?.offsetLeft || 0,
                c9top = document.getElementById('l9')?.offsetTop || 0;

            parallaxBox.onmousemove = function (event) {
                event = event || window.event;
                var x = event.clientX - parallaxBox.offsetLeft,
                    y = event.clientY - parallaxBox.offsetTop;

                mouseParallax('l2', c2left, c2top, x, y, 25);
                mouseParallax('l3', c3left, c3top, x, y, 20);
                mouseParallax('l4', c4left, c4top, x, y, 35);
                mouseParallax('l5', c5left, c5top, x, y, 30);
                mouseParallax('l6', c6left, c6top, x, y, 45);
                mouseParallax('l7', c7left, c7top, x, y, 30);
                mouseParallax('l8', c8left, c8top, x, y, 25);
                mouseParallax('l9', c9left, c9top, x, y, 40);
            };
        }
    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        if (obj) {
            var parentObj = obj.parentNode,
                containerWidth = parseInt(parentObj.offsetWidth),
                containerHeight = parseInt(parentObj.offsetHeight);
            obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
            obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
        }
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });

    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // star-sm轻微漂浮
    document.addEventListener('mousemove', function(e){
        const layer13 = document.getElementById('l13');
        if (layer13) {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            layer13.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        }
    });  

    document.addEventListener('mousemove', function(e){
        const layer12 = document.getElementById('l12');
        const layer13 = document.getElementById('l13');
        if (layer13) {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            layer13.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        }
    });

})(jQuery);