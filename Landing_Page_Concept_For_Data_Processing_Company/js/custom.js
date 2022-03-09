jQuery.noConflict();
jQuery(document).ready(function () {
    'use strict';

    jQuery(".fancybox").fancybox();
	
});

 // RESPONSIVE MENU
document.querySelector('.responsiveMenu').onclick = showMenu;

function showMenu() {
    document.getElementById("mainMenu").classList.toggle("showMenu");
    document.getElementById("logo").classList.toggle("active");
}

