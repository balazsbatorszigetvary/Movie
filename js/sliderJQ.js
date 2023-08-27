$(document).ready(function () {
  let overlay = $(".overlay");
  let index = 0;
  const totalWorkItems = $(".work-items").length;
  const wHeight = $(window).height();

  $(".lightbox-img").css("max-height", wHeight + "px");

  $(".work-items").click(function () {
    index = $(this).index();
    $(".lightbox").addClass("open");
    overlay.addClass("overlay-active");

    lightboxSlideShow();
  });

  /* Prev button */
  $(".lightbox .prev").click(function () {
    if (index == 0) {
      index = totalWorkItems - 1;
    } else {
      index--;
    }
    lightboxSlideShow();
  });

  /* Next button */
  $(".lightbox .next").click(function () {
    if (index == totalWorkItems - 1) {
      index = 0;
    } else {
      index++;
    }
    lightboxSlideShow();
  });

  /* Close button */
  $(".lightbox-close").click(function () {
    $(".lightbox").removeClass("open");
    overlay.removeClass("overlay-active");
  });

  $(document).on("mousedown", function (event) {
    if (
      !$(event.target).closest(".lightbox").length &&
      $(".lightbox").hasClass("open") &&
      overlay.hasClass("overlay-active")
    ) {
      $(".lightbox").removeClass("open");
      overlay.removeClass("overlay-active");
    }
  });

  function lightboxSlideShow() {
    const imgSrc = $(".work-items").eq(index).find("img").attr("data-large");
    const category = $(".work-items").eq(index).find("h4").html();
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
  }
});
