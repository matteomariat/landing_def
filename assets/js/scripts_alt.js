
    // JS code for Navbar transparence

jQuery(document).ready(function() {
 
    // ...
 
    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });
 
    // ...
 
});

	// END of JS code for Navbar trans

	// JS code for scrolling when click on link

	function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}
 
jQuery(document).ready(function() {
 
    /*
        Navigation
    */
    $('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });
 
    // ...
 
});

	// END of JS code for scrolling when click on link

	// Background top content JQUERY

$('.top-content').backstretch("assets/img/backgrounds/1.jpg");

	// END of Background top content JQUERY
