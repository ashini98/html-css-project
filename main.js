(function($){
    "use strict";
    
    
    new WOW().init();
    
    $(".cart_link > a").on("click", function (){
        $(".mini_cart").addClass("active");
    });
    
    $(".mini_cart_close > a").on("click", function(){
        $(".mini_cart").removeClass("active");
    });
    
    $(window).on("scroll", function (){
        var scroll = $(window).scrollTop();
        if(scroll< 100){
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });
    
    function dataBackgroundImage(){
        $("[data-bgimg]").each(function (){
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image" : "url(" + bgImgUrl + ")",
            });
        });
    }
    
    $(window).on("load", function (){
        dataBackgroundImage();
    });
    
    $(".slider_area").owlCarousel({
        animateOut : "fadeOut",
        autoplay : true,
        loop : true,
        nav : false,
        autoplayTimeout : 6000,
        items: 1,
        dots : true,
    });
    
//    product column responsive
    $(".product_column3").slick({
        centerMode: true,
        centerPadding : "0",
        slidesToShow : 5,
        arrows : true,
        prevArrow :
                '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
        nextArrow :
                '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
        responsive : [
            {
                breakpoints : 400,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                },
            },
            {
                breakpoints : 768,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2,
                },
            },
            {
                breakpoints : 992,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 3,
                },
            },
            {
                breakpoints : 1200,
                settings : {
                    slidesToShow : 4,
                    slidesToScroll : 4,
                },
            },
        ],
    });
    
  //for tooltip
  $('[data-toggle="tooltip"]').tooltip();
    
    //tooltip active
    $(".action_links ul li a, .quick_button a").tooltip({
        animated : "fade",
        placement : "top",
        container : "body",
    });
    
    //product row activation responsive
    

    $(".product_row1").slick({
        centerMode: true,
        centerPadding : "0",
        slidesToShow : 5,
        arrows : true,
        prevArrow :
                '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
        nextArrow :
                '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
        responsive : [
            {
                breakpoints : 400,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                },
            },
            {
                breakpoints : 768,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2,
                },
            },
            {
                breakpoints : 992,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 3,
                },
            },
            {
                breakpoints : 1200,
                settings : {
                    slidesToShow : 4,
                    slidesToScroll : 4,
                },
            },
        ],
    });
    
    
})(jQuery);


