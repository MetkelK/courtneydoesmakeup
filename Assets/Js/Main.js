const App = {};

// function that closes the menu when the user clicks off it
App.handleMenuClose = function () {
	$('#menu').on('click', function(e) {
		if ($(document).width() < 737) {
			let offClick = function (event) {
				if (e.target !== event.target) {
					$('#menu-list').removeClass('menu-list-open');
					App.handleMenuClose();
				}
			}
			if (!$('#menu-list').hasClass('menu-list-open')) {
				$('#menu-list').addClass('menu-list-open');
				$(document).on('click', offClick);
			}
		}
	})
}

// function that makes the navbar disappearing when the user scrolls down and reappear when the user scrolls up
App.disappearingNav = function () {
	let prevScrollpos = $(window).scrollTop();
	$(window).scroll(function() {
		if ($(document).width() < 737) {
			let currentScrollPos = $(window).scrollTop();
			if (prevScrollpos < currentScrollPos) {
				$('nav').addClass('nav-slide');
			} else {
				$('nav').removeClass('nav-slide');
			}
			prevScrollpos = currentScrollPos;
		}
	})
}

//function that controls the lightbox gallery
App.lightboxGallery = function () {
	$('#gallery').poptrox({
	  	usePopupEasyClose: true,
	    popupBackgroundColor: '#FFF5F8',
	    usePopupForceClose: true
	});
}

//function that smooth scrolls to the gallery when the user click on the check me out button
App.scrollToGallery = function () {
	$('.banner-button a').on('click', function(e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body')
	     .animate({
	       scrollTop: $(hash).offset().top
	       },800);
		}
	})
}

//function that smooth scrolls when the user clicks on the navbar buttons
App.smoothScroll = function () {
	$('#menu-list a').on('click', function(e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body')
	     .animate({
	       scrollTop: $(hash).offset().top
	       },800);
		}
	})
}

App.init = function () {
	App.lightboxGallery();
	App.scrollToGallery();
	App.smoothScroll();
	App.disappearingNav();
	App.handleMenuClose();
}


$(function () {
	App.init();
});