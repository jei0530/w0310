document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cancle').onclick = function() {
        location.href = '/w0310/70_pf/srt/join/join-2.html';
    };

    document.getElementById('next').onclick = function() {
        const form = document.querySelector('form');
        if (form.checkValidity()) {
            location.href = '/w0310/70_pf/srt/login/login.html';
        } else {
            form.reportValidity();
        }
    };
});