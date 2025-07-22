$(function(){
    const data = [
        {
            img:'./images/10020.jpg',
            txt:'왕메가헛개리카노'
        },
        {
            img:'./images/10022.jpg',
            txt:'왕메가사과유자'
        },
        {
            img:'./images/10025.jpg',
            txt:'엠지씨네 와앙 메가칩'
        }
    ];

    tabsFn(0,1,2);

    // 탭 컨테이너, 탭 콘텐츠, 탭 버튼 찾기
    const tabs = $("#tabs");
    const tabs_div = tabs.children("div");
    const tabs_1 = tabs.find("#tabs-1");
    const btn = tabs.find("#tabs_btn a");

    // 초기 상태 설정: 모든 탭 콘텐츠 숨기고 첫 번째 탭만 보이기
    tabs_div.hide();
    tabs_1.show();

    // 탭 버튼 클릭 이벤트
    btn.click(function (e) {
        e.preventDefault(); // a 태그 기본 동작 막기

        // 모든 탭 버튼 색상 초기화
        btn.css("color", "var(--gray5)");

        // 클릭한 버튼만 색상 변경
        $(this).css("color", "var(--main)");

        // 모든 탭 콘텐츠 숨기고, 해당 탭 콘텐츠만 보여주기
        tabs_div.hide();
        const target = $(this).attr("href");
        $(target).show();
    });
});