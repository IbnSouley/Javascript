$(function() {
    
    //declaration des variables
    var dark = $('.hov');
    var img = $('img');

    //cacher le hover
    dark.hide();

    //montrer dark au survol de img
    img.mouseenter(function() {
        $(this).next().fadeIn('slow');
        content.addClass('content_hover');
    });
    dark.mouseleave(function() {
        $(this).fadeOut('slow');
        content.removeClass('content_hover');
    })
});