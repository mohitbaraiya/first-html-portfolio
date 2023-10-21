$(".bg-image-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".image-slider, .text-slider",
});

$(".image-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".bg-image-slider, .text-slider",
  //   dots: true,
  focusOnSelect: true,
  arrows: false,
});
// $(".text-slider").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   //   fade: true,
//   asNavFor: ".image-slider, .bg-image-slider",
// });

$(function () {
  $(".text-slider")
    .on("init", function (event, slick) {
      $(this).append(
        '<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>'
      );
      $(".current").text(slick.currentSlide + 1);
      $(".total").text(slick.slideCount);
    })
    .slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".image-slider, .bg-image-slider",
      prevArrow:
        "<button type='button' class='prevArrow slick-arrow'><</button>",
      nextArrow:
        "<button type='button' class='prevArrow slick-arrow'>></button>",
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      console.log("trigger");
      $(".current").text(nextSlide + 1);
    });
});
