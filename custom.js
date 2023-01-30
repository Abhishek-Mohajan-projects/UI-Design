$(document).ready(function(){

    $('.sub-img > img').on("click hover", function(){

        $(this).removeClass("active");

        var $images = $(this).attr("src");

        $('.main-img > img').attr("src", $images);

    });


});