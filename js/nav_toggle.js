$(function(){
    //open the navbar
    $("#open_menu").click(function(){
        $(".nav_links_container").toggleClass("active")
    })
    $("#close_menu").click(function(){
        $(".nav_links_container").removeClass("active")
    })
    $(".drop_down").click(function(e){
        e.preventDefault();
        $(this).next(".dropdown_menu").slideToggle(300);
        console.log($(this).next(".dropdown_menu"));
    })
})