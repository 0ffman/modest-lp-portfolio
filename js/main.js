var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'button'
      },
      breakpoints: {// настройки для разных разрешений
            767: {
                slidesPerView: '1'
              },
        }
    });

$(function() {
        $('.btn-toggle').on('click', function() {
        $('.main-list').slideToggle(300, function() {
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
      });
    });
  });