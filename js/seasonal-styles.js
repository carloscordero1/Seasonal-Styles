/*
$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    });
});
*/

$('document').ready(function () {
    //$("li.seasons a").css('color', 'red');

    /*
    Change pic with and id of logo to season
    Change pic with an id of wear to clothing
    */

    $("li.seasonsspring").click(function(e){
        e.preventDefault();

        let season = $(this).attr("href");

        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        $("header>h3").css("color", "#2B7129");
        $("header>h3").text("Leap into our Spring Wear!");
        $("html").css("background-color", "#2B7129");
       
        
    });

    $("li.seasonssummer").click(function(e){
        e.preventDefault();

        let season = $(this).attr("href");

        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        $("header>h3").css("color", "#EBA52B");
        $("header>h3").text("Leap into our Summer Wear!");
        $("html").css("background-color", "#EBA52B");
       
        
    });

    $("li.seasonsfall").click(function(e){
        e.preventDefault();

        let season = $(this).attr("href");

        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        $("header>h3").css("color", "#A81124");
        $("header>h3").text("Leap into our Fall Wear!");
        $("html").css("background-color", "#A81124");;
       
        
    });

    $("li.seasonswinter").click(function(e){
        e.preventDefault();

        let season = $(this).attr("href");

        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        $("header>h3").css("color", "#005393");
        $("header>h3").text("Leap into our Winter Wear!");
        $("html").css("background-color", "#005393");
       
        
    });

    $("li.seasons a").click(function(e){
        e.preventDefault();

        let season = $(this).attr("href");

        $("#wear").attr("src", "images/300x400.png");
        $("#logo").attr("src", "images/four-seasons.gif");
        $("header>h3").css("color", "#000000");
        $("header>h3").text("Outfitter for All Seasons!");
        $("html").css("background-color", "#ccc");
       
        //alert(season);
    });

});
