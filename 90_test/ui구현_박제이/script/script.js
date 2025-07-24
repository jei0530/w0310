$(document).ready(function () {

  let currentSlideIndex = 0;

  let isScrolling = false;

  const scrollDuration = 700;



  const $wrapper = $('.full-page-wrapper');

  const $sections = $('.slide-section');

  const $slideWrapper = $('.slides-wrapper');

  const $slides = $('.group1');



  // 초기 세팅

  function initializePage() {

    $sections.removeClass('active').css({

      opacity: 0,

      visibility: 'hidden',

      zIndex: 0

    });



    $sections.eq(0).addClass('active').css({

      opacity: 1,

      visibility: 'visible',

      zIndex: 1

    });



    $wrapper.css('transform', 'translateY(0)');

    $slideWrapper.css('transform', 'translateX(0vw)');

  }



  initializePage();



  // 푸터 섹션으로 이동

  function goToFooter() {

    isScrolling = true;



    $wrapper.css('transform', 'translateY(-100%)');



    $sections.removeClass('active').css({

      opacity: 0,

      visibility: 'hidden',

      zIndex: 0

    });



    $sections.eq(1).addClass('active').css({

      opacity: 1,

      visibility: 'visible',

      zIndex: 1

    });



    setTimeout(() => {

      isScrolling = false;

    }, scrollDuration);

  }



  // 슬라이드 이동

  function goToSlide(index) {

    if (isScrolling) return;



    if (index >= $slides.length) {

      goToFooter(); // 슬라이드 끝나면 푸터로 이동

      return;

    }



    isScrolling = true;

    currentSlideIndex = index;



    $slideWrapper.css('transform', `translateX(-${index * 100}vw)`);



    setTimeout(() => {

      isScrolling = false;

    }, scrollDuration);

  }



  // 마우스 휠 이벤트

  $(window).on('wheel', function (e) {

    if (isScrolling) return;

    const delta = e.originalEvent.deltaY;



    if ($wrapper.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {

      if (delta > 0) {

        goToSlide(currentSlideIndex + 1);

      } else if (currentSlideIndex > 0) {

        goToSlide(currentSlideIndex - 1);

      }

    } else {

      if (delta < 0) {

        // 푸터에서 슬라이드로 복귀

        isScrolling = true;

        $wrapper.css('transform', 'translateY(0)');



        $sections.removeClass('active').css({

          opacity: 0,

          visibility: 'hidden',

          zIndex: 0

        });



        $sections.eq(0).addClass('active').css({

          opacity: 1,

          visibility: 'visible',

          zIndex: 1

        });



        setTimeout(() => {

          isScrolling = false;

          currentSlideIndex = 0;

          $slideWrapper.css('transform', 'translateX(0vw)');

        }, scrollDuration);

      }

    }

  });

});