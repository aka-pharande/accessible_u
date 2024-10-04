/*
 * JavaScript for Accessible University Demo Site
 * http://uw.edu/accesscomputing/AU
 *
 * before-menu.js = Custom inaccessible Dropdown Menu
 */

$(document).ready(function() {

//   var timeout = 3000;
//   var timer = 0;
//   var subMenu = null;


    // 1. Add keyboard accessibility for the dropdown toggle
    $(".nav-item.dropdown")
        .on('keydown', function(e) {
            // Check for Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent default link behavior
                $(this).addClass("show");
                $(this).find(".dropdown-toggle").attr("aria-expanded", "true");
                $(this).find(".dropdown-menu").addClass("show");
            }
            // Check for Escape key to close the dropdown
            else if (e.key === 'Escape') {
                e.preventDefault(); // Prevent default link behavior
                $(this).removeClass("show");
                $(this).find(".dropdown-toggle").attr("aria-expanded", "true");
                $(this).find(".dropdown-menu").removeClass("show");
                $(this).focus(); // Return focus to the toggle link
            }
        });

//   $("#menu > li")
//     .on('mouseenter',function(){
//       // close previously open submenu
//       closeSubMenu();
//       // get and show new submenu
//       subMenu = $(this).children('ul');
//       subMenu.show();
//       clearTimeout(timer);
//     })
//     .parent().mouseout(function(){
//       clearTimeout(timer);
//       timer = setTimeout(function(){
//         closeSubMenu();
//       },timeout);
//     });

//   // close subMenu when click-out
//   document.onclick = closeSubMenu;

//   function closeSubMenu() {
//     if (subMenu) {
//       subMenu.hide();
//       subMenu = null;
//     }
//   }
});
