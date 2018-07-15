$(document).ready(function(){
    var largestHeader = $('h1');
    largestHeader.css({
        'font-size': '100px',
        'color': 'green',
        'margin-bottom': '145px'
    });

    $('h2').addClass('second-header');

    // $('h1').append('This is appended');

    // $('h1').prepend('This is prepended ');

    $('h1').before('This is before.');

    $('h1').after('This is after.');

});

$(function() {

});
