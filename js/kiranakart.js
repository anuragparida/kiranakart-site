!(function ($) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $(".ksticky").addClass("raised-container position-fixed");
    } else {
      $(".ksticky").removeClass("raised-container position-fixed");
    }
  });
})(jQuery);
