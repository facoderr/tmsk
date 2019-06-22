$(document).ready(function() {


	// Slider Event

	$('.banner-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
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
	$('.popular-slider').slick({
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
		$('.nav-submenu').hide();
	});
	$(document).on('mouseover touchend', '.js-nav', function() {
		$('.nav-menu-link').removeClass('active');
		$('.nav-submenu .container').html('');
		$(this).addClass('active');
		$(this).parent().find('.nav-submenu-inner').clone().appendTo('.nav-submenu .container');
		$('.nav-submenu').show();
		return false;
	});
	$(document).bind('mouseover', function(e) {
		if ($(e.target).closest('.head-search').length) return;
		$('.head-search-form').removeClass('open');
		if ($(e.target).closest('.nav-menu').length || $(e.target).closest('.nav-submenu-inner').length) return;
		$('.nav-menu-link').removeClass('active');
		$('.nav-submenu').hide();
		if ($(e.target).closest('.nav > .container').length || $(e.target).closest('.nav-submenu').length || $(e.target).closest('.nav-submenu-close').length) return;
		$('.nav').removeClass('open');
	});

	//

	// Accordion Event

	$(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.questions-box-head');
			links.on('click', {
				el: this.el,
				multiple: this.multiple
			}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.questions-box-body').not($next).slideUp().parent().removeClass('open');
			};
		}
		var accordion = new Accordion($('.questions-accordion'), false);
	});

	//

	// Tab Event

	$(function() {
		var clickedTab = $('.offer-tabItem.active');
		var tabWrapper = $('.offer-tabWrap');
		var activeTab = tabWrapper.find('.open');
		var activeTabHeight = activeTab.outerHeight();

		tabWrapper.height(activeTabHeight);

		function tabInit() {
			clickedTab = $('.offer-tabItem.active');
			activeTab.fadeOut(300, function() {
				$('.offer-tabBlock').removeClass('open');
				var clickedTabIndex = clickedTab.index('.offer-tabItem');
				$('.offer-tabBlock').eq(clickedTabIndex).addClass('open');
				activeTab = $('.offer-tabWrap .open');
				activeTabHeight = activeTab.outerHeight();
				tabWrapper.stop().delay(50).animate({
					height: activeTabHeight
				}, 250, function() {
					activeTab.delay(50).fadeIn(250);
				});
			});
		}

		$('.offer-tabList').on('click', '.offer-tabItem', function() {
			$('.offer-tabItem').removeClass('active');
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