'use strict';

//var pathname = window.location.pathname; // Returns path only
//var url = window.location.href;     // Returns full URL

$(document).ready(function () {
    $('a').on('click', function () {
        switch (this.id) {
            case 'navNews':
                SmoothSlide('#myNews');
                //scrollTo = '#myNews';
                break;
            case 'navProjects':
                SmoothSlide('#myProjects');
                //scrollTo = '#myProjects';
                break;
            case 'navBlogs':
                SmoothSlide('#myBlogs');
                //scrollTo = '#myBlogs';
                break;
            default:
                break;
        }

        //$('html, body').animate({
        //    scrollTop: $(scrollTo).offset().top
        //}, 900);
    });
    //alert(pathname);
    // Add smooth scrolling to all links in navbar + footer link
    //$(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    //    // Prevent default anchor click behavior
    //    event.preventDefault();

    //    // Store hash
    //    var hash = this.hash;

    //    // Using jQuery's animate() method to add smooth page scroll
    //    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    //    $('html, body').animate({
    //        scrollTop: $(hash).offset().top
    //    }, 900, function () {

    //        // Add hash (#) to URL when done scrolling (default click behavior)
    //        window.location.hash = hash;
    //    });
    //});

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
});

function SmoothSlide(scrollTo) {
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 900);
}