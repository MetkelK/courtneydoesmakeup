const menuList = document.getElementById("menu-list");	
const menuListOpen = 'menu-list-open';

const handleClick = (e) => {
	if (document.documentElement.clientWidth < 737) {
		const offClick = (evt) => {
			if (e !== evt) {
				menuList.classList.toggle(menuListOpen);
				document.removeEventListener('click', offClick, {passive: true})
			}
		}
			if (!menuList.classList.contains(menuListOpen)) {
				menuList.classList.toggle(menuListOpen);
				document.addEventListener('click', offClick, {passive: true})
			}
		}
}

document.getElementById("menu").addEventListener("click", handleClick, {passive: true});


// Disappearing Nav
const nav = document.getElementById("navbar");
const prevScrollpos = window.pageYOffset;

function disappearingNav() {
	if (document.documentElement.clientWidth < 737) {

		const currentScrollPos = window.pageYOffset;
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


