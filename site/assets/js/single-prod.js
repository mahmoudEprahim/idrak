$(function(){
    'use strict'

    // navigation
    $('li.drop-down > a').click(function(event){
        event.preventDefault();
    });
    //
    
    // Mobile Navigation
    $(document).on('click', '#sidebarMenu .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
    });

    $('.mobile-nav-menu input[type="checkbox"]').click(function(){
        $('body').toggleClass('sidebarMenu-overflow')
    });
    //
    
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#header').addClass('header-scrolled');
            $('#topbar').addClass('topbar-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('#topbar').removeClass('topbar-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
    };
    //

    // buttons effect
    $('.btn').hover(function(){
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200)
    }, function(){
        $(this).find('span').eq(0).animate({
            width: 0
        }, 200)
    });
    //

    // toggle modules slides
    $('.slider-navigator__item').click(function(){
        $(this).addClass('slider-navigator-active-fill').siblings().removeClass('slider-navigator-active-fill');
        $('#' + $(this).data('slide')).addClass('modules-content-active').siblings().removeClass('modules-content-active');
    })

    var intModulesSection;
     intModulesSection = setInterval(function intervalModules(){

            if($('.slider-navigator-active-fill').is(':last-child')){
                $('.slider-navigator__item').eq(0).click()
            }else{
                $('.slider-navigator-active-fill').next().click()
            }
    
        }, 15000);

    $('.slider-navigator__item').mouseleave(function(){
        intModulesSection = setInterval(function intervalModules(){

            if($('.slider-navigator-active-fill').is(':last-child')){
                $('.slider-navigator__item').eq(0).click()
            }else{
                $('.slider-navigator-active-fill').next().click()
            }
    
        }, 15000);
    })

    $('.slider-navigator__item').mouseover(function(){
        clearInterval(intModulesSection);
    })
    
    //

    // header business-type-welcome & features-welcome & techstation-about-welcome & techstation-contact-welcome & benefits-welcome height & Technical-support welcome
    if($(window).width() < 767)
    {
        $('.mt-outer-of-pages-welcome').css('marginTop', '55.9722px');
    } else {
        $('.mt-outer-of-pages-welcome').css('marginTop', '70px');
    }
    //mt-outer-of-pages-welcome
    //

    // bottom-popup
    $('.bottom-popup-show').click(function(){
        $('body').addClass('bottom-popup-overflow');
        $($(this).data('popup')).fadeIn(300);
    })

    $('.bottom-popup').click(function(){
        $(this).fadeOut(300);
        $('body').removeClass('bottom-popup-overflow');
    })

    $('.popup-close').click(function(){
        $('.bottom-popup').fadeOut(300);
        $('body').removeClass('bottom-popup-overflow');
    })

    $('.bottom-popup-panel-wrapper').click(function(e){
        e.stopPropagation();
    })
    //

    // start auto slider for testemonials

    $('.testemonials .fa-chevron-left').click(function(){
        $('.testemonials .t-slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).fadeOut(100, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                })
            }else{
                $(this).fadeOut(100, function(){
                    $(this).removeClass('active');
                    $('.testemonials .t-slider div').eq(0).addClass('active').fadeIn();
                })
            }
        })
    })

    $('.testemonials .fa-chevron-right').click(function(){
        $('.testemonials .t-slider .active').each(function(){
            if(!$(this).is(':first-child')){
                $(this).fadeOut(100, function(){
                    $(this).removeClass('active').prev().addClass('active').fadeIn();
                })
            }else{
                $(this).fadeOut(100, function(){
                    $(this).removeClass('active');
                    $('.testemonials .t-slider div:last-child').addClass('active').fadeIn();
                })
            }
        })
    })

    var intTestemonialsSection;

    intTestemonialsSection = setInterval(function(){
        $('.testemonials .fa-chevron-left').click()
    }, 10000)

    $('.testemonials .fa-chevron-right, .testemonials .fa-chevron-left').mouseleave(function(){
        intTestemonialsSection = setInterval(function(){
            $('.testemonials .fa-chevron-left').click()
        }, 10000)
    })

    $('.testemonials .fa-chevron-right, .testemonials .fa-chevron-left').mouseover(function(){
        clearInterval(intTestemonialsSection);
    })
    
    //

    // Show and hide industries-menu
	$('.img-for-full-window-show').on('click', function () {

		$('#' + $(this).data('value')).addClass('show');
		$('body').children().hide();
		$('.full-image-window').show();
		$(window).scrollTop(0);
	});

	$('#close-full-window .fa-times').on('click', function () {

		$('.full-image-window').removeClass('show');
		$('body').children().show();
		$('body').children('script').hide();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
    });

    // ِAnimate To Modules
    $('.industries-items .industries-item-content').on('click', function () {

		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        
    });
    
	//----------------------------------------------------------------//
    
});