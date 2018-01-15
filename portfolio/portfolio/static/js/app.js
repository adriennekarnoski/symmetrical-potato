handleNav = function() {
  $('#nav').on('click', 'svg.fa-bars', function() {
      var $navList = $('#nav_ul');
      $navList.slideToggle('slow');
    });
}


handleProjects = function() {
    $('.project_box').hover(function() {
      var $projectText = $('.project_overlay');
      $projectText.slideToggle('slow');
    });
}
handleNav()
handleProjects()