    
// 노선안내 서브페이지 노선별 지도 바꾸기
   
const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.map_container img');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const index = parseInt(tab.getAttribute('data-index'), 10); // Convert to number

    // 탭 활성화 전환
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 이미지 표시 전환
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  });
});


