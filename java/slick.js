/*$(document).ready(function(){
  $('.slideshow').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
  }); */
/*


  $(document).ready(function(){
    $('.slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slideshow',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
    }); 

				jQuery(document).ready(function() {
					$('.carousel').slick({
						dots: true,
						infinite: false,
						speed: 300,
					});
					if ($(window).width() > 991) {
						jQuery('.carousel').slick('unslick');
					}
        });
        
    jQuery(document).ready(function() {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
    });

 
    */
   $(document).ready(function(){
    $("#nike-slide").carousel();

    $( '.nike-nav li' ).on( 'click', function () {
      $( '.nike-nav' ).find( 'li.active' ).removeClass( 'active' );
      $(this).addClass('active');
    });
});

$(document).ready(function(){
  $("#swatch-slide").carousel();

  $( '.nike-nav li' ).on( 'click', function () {
    $( '.nike-nav' ).find( 'li.active' ).removeClass( 'active' );
    $(this).addClass('active');
  });
});

$(document).ready(function(){
  $("#cta-slide").carousel();

  $( '.nike-nav li' ).on( 'click', function () {
    $( '.nike-nav' ).find( 'li.active' ).removeClass( 'active' );
    $(this).addClass('active');
  });
});