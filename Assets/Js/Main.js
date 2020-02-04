var menuList = document.getElementById("menu-list");
	
var menuListOpen = 'menu-list-open';

var handleClick = (e) => {
	if (document.documentElement.clientWidth < 737) {
		var offClick = (evt) => {
			if (e !== evt) {
				menuList.classList.toggle(menuListOpen);
				document.removeEventListener('click', offClick)
			}
		}
			if (!menuList.classList.contains(menuListOpen)) {
				menuList.classList.toggle(menuListOpen);
				document.addEventListener('click', offClick)
			}
		}
}

document.getElementById("menu").addEventListener("click", handleClick, {passive: true});


// Disappearing Nav
var nav = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;

function disappearingNav() {
	if (document.documentElement.clientWidth < 737) {

		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			nav.classList.add('nav-slide');
		} else {
			nav.classList.remove('nav-slide');
		}
		prevScrollpos = currentScrollPos;
	}
}

window.addEventListener('scroll', disappearingNav, {passive: true});

$(function() {

  $('#gallery').poptrox({
  	usePopupEasyClose: true,
    popupBackgroundColor: '#FFF5F8'
  });
});


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
