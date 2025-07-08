$(document).ready(function() {

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
