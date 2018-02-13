// handleNav = function() {
//   $('#nav').on('click', 'svg.fa-bars', function() {
//       var $navList = $('#nav_ul');
//       $navList.slideToggle('slow');
//     });
// }


// handleProjects = function() {
//     $('.project_box').hover(function() {
//       var $projectText = $('.project_overlay');
//       $projectText.slideToggle('slow');
//     });
// }
// handleNav()
// handleProjects()

$(document).ready(function(){
    $("#strengths").addClass("active_panel")
    $("#strengthspanel").show()
    $(".accordion").click(function(){
        var section = $(this).attr('id')
        var icons = $(this).find(".accordion_icon")
        $(this).toggleClass("active_panel")
        icons.children().toggle()
        $("#" + section + "panel").slideToggle();
    });
    
});