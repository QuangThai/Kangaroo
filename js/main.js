$(document).ready(function () {
    // sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#header-mid').addClass("sticky");
        } else {
            $('#header-mid').removeClass("sticky");
        }
    });

    //ScrollUp
    $.scrollUp({
        scrollText: '<i class="fas fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 600,
        animation: 'fade'
    });

    // Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 2,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    });

    // Tooltip
    $(function () {
        $('[data-hieuung="tooltip"]').tooltip();
    });

    //Scroll Menu
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height >= 500) {
            $('.scroll-menu, .scroll-qc').addClass('visible');
        } else {
            $('.scroll-menu, .scroll-qc').removeClass('visible');
        }
    });

    // add to cart
    $(document).on('click','.btn-buy', function(e){
        e.preventDefault();
        var parent = $(this).parents('.product-single');
        var cart = $(document).find('#cart-shop');
        var src = parent.find('img').attr('src');
        var parTop = parent.offset().top;
        var parLeft = parent.offset().left;
        $('<img />', {
            class: 'img-product-fly',
            src: src
        }).appendTo('body').css({
            'top':parTop,
            'left':parseInt(parLeft) + parseInt(parent.width()) -50
        });

        setTimeout(function(){
            $(document).find('.img-product-fly').css({
                'top' : cart.offset().top,
                'left' : cart.offset().left
            });
            setTimeout(function(){
                 $(document).find('.img-product-fly').remove();
                var countItem = parseInt(cart.find('#cart-number').data('count'))+1 ;
                cart.find('#cart-number').text(countItem).data('count',countItem);
            },1000);

        },500);
    });
});





// Khẳng định hay bác bỏ {A}P{B}?
// Mệnh đề  { A: x<-y; x<2; x,y thuộc R}
//  		{ B: y>-x+1; x,y thuộc R}
//  		Đoạn trình P 
//  			y:=x^2-3
//  			x:-x+1;