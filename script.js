$(function() {
    $('#header-include').load('https://archimedesclothing.github.io/header.html');
    $('#footer-include').load('https://archimedesclothing.github.io/footer.html');

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 50 ) {
            $('.navbar').addClass('solid bg-dark');
        } else {
            $('.navbar').removeClass('solid bg-dark');
        }
    });