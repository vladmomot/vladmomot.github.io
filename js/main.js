;(function () {
	'use strict';

	var offCanvass = function() {
		$('body').on('click', '.js-nav-toggle', function(event){

			var $this = $(this);

			$('#offcanvass').toggleClass('awake');
			$('#page, #menu').toggleClass('sleep');

			if ( $('#offcanvass').hasClass('awake') ) {
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
			event.preventDefault();
			
		});
	};

	var clickMenu = function() {
		$('a:not([class="external"])').click(function(){
			var section = $(this).data('nav-section')
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);
		    return false;
		});
	};

	var carouselTestimony = function() {
		var owl = $(".owl-carousel");
		owl.owlCarousel({
			items: 1,
		    margin: 0,
		    responsiveClass: true,
		    loop: true,
		    nav: true,
		    dots: true,
		    autoplay: true,
		    smartSpeed: 500,
			responsive:{
				0:{
					nav:false
				},
				480: {
					nav:false
				},
				768:{
					nav:false
				},
				1000:{
					nav:true,
				}
			},
		    navText: [
		      "<i class='icon-arrow-left owl-direction'></i>",
		      "<i class='icon-arrow-right owl-direction'></i>"
	     	]
		});
	};

	var footerFixed = function() {
		var fh = $('#footer').innerHeight();
		$('#wrap').css({
			marginBottom : fh + 'px'
		});

		if ( $(window).width() < 991 ) {
			$('#wrap').css({
				marginBottom: ''
			})
		}

		$(window).resize(function(){
			var fh = $('#footer').innerHeight();
			$('#wrap').css({
				marginBottom : fh + 'px'
			});

			if ( $(window).width() < 991 ) {
				$('#wrap').css({
					marginBottom: ''
				})
			}
		});
	};

	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
		      	return value.toFixed(options.decimals);
		    },
		});
	};

	var faqsAccordion = function() {
		var faqAcc = $('.faq-accordion h3');
		faqAcc.on('click', function(event){
			var $this = $(this);
			
			$('.faq-accordion').removeClass('active');
			$('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');

			if ( !$this.closest('.faq-accordion').find('.faq-body').is(':visible')) {
				$this.closest('.faq-accordion').addClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideDown(400, 'easeInOutExpo');
			} else {
				$this.closest('.faq-accordion').removeClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');
			}
			setTimeout(function(){
				$('html, body').animate({
			        scrollTop: $this.closest('.faq-accordion.active').offset().top - 90
			    }, 500);
			}, 700);
			event.preventDefault();
			return false;

		});

	};

	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvass, .js-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#offcanvass').hasClass('awake') ) {
	    		$('#offcanvass').removeClass('awake');
	    		$('#page, #menu').removeClass('sleep');
	    		$('.js-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$(window).scroll(function(){
			var $menu = $('#menu');
			if ( $(window).scrollTop() > 150 ) {
				$menu.addClass('sleep');
			}

			if ( $(window).scrollTop() < 500 ) {
				$menu.removeClass('sleep');
				$('#offcanvass ul li').removeClass('active');
				$('#offcanvass ul li').first().addClass('active');
			}
		

			if ( $(window).scrollTop() > 500 ) {
				if ( $('#offcanvass').hasClass('awake') ) {
		    		$('#offcanvass').removeClass('awake');
		    		$('#page, #menu').removeClass('sleep');
		    		$('.js-nav-toggle').removeClass('active');
		    	}
	    	}
		});
	};
	
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var introWayPoint = function() {
		if ( $('#hero').length > 0 ) {
			$('#hero').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout(function(){
						$('.intro-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.intro-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(function(){
						$('.intro-animate-3').addClass('fadeInUp animated');
						$('.intro-animate-4').addClass('fadeInUp animated');
					}, 700);
					$(this.element).addClass('animated');
				}
			} , { offset: '75%' } );
		}
	};

	var HeaderToggle = function() {
		var $this = $( '#main' );
		$this.waypoint(function(direction) {
			if( direction === 'down' ) {
				$('body').addClass('scrolled');
			}
			else if( direction === 'up' ){
				$('body').removeClass('scrolled');
			}			
		}, { offset: '-1px' } );
	};


	var clientAnimate = function() {
		if ( $('#clients').length > 0 ) {	
			$('#clients .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var clientWayPoint = function() {
		if ( $('#clients').length > 0 ) {
			$('#clients').waypoint( function( direction ) {								
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(clientAnimate, 100);
					$(this.element).addClass('animated');
				}
			} , { offset: '75%' } );
		}
	};

	var featuresAnimate = function() {
		if ( $('#features').length > 0 ) {	
			$('#features .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var featuresWayPoint = function() {
		if ( $('#features').length > 0 ) {
			$('#features').waypoint( function( direction ) {						
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(featuresAnimate, 100);
					$(this.element).addClass('animated');	
				}
			} , { offset: '75%' } );
		}
	};

	var features2AnimateTitle = function() {
		if ( $('#features-2').length > 0 ) {	
			$('#features-2 .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	var features2WayPoint = function() {
		if ( $('#features-2').length > 0 ) {
			$('#features-2').waypoint( function( direction ) {					
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(features2AnimateTitle, 100);
					setTimeout(function(){
						$('.features-2-animate-2').addClass('fadeInUp animated');
					}, 800);
					setTimeout(function(){
						$('.features-2-animate-3').addClass('fadeInRight animated');
						$('.features-2-animate-5').addClass('fadeInLeft animated');
					}, 1200);
					setTimeout(function(){
						$('.features-2-animate-4').addClass('fadeInRight animated');
						$('.features-2-animate-6').addClass('fadeInLeft animated');
					}, 1400);
					$(this.element).addClass('animated');	
				}
			} , { offset: '75%' } );
		}
	};

	var counterWayPoint = function() {
		if ( $('#counter').length > 0 ) {
			$('#counter').waypoint( function( direction ) {						
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.counter-animate').addClass('fadeInUp animated');
						counter(); 
					}, 100);
					$(this.element).addClass('animated');		
				}
			} , { offset: '75%' } );
		}
	};


	var productsWayPoint = function() {
		if ( $('#products').length > 0 ) {
			$('#products').waypoint( function( direction ) {								
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.product-animate-1').addClass('fadeIn animated');
					}, 200);
					setTimeout(function(){
						$('.product-animate-2').addClass('fadeIn animated');
					}, 400);
					setTimeout(productsAnimate, 800);
					$(this.element).addClass('animated');	
				}
			} , { offset: '75%' } );
		}
	};


	var ctaAnimate = function() {
		if ( $('#cta').length > 0 ) {	
			$('#cta .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	var ctaWayPoint = function() {
		if ( $('#cta').length > 0 ) {
			$('#cta').waypoint( function( direction ) {						
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(ctaAnimate, 100);
					$(this.element).addClass('animated');		
				}
			} , { offset: '75%' } );
		}
	};


	var features3Animate = function() {
		if ( $('#features-3').length > 0 ) {	
			$('#features-3 .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	var features3WayPoint = function() {
		if ( $('#features-3').length > 0 ) {
			$('#features-3').waypoint( function( direction ) {						
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.features3-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.features3-animate-2').addClass('fadeIn animated');
					}, 400);
					setTimeout(features3Animate, 800);
					$(this.element).addClass('animated');	
				}
			} , { offset: '75%' } );
		}
	};

	var faqsAnimate = function() {
		if ( $('#faqs').length > 0 ) {	
			$('#faqs .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );	
			});
		}
	};

	var faqsWayPoint = function() {
		if ( $('#faqs').length > 0 ) {
			$('#faqs').waypoint( function( direction ) {							
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.faqs-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.faqs-animate-2').addClass('fadeIn animated');
					}, 400);
					setTimeout(faqsAnimate, 800);					
					$(this.element).addClass('animated');		
				}
			} , { offset: '75%' } );
		}
	};

	var contentWayPoint = function() {
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeInUp animated');
			}
		} , { offset: '75%' } );
	};

	var navActive = function(section) {
		var el = $('#offcanvass > ul');
		el.find('li').removeClass('active');
		el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});
	};
	var navigationSection = function() {
		var $section = $('div[data-section]');
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: '150px'
		});
		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	var pricingWayPoint = function() {
		if ( $('#pricing').length > 0 ) {
			$('#pricing').waypoint( function( direction ) {						
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.pricing-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.pricing-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(pricingAnimate, 800);
					$(this.element).addClass('animated');	
				}
			} , { offset: '75%' } );
		}
	};

	$(function(){
		magnifPopup();
		offCanvass();
		mobileMenuOutsideClick();
		footerFixed();
		faqsAccordion();
		carouselTestimony();
		clickMenu();
		HeaderToggle();
		introWayPoint();
		clientWayPoint();
		featuresWayPoint();
		features2WayPoint();
		counterWayPoint();
		productsWayPoint();
		features3WayPoint();
		ctaWayPoint();
		pricingWayPoint();
		faqsWayPoint();
		contentWayPoint();
		navigationSection();
	});
}());