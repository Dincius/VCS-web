
$(document).ready(function(){
	$('.dropdown-trigger').dropdown();
	$('.materialboxed').materialbox();
	$('.parallax').parallax();
	$('.sidenav').sidenav();
	$('.collapsible').collapsible();
	$('.modal').modal();
});


$('input[type=radio]').change(function() {

	// if (this.value =='batman') {

	// 	// alert("You're right!");
	// 	$(this).parents(".row").find(".answer-block").addClass("visible");
	// }

	// else {
	// 	alert ('Not quite right, take a look at the "News" section ' );
	// 	}
	$(".row div.answer-block").addClass("visible");

	});

// nuo cia Brigitos
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (slides.length>0) {
	if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		}
	}

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
