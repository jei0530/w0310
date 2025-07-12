document.getElementById('cancle').onclick = function () {
    location.href = 'https://naver.com'; // 취소 시 이동할 페이지
    //'/w0310/70_pf/srt/join/join-1.html';
};

document.getElementById('next').onclick = function () {
    const form = document.querySelector('form');
    if (form.checkValidity()) {
        location.href = 'join-3.html'; // 다음 단계 페이지
    } else {
        form.reportValidity(); // 필수값 미입력 시 브라우저 경고
    };