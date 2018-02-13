$(document).ready(function(){
    $("nav").on("click", "#nav_button", function(){
        console.log('yas')
        $("nav ul").slideToggle("slow")
    });
    
});

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