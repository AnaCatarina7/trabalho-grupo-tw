const Carousel = document.querySelector('#carousel');

if (window.matchMedial("(min-width:576px)").matches){
   const carousel = new bootstrap.Carousel(carousel, {
    interval: false
   })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();
    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
    if (scrollPosition > 0){
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
    });
}else{
    
}
