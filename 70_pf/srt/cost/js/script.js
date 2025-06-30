$(function() {
    let currentInput = null;

    // 출발역, 도착역 클릭 시 모달 열기
    $(document).on('click', '#departure, #arrival', function() {
        currentInput = this;
        $('#station-modal').fadeIn(100);
    });

    // 닫기 버튼
    $(document).on('click', '#close-modal', function() {
        $('#station-modal').fadeOut(100);
    });

    // 역 선택 시 해당 input에 값 넣고 모달 닫기
    $(document).on('click', '.station-list li', function() {
        if(currentInput) {
            $(currentInput).val($(this).text());
        }
        $('#station-modal').fadeOut(100);
    });

    // 모달 바깥 클릭 시 닫기
    $(document).on('click', '#station-modal', function(e) {
        if(e.target === this) $(this).fadeOut(100);
    });
});