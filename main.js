$(function () {
  $(".autoplay").slick({
    arrows: false,
    dots: false,
    slidesToShow: 3.9,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024, // ブレークポイントを設定
          settings: {
            slidesToShow: 2, // 1024px未満の場合の表示スライド数
          },
        },
        {
          breakpoint: 768, // ブレークポイントを設定
          settings: {
            slidesToShow: 1, // 768px未満の場合の表示スライド数
          },
        },
      ],
  });
});


//お知らせ記事
$(document).ready(function(){
    // スライダーが初期化されているか確認し、初期化されていない場合のみ初期化する
    if (!$('.slider').hasClass('slick-initialized')) {
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500, // 切り替え速度
        cssEase: 'ease',
        slidesToShow: 1,
        swipe: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
      });
    }
  });
  

// TOPへ戻る
$(function () {
    $(".top-button").click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });
});

