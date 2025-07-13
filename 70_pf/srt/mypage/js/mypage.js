function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            let fullAddr = data.address; // 기본 주소
            let extraAddr = '';          // 참고항목

            if (data.addressType === 'R') {
                if (data.bname) extraAddr += data.bname;
                if (data.buildingName) {
                    extraAddr += (extraAddr ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraAddr !== '') {
                    fullAddr += ' (' + extraAddr + ')';
                }
            }

            // 주소와 우편번호 채워넣기
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById('address').value = fullAddr;

            // 상세주소 입력창에 포커스
            document.getElementById('detailAddress').focus();
        }
    }).open();
}