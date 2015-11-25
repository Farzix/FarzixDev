'use strict';

$(document).ready(function () {
    $('#thisNews').click(function () {
        $('html, body').animate({
            scrollTop: $("#myNews").offset().top - 51
        }, 1000);
    });

    $('#thisProd').click(function () {
        $('html, body').animate({
            scrollTop: $("#myProd").offset().top - 51
        }, 1000);
    });

    $('#thisBlogs').click(function () {
        $('html, body').animate({
            scrollTop: $("#myBlogs").offset().top - 51
        }, 1000);
    });
});