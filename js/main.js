$(document).ready(function() {


	// Slider Event

	$('.main-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
	$('.offer-slider-1').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.offer-slider-2').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.offer-slider-3').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.extra-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.box-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.item-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	//

	// Popup Event

	$(document).on('click mouseover', '.js-popup', function() {
		$(this).magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});
		return false;
	});
	$(document).on('click mouseover', '.js-zoom', function() {
		$(this).magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});
		return false;
	});

	//

	// Click Event

	$(document).on('click', '.js-search-toggle', function() {
		$('.head-search-form').toggleClass('open');
	});
	$(document).on('click', '.js-toggle', function() {
		$('.nav').addClass('open');
	});
	$(document).on('click', '.js-close', function() {
		$('.nav').removeClass('open');
	});
	$(document).on('click', '.js-submenu-close', function() {
		$('.nav-menu-link').removeClass('active');
		$('.nav-submenu').removeClass('open');
	});
	$(document).on('click mouseover', '.js-nav', function() {
		$('.nav-menu-link').removeClass('active');
		$('.nav-submenu .container').html('');
		$(this).addClass('active');
		$(this).parent().find('.nav-submenu-inner').clone().appendTo('.nav-submenu .container');
		$('.nav-submenu').addClass('open');
		setTimeout(function() {
			$('.nav-submenu-inner').addClass('after');
		}, 100);
		return false;
	});
	$(document).on('click mouseover', '.js-filter', function() {
		$('.filter-bar').addClass('open');
	});
	$(document).on('click mouseover', '.js-filter-close', function() {
		$('.filter-bar').removeClass('open');
	});
	$(document).bind('mouseover', function(e) {
		if ($(e.target).closest('.head-search').length) return;
		$('.head-search-form').removeClass('open');
		if ($(e.target).closest('.nav-menu').length || $(e.target).closest('.nav-submenu-inner').length) return;
		$('.nav-menu-link').removeClass('active');
		$('.nav-submenu').removeClass('open');
		$('.nav-submenu-inner').removeClass('after');
		if ($(e.target).closest('.nav > .container').length || $(e.target).closest('.nav-submenu').length || $(e.target).closest('.nav-submenu-close').length) return;
		$('.nav').removeClass('open');
		if ($(e.target).closest('.filter-bar-form').length) return;
		$('.filter-bar').removeClass('open');
	});
	$(document).on('click', '.js-default', function() {
		$('.filter-rect').removeClass('active');
		$(this).addClass('active');
		$('.filter-row').removeClass('full');
		$('.filter-row').addClass('no-full');
	});
	$(document).on('click', '.js-full', function() {
		$('.filter-quad').removeClass('active');
		$(this).addClass('active');
		$('.filter-row').removeClass('no-full');
		$('.filter-row').addClass('full');
	});

	//

	// Form Event

	$('.select select').select2();
	$('.js-range').ionRangeSlider({
		skin: 'round',
		type: 'double',
		min: 0,
		max: 1000,
		hide_min_max: true,
		hide_from_to: true,
		grid: false,
		onStart: function (data) {
			$('.js-range-min').val(data.min);
			$('.js-range-min').attr('placeholder', data.min);
			$('.js-range-max').val(data.max);
			$('.js-range-max').attr('placeholder', data.max);
		},
		onChange: function (data) {
			$('.js-range-min').val(data.from);
			$('.js-range-max').val(data.to);
		},
		onUptade: function (data) {
			$('.js-range-min').val(data.from);
			$('.js-range-max').val(data.to);
		}
	});
	let range = $('.js-range').data('ionRangeSlider');
	$(document).on('click', '.js-reset', function() {
		range.reset();
	});

	//

	// Gallery Event

	$('.js-thumb').click(function() {
		var clicked = $(this);
		var newSelection = clicked.data('big');
		$('.js-photo').html("<a href='" + newSelection + "' class='js-zoom'><img src='" + newSelection + "'></a>").hide().fadeIn('slow');
		clicked.parent().find('.js-thumb').removeClass('active');
		clicked.addClass('active');
	});

	//

	// Tab Event

	$(function() {
		var clickedTab = $('.js-tabItem.active');
		var tabWrapper = $('.js-tabWrap');
		var activeTab = tabWrapper.find('.open');
		var activeTabHeight = activeTab.outerHeight();

		tabWrapper.height(activeTabHeight);

		function tabInit() {
			clickedTab = $('.js-tabItem.active');
			activeTab.fadeOut(300, function() {
				$('.js-tabBlock').removeClass('open');
				var clickedTabIndex = clickedTab.index('.js-tabItem');
				$('.js-tabBlock').eq(clickedTabIndex).addClass('open');
				activeTab = $('.js-tabWrap .open');
				activeTabHeight = activeTab.outerHeight();
				tabWrapper.stop().delay(50).animate({
					height: activeTabHeight
				}, 250, function() {
					activeTab.delay(50).fadeIn(250);
				});
			});
		}

		$('.js-tabList').on('click', '.js-tabItem', function() {
			$('.js-tabItem').removeClass('active');
			$(this).addClass('active');
			tabInit();
		});
	});

	//

	// IE 'object-fit: cover' fix

	function ObjectFitIt() {
		$('.js-obj').each(function() {
			var imgSrc = $(this).attr('src');
			var fitType = 'cover';
			if ($(this).data('fit-type')) {
				fitType = $(this).data('fit-type');
			}
			$(this).parent().css({ 
				'background' : 'transparent url("' + imgSrc + '") no-repeat center center/' + fitType
			});
			$('.js-obj').css('display','none'); 
		});
	}
	if ('objectFit' in document.documentElement.style === false) {
		ObjectFitIt();
	}

	//

	// Validate Event

	$('.js-validate-phone').on('keypress', function(event) {
		if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { 
			event.preventDefault() 
		}
		var mask = '+0 (000)-000-00-00';
		if (/[0-9\+\ \-\(\)]/.test(event.key)) {
			var currentString = $(this).val();
			var currentLength = currentString.length;
			if (/[0-9]/.test(event.key)) {
				if (mask[currentLength] == '0') {
					this.value = currentString + event.key;
					
				} else {
					for (var i = currentLength; i < mask.length; i++) {
						if (mask[i] == '0') {
							this.value = currentString + event.key;
							break;
						}
						currentString += mask[i];
					}
				}
			}
		}
		$(this).parent().toggleClass('error', $(this).val().length < 18);
	}).on('keyup', function(event) {
		if (event.key == 'Backspace') {
			$('.js-validate-phone').trigger('keypress');
		}
	});
	$(document).on('click', '.js-submit', function(event) {
		if ($(this).parent().find('.js-required').val() == '') {
			event.preventDefault();
			$(this).parent().find('.js-required').each(function(){
				$(this).parent().toggleClass('error', $(this).val() == '');
			});
		} else if ($(this).parent().find('.js-required').parent().hasClass('error')) {
			event.preventDefault();
		}
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');
		setTimeout(function() {
			$('html').removeClass('overflow');
		}, 400);
		$('.head-menu').clone().appendTo('.nav > .container .col');
		$('.head-toggle').clone().appendTo('.head-mobile');
		$('.head-search').clone().appendTo('.head-mobile');
		$('.head-cart').clone().appendTo('.head-mobile');
		$('.head-favorite').clone().appendTo('.head-mobile');
		$('.head-phone').clone().appendTo('.head-mobile');
		var lazyImg = new LazyLoad({
			elements_selector: '.js-lazy'
		});
	});

	//
	
});