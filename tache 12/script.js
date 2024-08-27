$(function() {
    var hello = $('.hello');
    hello.hover(function() {
        $(this).css({
            'color' : 'red'
        });
    })
});

//callbacks et chainage
$(function() {
    var btn = $('.btn');
    var paragraphe = $('p');
    btn.click(function() {
        paragraphe.hide("slow", function() {
            alert ('Le paragraphe est caché !');
        })
    })
})

//chainage
$(function() {
    var paragraphe = $('p');
    paragraphe.css({'color' : '#000000'}).css({'background-color' : 'red'});
})