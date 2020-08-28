// background animation
$(window).mousemove(function(e){
    var cx = e.clientX;
    var cy = e.clientY;

    $('.landing').css({
        'background-position' : -cx/200 + 'px'
    });
    $('.landing::after').css({
        'background-position' : cx/80 + 'px'
    });
    
})


// stiky animation
$(window).scroll(function(){
    $('.navbar').toggleClass('stiky', window.scrollY > 100);
})

// span landing
$(window).on('load', function(){

    $('.landing span').toggleClass('animate');

});

// burger
$('.burger-toggle').on('click',function(){
    $('.burger-toggle span').toggleClass('open');
    $('.navbar ul').toggleClass('slide')
});
$('.container').on('click', function() {
    $('.burger-toggle span').toggleClass('open');
    $('.navbar ul').removeClass('slide')
});