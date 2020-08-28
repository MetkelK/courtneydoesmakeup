const documentApp = {};

// let menuList = document.getElementById("menu-list");	
// let menuListOpen = 'menu-list-open';
// let handleClick = (e) => {
// 	if (document.documentElement.clientWidth < 737) {
// 		let offClick = (evt) => {
// 			if (e !== evt) {
// 				menuList.classList.toggle(menuListOpen);
// 				document.removeEventListener('click', offClick, {passive: true})
// 			}
// 		}
// 			if (!menuList.classList.contains(menuListOpen)) {
// 				menuList.classList.toggle(menuListOpen);
// 				document.addEventListener('click', offClick, {passive: true})
// 			}
// 		}
// }

// document.getElementById("menu").addEventListener("click", handleClick, {passive: true});

// function that closes the menu when the user clicks off it
documentApp.handleMenuClose = function () {
	$('#menu').on('click', function(e) {
		if ($(document).width() < 737) {
			let offClick = function (event) {
				if (e.target !== event.target) {
					$('#menu-list').removeClass('menu-list-open');
					documentApp.handleMenuClose();
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
documentApp.disappearingNav = function () {
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
documentApp.lightboxGallery = function () {
	$('#gallery').poptrox({
	  	usePopupEasyClose: true,
	    popupBackgroundColor: '#FFF5F8',
	    usePopupForceClose: true
	});
}

//function that smooth scrolls to the gallery when the user click on the check me out button
documentApp.scrollToGallery = function () {
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
documentApp.smoothScroll = function () {
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

documentApp.init = function () {
	documentApp.lightboxGallery();
	documentApp.scrollToGallery();
	documentApp.smoothScroll();
	documentApp.disappearingNav();
	documentApp.handleMenuClose();
}


$(document).ready(function () {
	documentApp.init();
});