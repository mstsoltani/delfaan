$(window).load(function(){
        $('.loader').fadeOut();    
        $('#preloader').delay(350).fadeOut('slow');    
        $('body').delay(350);   

    });
$(function() {
	
    impress().init();
	
	function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }

	window.addEventListener('impress:stepenter', function() {
	  $('.text').animate({'opacity': 1});
	  $('.chart').data('easyPieChart').enableAnimation();
	});
	
	window.addEventListener('impress:stepleave', function() {
	  $('.text').animate({'opacity': 0.4});
	  $('.chart').data('easyPieChart').disableAnimation();
	});
	
	$(".fallback-message i").click(function(){
        $(".fallback-message").css("display", "none");
    });
	
	$(".open-setting-1").show();
	$(".close-setting-1").hide();
	$(".open-setting-1").click(function(){
		$(this).hide();
		$(".close-setting-1").show();
        $(".setting-show").css({"left":"0px"});
	});
	$(".close-setting-1").click(function(){
		$(this).hide();
		$(".open-setting-1").show();
        $(".setting-show").css({"left":"-70px"});
	});
	$(".open-setting-2").show();
	$(".close-setting-2").hide();
	$(".open-setting-2").click(function(){
		$(this).hide();
		$(".close-setting-2").show();
        $(".setting-hide").css({"left":"0px"});
	});
	$(".close-setting-2").click(function(){
		$(this).hide();
		$(".open-setting-2").show();
        $(".setting-hide").css({"left":"-130px"});
	});
	
	$(".theme-4,.theme-2,.theme-3,.theme-4").click(function(){
		$("body").removeClass("delfaan-t1");
		$("body").removeClass("delfaan-t2");
		$("body").removeClass("delfaan-t3");
		$("body").addClass("delfaan-t4");
	});
	$(".theme-3").click(function(){
		$("body").removeClass("delfaan-t1");
		$("body").removeClass("delfaan-t2");
		$("body").removeClass("delfaan-t4");
		$("body").addClass("delfaan-t3");
	});
	$(".theme-2").click(function(){
		$("body").removeClass("delfaan-t1");
		$("body").removeClass("delfaan-t4");
		$("body").removeClass("delfaan-t3");
		$("body").addClass("delfaan-t2");
	});
	$(".theme-1").click(function(){
		$("body").removeClass("delfaan-t4");
		$("body").removeClass("delfaan-t2");
		$("body").removeClass("delfaan-t3");
		$("body").addClass("delfaan-t1");
	});
	
	$(".hide-nav i.faone").show();
	$(".hide-nav i.fatwo").hide();
	$(".hide-nav i.faone").click(function(){
		$(this).hide();
		$(".hide-nav i.fatwo").show();
        $("#navigator-hide").css({"margin-top":"0px","display":"block"});
    });
	$(".hide-nav i.fatwo").click(function(){
		$(this).hide();
		$(".hide-nav i.faone").show();
        $("#navigator-hide").css({"margin-top":"-350px","display":"none"});
    });
	
	$("nav.hide-nav ul#navigator-hide li a").click(function(){
		$(".hide-nav i.fatwo").hide();
		$(".hide-nav i.faone").show();
        $("#navigator-hide").css({"margin-top":"-350px","display":"none"});
    });
	
	$("a.home-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.portfolio-a,a.services-a,a.resume-a,a.blog-a,a.contact-a").removeClass("active");
	});
	$("a.skills-a").click(function(){
		$(this).addClass("active");
		$("a.home-a,a.portfolio-a,a.services-a,a.resume-a,a.blog-a,a.contact-a").removeClass("active");
	});
	$("a.portfolio-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.home-a,a.services-a,a.resume-a,a.blog-a,a.contact-a").removeClass("active");
	});
	$("a.services-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.portfolio-a,a.home-a,a.resume-a,a.blog-a,a.contact-a").removeClass("active");
	});
	$("a.resume-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.portfolio-a,a.services-a,a.home-a,a.blog-a,a.contact-a").removeClass("active");
	});
	$("a.blog-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.portfolio-a,a.services-a,a.resume-a,a.home-a,a.contact-a").removeClass("active");
	});
	$("a.contact-a").click(function(){
		$(this).addClass("active");
		$("a.skills-a,a.portfolio-a,a.services-a,a.resume-a,a.blog-a,a.home-a").removeClass("active");
	});
	
	$('.chart').easyPieChart({
        barColor: '#021533',
		trackColor: '#efefef',
		scaleColor: '#efefef',
		scaleLength: 0,
		lineCap: 'round',
		lineWidth: 8,
		size: 110,
		rotate: 0,
		animate: 1000,
    });
	
	$(".testimonials").owlCarousel({
		animateIn: 'flipInX',
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:450,
		rtl:true,
        loop: true,
        dots: false,
        nav: true,
        navContainerClass: "testimonials-owl-nav"
    });
	
	$(".span3").owlCarousel({
		animateIn: "rotateInDownLeft",
		animateOut: 'zoomOut',
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:450,
		rtl:true,
        loop: true,
        nav: false,
		dots: true,
    });

	
	$('#Container').mixItUp({
	animation: {
		duration: 400,
		effects: 'fade translateZ(-360px) stagger(34ms)',
		easing: 'ease'
	}
	});
	
	$(".ajax-post").click(function(){
		var gurl="style/post/post-"+$(this).attr("data-post")+".html";
        $("#post-blog").load(gurl);
    });
	
	$.extend(true, $.magnificPopup.defaults, {
	  tClose: 'خروج',
	  tLoading: '... درحال بارگذاری',
	  gallery: {
		tPrev: 'قبلی',
		tNext: 'بعدی',
		tCounter: '%curr% of %total%'
	  },
	  image: {
		tError: 'مشکلی پیش آمده ! اما نگران نباشید تصویر را در <a href="%url%">اینجا</a> ببینید'
	  },
	  ajax: {
		tError: 'متاسفانه بارگذاری انجام نشد ! میتوانید از <a href="%url%">اینجا</a> ببینید'
	  }
	});
	
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	
	$('.popup-video,.popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	$(".panel, .secblog, .container").mCustomScrollbar({
		axis:"y",
		theme:"inset",
		autoHideScrollbar:true,
		contentTouchScroll: true,
	});
	
});