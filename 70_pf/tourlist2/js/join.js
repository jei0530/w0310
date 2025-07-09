//이메일 입력 폼

function selectDomain(select) {
    const domainInput = document.getElementById("email-domain");
    if (select.value) {
        domainInput.value = select.value;           // 선택한 도메인을 입력란에 넣음
        domainInput.readOnly = true;                // 도메인 입력란을 읽기 전용으로 만듦
        select.style.display = "none";              // select 박스를 숨김
    }
}

function submitForm() {
    const id = document.getElementById("email-id");         // 이메일 아이디 입력란
    const domain = document.getElementById("email-domain"); // 이메일 도메인 입력란
    const select = document.getElementById("domain-select");// 도메인 선택 select

    const fullEmail = `${id.value.trim()}@${domain.value.trim()}`; // 전체 이메일 주소 생성
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;              // 이메일 형식 정규식

    if (!emailRegex.test(fullEmail)) {                    // 이메일 형식이 맞지 않으면
        alert("유효한 이메일 형식이 아닙니다.");
        return false;                                     // 제출 중단
    }

    alert(`입력한 이메일: ${fullEmail}`);                  // 이메일 정상 입력 시 알림

    // 입력값 초기화 및 상태 복구
    id.value = "";
    domain.value = "";
    domain.readOnly = false;
    select.selectedIndex = 0;
    select.style.display = "inline-block";                // select 다시 보이기

    return false; // form 제출 방지(페이지 새로고침 방지)
}