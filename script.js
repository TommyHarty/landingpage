$(document).ready(function(){
//moodboard
if($(window).width() >= 730) {
  $('.embedded-mood').hide().fadeIn(1600);
} else {
  $('.embedded-mood').hide().delay(600).fadeIn(1600);
};
  $('#shape-right').hide().show("slide", { direction: "right" }, 1000).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cta-header').hide().delay(1200).show("slide", { direction: "right" }, 400).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cta-sub').hide().delay(1600).show("slide", { direction: "right" }, 600).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cta-button .btn-secondary').delay(2200).animate({right:200}, 500).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cta-button .btn-primary').delay(2400).animate({right:0}, 500).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  if($(window).width() >= 730) {
    $('.white').delay(2800).animate({left: $(window).width() / 2 - 57}, 600).effect( "bounce", { times: 1, direction: "left", distance: 5 }, 300 );
    $('.green').delay(2850).animate({right: $(window).width() / 2 - 57}, 600).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  } else {
    $('.white').delay(1450).animate({left: $(window).width() / 2 - 57}, 600).effect( "bounce", { times: 1, direction: "left", distance: 5 }, 300 );
    $('.green').delay(1500).animate({right: $(window).width() / 2 - 57}, 600).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  };
//body
  $('.reg-form, .floating-mrg').hide().delay(800).fadeIn(1600);
  $(".btn-primary").click(function() {
        $('html, body').animate({
            scrollTop: $("#register").offset().top
        }, 1000);
    });
    $(".btn-secondary").click(function() {
          $('html, body').animate({
              scrollTop: $("#find-out-more").offset().top
          }, 1000);
      });
//mobile
  $('.mobile-cta h1').hide().fadeIn(1600);
  $('.mobile-cta a').delay(1200).animate({right:60}, 400);
});
