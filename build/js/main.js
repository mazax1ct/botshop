$(document).ready(function() {
  $('html').addClass('theme-2');
});

$(document).on('click', '.js-accordion-toggler', function() {
  let _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.addClass('is-active');
    _this.closest('.accordion').find('.accordion__body').slideDown();
  }else{
    _this.removeClass('is-active');
    _this.closest('.accordion').find('.accordion__body').slideUp();
  }
  return false;
});

$(document).on('click', '.js-popover-opener', function() {
  let popover = $(this).attr('data-popover');
  $('.page').addClass('is-overflow');
  $('#' + popover).fadeIn(function() {
    $('#' + popover).find('.popover__body').addClass('is-open');
  });
  return false;
});

$(document).on('click', '.js-popover-closer', function() {
  let _this = $(this);
  _this.closest('.popover').find('.popover__body').removeClass('is-open');
  setTimeout(function() {
    _this.closest('.popover').fadeOut();
      $('.page').removeClass('is-overflow');
  }, 300);
  return false;
});

$(document).on('input', '.search-form .input', function () {
  if($(this).val().length > 3) {
    $('.search-form__dropdown').addClass('is-active');
    $('.search-form__button--clear').addClass('is-active');
  } else {
    $('.search-form__dropdown').removeClass('is-active');
    $('.search-form__button--clear').removeClass('is-active');
  }
});

$(document).on('click', '.js-search-clear', function () {
  $('.search-form .input').val('');
  $('.search-form__dropdown').removeClass('is-active');
  $('.search-form__button--clear').removeClass('is-active');
  return false;
});

$(document).on('click', '.search-form__suggest', function () {
  let text = $(this).find('span').text();
  $('.search-form .input').val(text);
  return false;
});
