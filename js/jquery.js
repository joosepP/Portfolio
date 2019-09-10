$(document).ready(function(){
    $("body").hide().fadeIn(3000);
});

$('#downOrient').click(function(event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 3000);
                                     
});