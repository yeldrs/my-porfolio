

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

/*
  if ($(document).scrollTop() < 50 ) {
      $('a.nav-link').addClass('active');
  } else {
    $('a.nav-link').removeClass('active');
  }
  
  $(window).on('load',function(){
    $('#modal-error').modal('show');
});
*/

var mybutton = document.getElementById("myBtn");
	
// When you scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
}

// When you click on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}