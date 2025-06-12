$(function(){
    $(".tab1 li:first-of-type").click(function(){
        $(".modal").show();
    });

    $(".button a").click(function(){
        $(".modal").hide();
    });
});