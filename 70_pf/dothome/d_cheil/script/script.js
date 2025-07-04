$(document).ready(function () {
    //1. 공지사항의 첫번째를 클릭한다
    $('.active li:first-of-type').click(function () {
        //2. .modal을 보여준다.
        $('.modal').show();
    });
    //3. 팝업의 닫기 버튼을 클릭하면 
    $('.right a').click(function () {
        // 4. 팝업 창을 숨긴다
        $('.modal').hide();
    });

});

$(function(){
    $(".sub")
});