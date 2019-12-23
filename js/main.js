$(document).ready(function () {

    //pass the images to Fancybox
     $("#zoom_03").elevateZoom({
        constrainType: "height",
        zoomType: "lens",
        containLensZoom: true,
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: "active"
    });

    $("#zoom_03").on("click", function(e) {
        var ez = $('#zoom_03').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });


    // meanmenu
    jQuery('.mobile').meanmenu();
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
    $('.slider-images-wrapper').owlCarousel({
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
    $('.thumnail-item').owlCarousel({
        
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
            $('.scroll-menu, .scroll-qc').addClass("visible");
        } else {
            $('.scroll-menu, .scroll-qc').removeClass("visible");
        }
    });

    // add to cart
    $(document).on('click', '.btn-buy', function (e) {
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
            'top': parTop,
            'left': parseInt(parLeft) + parseInt(parent.width()) - 50
        });

        setTimeout(function () {
            $(document).find('.img-product-fly').css({
                'top': cart.offset().top,
                'left': cart.offset().left
            });
            setTimeout(function () {
                $(document).find('.img-product-fly').remove();
                var countItem = parseInt(cart.find('#cart-number').data('count')) + 1;
                cart.find('#cart-number').text(countItem).data('count', countItem);
            }, 1000);

        }, 500);
    });

});

