
$(document).ready(function() {

    //풀페이지슬라이드
    let now = 0;
    const sections =$('.container section');
    const headerHeight =$('#header').height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq(index).position().top - headerHeight;
        } else {
            pos = $('#footer').position().top - headerHeight;
        }
        $('html,body').stop().animate({ scrollTop: pos }, 500);
    }

    $(window).on('wheel', function (e) {
        if ($('html, body').is(':animated')) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollTo(now);
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        }
        else {
            $('#header').removeClass('scrolled');
        }
    });
});

$(document).ready(function() {
            let currentSlide = 0;
            const totalSlides = 6;
            const slideWidth = 283;
            const slideMargin = 20;
            const containerWidth = 1205;
            const visibleSlides = Math.floor(containerWidth / (slideWidth + slideMargin));
            const maxSlide = totalSlides - visibleSlides;
            const $track = $('.tour_carousel');
            const $indicators = $('.indicator');
            
            // 슬라이드 이동 함수
            function moveToSlide(index) {
                // 인덱스 범위 체크 (첫 번째와 마지막에서 멈춤)
                if (index < 0) {
                    currentSlide = 0;
                    return;
                } else if (index > maxSlide) {
                    currentSlide = maxSlide;
                    return;
                } else {
                    currentSlide = index;
                }
                
                // 슬라이드 위치 계산
                const offset = currentSlide * (slideWidth + slideMargin);
                $track.css('transform', `translateX(-${offset}px)`);

                // 버튼 상태 업데이트
                updateButtonStates();
            }
            
            // 버튼 상태 업데이트 함수
            function updateButtonStates() {
                const $prevBtn = $('.arrow_left');
                const $nextBtn = $('.arrow_right');
                
                // 첫 번째 슬라이드에서 이전 버튼 비활성화
                if (currentSlide === 0) {
                    $prevBtn.css('opacity', '0.3').css('cursor', 'not-allowed');
                } else {
                    $prevBtn.css('opacity', '1').css('cursor', 'pointer');
                }
                
                // 마지막 슬라이드에서 다음 버튼 비활성화
                if (currentSlide === totalSlides - 1) {
                    $nextBtn.css('opacity', '0.3').css('cursor', 'not-allowed');
                } else {
                    $nextBtn.css('opacity', '1').css('cursor', 'pointer');
                }
            }
            
            // 이전 버튼 클릭
            $('.arrow_left').click(function() {
                moveToSlide(currentSlide - 1);
            });
            
            // 다음 버튼 클릭
            $('.arrow_right').click(function() {
                moveToSlide(currentSlide + 1);
            });
            

            
            // 키보드 이벤트 (선택사항)
            $(document).keydown(function(e) {
                if (e.keyCode === 37) { // 왼쪽 화살표
                    moveToSlide(currentSlide - 1);
                } else if (e.keyCode === 39) { // 오른쪽 화살표
                    moveToSlide(currentSlide + 1);
                }
            });
            
            // 초기 버튼 상태 설정
            updateButtonStates();
        });
