// Page Scroll
var sections = $('section')
nav = $('nav[role="navigation"]');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - 76
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
nav.find('a').on('click', function () {
  var $el = $(this)
    id = $el.attr('href');
$('html, body').animate({
    scrollTop: $(id).offset().top - 100
}, 500);
return false;
});


	// Page Scroll II
  var sections = $('section'), // Include 'header' in the selector
  nav = $('nav[role="navigation"]');
  
  $(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - 76,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
  });
  
  nav.find('a').on('click', function () {
  var $el = $(this),
    id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - 100
  }, 500);
  return false;
  });


  <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>

   //Smooth Scrolling
	$(function() {
       
    $('a[href*="#"]:not([href="#hide"])').click(function() {
      if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({

            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
