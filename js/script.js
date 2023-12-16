$(document).ready(function () {

	$('.popup').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});

	$(".phone-number-input").inputmask({
		"mask": "+7 (999)-999-999-9",
	});


	$('body').smoothScroll({
		delegateSelector: '.main-section__list li a, .header__menu li a'
	});

	$(".drop-menu").click(function (e) {
		e.stopPropagation();
		$(this).toggleClass("is-active");
		$(".header__menu-wrap").toggleClass("open");
		$("body, html").toggleClass("overflow");
		new WOW().init();
	}); 

	$(".drop-menu2").click(function (e) {
		e.stopPropagation();
		$(this).toggleClass("is-active");
		$(".header__sidebar-menu").toggleClass("open");
		$("body, html").toggleClass("overflow");
		new WOW().init();
	});


	$(".tab-menu li a").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".tab-menu").find("li").removeClass("active");
		$(this).closest("li").addClass("active");
		if ($(window).width() <= 768) {
			$(this).closest("li")[0].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'nearest',
			});
		}
		var index = $(this).closest("li").index();
		$(".tab-content-item").removeClass("active");
		$(".tab-content-item").eq(index).addClass("active");
	});



	$(".switch input").on("change", function () {
		var isChecked = $(this).is(":checked");
		if (isChecked) {
			$(this).closest(".right").find(".right-img").removeClass("opacity");
			$(this).closest(".right").find(".left-img").addClass("opacity");
		} else {
			$(this).closest(".right").find(".right-img").addClass("opacity");
			$(this).closest(".right").find(".left-img").removeClass("opacity");
		}
	});


	var privateSlider = document.querySelector(".partners__slider");
	var privateSlider = new Swiper(privateSlider, {
		centeredSlides: true,
		spaceBetween: 0,
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			1366: {
				slidesPerView: "auto",
			},
			991: {
				slidesPerView: "auto",
			},
			767: {
				slidesPerView: "auto",
			}
		}
	});

	var privateSlider = document.querySelector(".partners__slider2");
	var privateSlider = new Swiper(privateSlider, {
		centeredSlides: true,
		spaceBetween: 0,
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			1366: {
				slidesPerView: "auto",
			},
			991: {
				slidesPerView: "auto",
			},
			767: {
				slidesPerView: "auto",
			}
		}
	});

	var privateSlider = document.querySelector(".partners__slider3");
	var privateSlider = new Swiper(privateSlider, {
		centeredSlides: true,
		spaceBetween: 0,
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			1366: {
				slidesPerView: "auto",
			},
			991: {
				slidesPerView: "auto",
			},
			767: {
				slidesPerView: "auto",
			}
		}
	});


	
	var tariffsSlider = undefined;
	function initSwiper() {
		var screenWidth = $(window).width();
		if(screenWidth >= 1210 && tariffsSlider == undefined) {            
			tariffsSlider = new Swiper('.tariffs__slider', {            
				spaceBetween: 0,
				slidesPerView: "auto",
				loop: false,
				navigation: {
					nextEl: ".slider-button--next",
					prevEl: ".slider-button--prev"
				},
				breakpoints: {
					1210: {
						slidesPerView: "auto",
						loop: true,
						spaceBetween: 20,
					},
					991: {
						slidesPerView: "auto",
					},
					767: {
						slidesPerView: "auto",
						loop: false,
					}
				}
			});
		} else if (screenWidth < 1210 && tariffsSlider != undefined) {
			tariffsSlider.destroy();
			tariffsSlider = undefined;
			$('.swiper-wrapper').removeAttr('style');
			$('.swiper-slide').removeAttr('style');            
		}        
	}

	//Swiper plugin initialization
	initSwiper();

	//Swiper plugin initialization on window resize
	$(window).on('resize', function(){
		initSwiper();        
	});
	
	

	$(window).scroll(testScroll);
	var viewed = false;

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function testScroll() {
		if ($(".base__list").length > 0 && isScrolledIntoView($(".base__list")) && !viewed) {
			viewed = true;
			$('.counter').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 2500,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	}


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var headerHeight = $(".header").outerHeight();
		if (scroll >= 0) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});

	$("#form").validate({
		rules: {
			input1: {
				required: true,
				minlength: 5
			},
			input2: {
				required: true,
			},
			input3: {
				required: true,
				email: true
			},
			input4: {
				required: true,
			},
			input5: {
				required: true,
			},
			input6: {
				required: true,
			},
			input7: {
				required: true,
			},
			input8: {
				required: true,
			},
			input9: {
				required: true,
			},
		},
		messages: {
			input1: {
				required: "Поле не заполнено",
			},
			input2: {
				required: "Поле не заполнено",
			},
			input3: {
				required: "Поле не заполнено",
			},
			input4: {
				required: "Поле не заполнено",
			},
			input5: {
				required: "Поле не заполнено",
			},
			input6: {
				required: "Поле не заполнено",
			},
			input7: {
				required: "Поле не заполнено",
			},
			input8: {
				required: "Поле не заполнено",
			},
			input9: {
				required: "Поле не заполнено",
			},
		}
	});

	$("#form2").validate({
		rules: {
			input1: {
				required: true,
				minlength: 5
			},
			input2: {
				required: true,
			},
			input3: {
				required: true,
				email: true
			},
			input4: {
				required: true,
			},
			input5: {
				required: true,
			},
			input6: {
				required: true,
			},
			input7: {
				required: true,
			},
			input8: {
				required: true,
			},
			input9: {
				required: true,
			},
		},
		messages: {
			input1: {
				required: "Поле не заполнено",
			},
			input2: {
				required: "Поле не заполнено",
			},
			input3: {
				required: "Поле не заполнено",
			},
			input4: {
				required: "Поле не заполнено",
			},
			input5: {
				required: "Поле не заполнено",
			},
			input6: {
				required: "Поле не заполнено",
			},
			input7: {
				required: "Поле не заполнено",
			},
			input8: {
				required: "Поле не заполнено",
			},
			input9: {
				required: "Поле не заполнено",
			},
		}
	});

	$(".phone-number-input").inputmask({
		"mask": "+7 (999)-999-999-9",
	});

	$(".buttons-wrap .btn-border-style").on("click", function (e) {
		e.preventDefault();
		$(".requisites-read-info button svg").addClass("edit");
		$(this).hide();
		$(".buttons-wrap .orange-btn").addClass("shown");
		$(".left-info .title button svg").addClass("active");
		$(".personal-area__title-wrap .left svg").addClass("active");
	})

	$('.canvas-test__answer-input-text').keyup(function () {
		if (!$(this).val() == '') {
			$(".canvas-test__button .accept").addClass("active");
		} else {
			$(".canvas-test__button .accept").removeClass("active");
		}
	});


	$('.buttons .more, .base-specialists__top-wrap .name').click(function (e) {
		e.preventDefault();
		$(this).closest(".base-specialists__list-item").find('.base-specialists__bottom-wrap').slideToggle(300, function () {
			if ($(this).is(':hidden')) {
				$(this).closest(".base-specialists__list-item").find(".more").html('Подробнее');
			} else {
				$(this).closest(".base-specialists__list-item").find(".more").html('Свернуть');
			}
		});
		if (!$(this).is(':hidden')) {
			$(this).closest(".base-specialists__top-wrap").toggleClass("active");
		}
		return false;
	});
	
	$(".custom-scroll").mCustomScrollbar({
		scrollInertia: 300,
	});

});


"use strict";

$(document).on('click', '.canvas-test__answer-icon-delete', function () {
	let input = $(this).parent().find('.canvas-test__answer-input-text');
	input.text('');
	input.val('');
});
$(document).on('click', '.canvas-test__answer-input-radio-label', function () {
	$('.canvas-test__answer-input-radio-label').removeClass('canvas-test__answer-input-radio_checked');
	$(this).addClass('canvas-test__answer-input-radio_checked');
	$('.canvas-test__button-check').removeClass('canvas-test__button-check_disabled');
});
$(document).on('change', '.canvas-test__answer-input-checkbox', function () {
	if ($(this).is(':checked')) {
		$(this).parent().addClass('canvas-test__answer-input-checkbox_checked');
	} else {
		$(this).parent().removeClass('canvas-test__answer-input-checkbox_checked');
	}
});
$(document).on('click', '.canvas-test__question-connect-item-btn', function () {
	let color = $(this).attr('data-color');
	$(this).toggleClass('canvas-test__question-connect-item-btn_' + color);
});

$(document).on('keyup', '.canvas-test__answer-input-text', function () {
	let val = $(this).val();
	if (val == '') {
		$('.canvas-test__button-check').addClass('canvas-test__button-check_disabled');
	} else {
		$('.canvas-test__button-check').removeClass('canvas-test__button-check_disabled');
	}
});

$(document).on('click', '.canvas-test__button-check[data-step="1"]', function () {
	let input = $('[data-answer="1"] .canvas-test__answer-input-text');
	let button = $('.canvas-test__button-check-text');
	let icondelete = $('[data-answer="1"] .canvas-test__answer-icon-delete');
	let point = $('.canvas-test__points-value');
	let anserwrap = $('.canvas-test__answer[data-answer="1"]');
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');

	if ($(this).attr('data-checked') !== "true") {
		if (input.val()) {
			button.text('Следующий вопрос');
			icondelete.hide();
			if (input.val() == 'div class') {
				input.addClass('text-color-success');
				point.text('45');
			} else {
				anserwrap.addClass('canvas-test__answer-wrong');
				input.addClass('canvas-test__answer-input-wrong');
				anserwrap.append('<span class="canvas-test__correct-answer">div class</span>');
			}
			input.attr('disabled', 'disabled');
			$(this).attr('data-checked', 'true');
		}
	} else {
		questionnumber.text('02');
		questiontitle.text('Ответьте на вопрос, выбрав один правильный ответ');
		button.text('Принять ответ');
		$('[data-question="1"]').hide();
		$('[data-answer="1"]').hide();
		$('[data-question="2"]').show();
		$('[data-answer="2"]').show();
		$(this).attr('data-step', '2');
		$('.canvas-test__header-prev').attr('data-test', '2');
		$(this).attr('data-checked', 'false');
		$('.canvas-test__header-prev').show();
		$('.canvas-test__button-check').addClass('canvas-test__button-check_disabled');
	}
});

$(document).on('click', '.canvas-test__button-check[data-step="2"]', function () {
	let button = $('.canvas-test__button-check-text');
	let point = $('.canvas-test__points-value');
	let anserwrap = $('.canvas-test__answer[data-step="1"]');
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');
	let count = $('.canvas-test__answer-input-radio:checked').length;

	if ($(this).attr('data-checked') !== "true") {
		if ($('.canvas-test__answer-input-radio').is(':checked')) {
			button.text('Следующий вопрос');
			$('.canvas-test__answer-input-radio[value="1"]').parent().addClass('canvas-test__answer-input-radio_wrong');
			$('.canvas-test__answer-input-radio[value="2"]').parent().addClass('canvas-test__answer-input-radio_success');
			$('.canvas-test__answer-input-radio[value="3"]').parent().addClass('canvas-test__answer-input-radio_wrong');
			$('.canvas-test__answer-input-radio[value="4"]').parent().addClass('canvas-test__answer-input-radio_wrong');
			$(this).attr('data-checked', 'true');
			if ($('.canvas-test__answer-input-radio[value="2"]').is(':checked')) {
				point.text('60');
			}
		} else {
			alert('Ответ не выбран');
		}
	} else {
		questionnumber.text('03');
		questiontitle.text('Ответьте на вопрос, выбрав несколько вариантов ответа');
		button.text('Принять ответ');
		$('[data-question="2"]').hide();
		$('[data-answer="2"]').hide();
		$('[data-question="3"]').show();
		$('[data-answer="3"]').show();
		$('.canvas-test__header-prev').attr('data-test', '3');
		$(this).attr('data-step', '3');
		$(this).attr('data-checked', 'false');
	}
});

$(document).on('click', '.canvas-test__button-check[data-step="3"]', function () {
	let button = $('.canvas-test__button-check-text');
	let point = $('.canvas-test__points-value');
	let anserwrap = $('.canvas-test__answer');
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');
	let count = $('.canvas-test__answer-input-checkbox:checked').length;

	if ($(this).attr('data-checked') !== "true") {
		if (count > 0) {
			button.text('Следующий вопрос');
			$('.canvas-test__answer-input-checkbox[value="1"]').parent().addClass('canvas-test__answer-input-checkbox_success');
			$('.canvas-test__answer-input-checkbox[value="2"]').parent().addClass('canvas-test__answer-input-checkbox_wrong');
			$('.canvas-test__answer-input-checkbox[value="3"]').parent().addClass('canvas-test__answer-input-checkbox_success');
			$('.canvas-test__answer-input-checkbox[value="4"]').parent().addClass('canvas-test__answer-input-checkbox_wrong');
			$(this).attr('data-checked', 'true');
			if ($('.canvas-test__answer-input-checkbox[value="3"]').is(':checked')) {
				point.text('90');
			}
		} else {
			alert('Ответ не выбран');
		}
	} else {
		questionnumber.text('04');
		questiontitle.text('Расставьте элементы кода по порядку');
		button.text('Принять ответ');
		$('[data-question="3"]').hide();
		$('[data-answer="3"]').hide();
		$('[data-question="4"]').show();
		$('[data-answer="4"]').show();
		$('.canvas-test__header-prev').attr('data-test', '4');
		$(this).attr('data-step', '4');
		$(this).attr('data-checked', 'false');
	}
});

$(document).on('click', '.canvas-test__button-check[data-step="4"]', function () {
	let button = $('.canvas-test__button-check-text');
	let point = $('.canvas-test__points-value');
	let anserwrap = $('.canvas-test__answer[data-answer="4"]');
	let input = $('[data-answer="4"] .canvas-test__answer-input-text');
	let value = $('[data-answer="4"] .canvas-test__answer-input-text').val();
	let icondelete = $('[data-answer="4"] .canvas-test__answer-icon-delete');
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');

	if ($(this).attr('data-checked') !== "true") {
		icondelete.hide();
		input.hide();
		input.attr('disabled', 'disabled');
		anserwrap.addClass('canvas-test__answer-choise');
		anserwrap.append("<div class='canvas-test__answer-input-choise'><p class='canvas-test__answer-input-choise-item text-wrang'>" + value + "</p><p class='canvas-test__answer-input-choise-item text-success'>Test.assertEquals(likes([]) likes'); 'example function () { describe one 'no (‘ tests</p></div>");
		button.text('Следующий вопрос');
		$(this).attr('data-checked', 'true');
	} else {
		questionnumber.text('05');
		$('.canvas-test__header').append('<span class="canvas-test__header-title_caption">(Кликните на один из пунктов и выберите ему пару. Чтобы поменять вариант ответа, снимите выделение)<span>');
		questiontitle.text('Сопоставьте между собой пункты из двух столбцов');
		button.text('Принять ответ');
		$('[data-question="4"]').hide();
		$('[data-answer="4"]').hide();
		$('[data-question="5"]').show();
		$('[data-answer="5"]').show();
		$('.canvas-test__header-prev').attr('data-test', '5');
		$(this).attr('data-step', '5');
		$(this).attr('data-checked', 'false');
	}
});

$(document).on('click', '.canvas-test__button-check[data-step="5"]', function () {
	let button = $('.canvas-test__button-check-text');
	let point = $('.canvas-test__points-value');
	let anserwrap = $('.canvas-test__answer[data-answer="5"]');
	let input = $('[data-answer="5"] .canvas-test__answer-input-text');
	let value = $('[data-answer="5"] .canvas-test__answer-input-text').val();
	let icondelete = $('[data-answer="5"] .canvas-test__answer-icon-delete');
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');

	if ($(this).attr('data-checked') !== "true") {
		icondelete.hide();
		input.hide();
		input.attr('disabled', 'disabled');
		anserwrap.append("<div class='canvas-test__answer-connect'><p class='canvas-test__answer-connect-text text-wrang'>" + value + "</p><p class='canvas-test__answer-connect-text text-success'>1 - d, 2 - e, 3 - c</p></div>");

		$('.canvas-test__question-connect-item[data-item="1"]').addClass('canvas-test__question-connect-item_success');
		$('.canvas-test__question-connect-item[data-item="2"]').addClass('canvas-test__question-connect-item_success');
		$('.canvas-test__question-connect-item[data-item="3"]').addClass('canvas-test__question-connect-item_wrang');
		$('.canvas-test__question-connect-item[data-item="4"]').addClass('canvas-test__question-connect-item_wrang');
		$('.canvas-test__question-connect-item[data-item="5"]').addClass('canvas-test__question-connect-item_wrang');

		button.text('Завершить тест');
		$(this).attr('data-checked', 'true');
	} else {
		$('[data-question="5"]').hide();
		$('[data-answer="5"]').hide();
		$('.breadcrumb-test').hide();
		$('.canvas-test').hide();
		$('.canvas-test__header-title_caption').hide();
		$('.canvas-result').show();
		$(this).attr('data-step', '5');
		$(this).attr('data-checked', 'false');
	}
});

$(document).on('click', '.canvas-test__header-prev', function () {
	let questionnumber = $('.canvas-test__number-order');
	let questiontitle = $('.canvas-test__header-title[data-title="test"]');
	let button = $('.canvas-test__button-check-text');
	let test = $(this).attr('data-test');
	test = parseInt(test);
	let prev = test - 1;
	$('[data-question="' + test + '"]').hide();
	$('[data-answer="' + test + '"]').hide();
	$('[data-question="' + prev + '"]').show();
	$('[data-answer="' + prev + '"]').show();
	button.text('Следующий вопрос');
	$('.canvas-test__button-check').attr('data-checked', 'true');
	$('.canvas-test__button-check').attr('data-step', prev);
	if (prev == '1') {
		questionnumber.text('01');
		questiontitle.text('Впишите недостающий фрагмент кода');
	} else if (prev == '2') {
		questionnumber.text('02');
		questiontitle.text('Ответьте на вопрос, выбрав один правильный ответ');
	} else if (prev == '3') {
		questionnumber.text('03');
		questiontitle.text('Ответьте на вопрос, выбрав несколько вариантов ответа');
	} else if (prev == '4') {
		questionnumber.text('04');
		questiontitle.text('Расставьте элементы кода по порядку');
	}
});
