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

document.getElementById("menu").addEventListener("click", handleClick);


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
