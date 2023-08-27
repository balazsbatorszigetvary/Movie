/*
const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
*/



$(document).ready(function() {

  const hamburger = $(".hamburger");
  const navList = $(".nav-list");
  const closeBtn = $(".close-btn");
  const overlay = $(".overlay");

  if (hamburger.length) {
    hamburger.on("click", function() {
      navList.toggleClass("open");
      overlay.toggleClass("overlay-on");
    });
  }

  closeBtn.on("click", function() {
    navList.removeClass("open");
    overlay.removeClass("overlay-on");
  });

  $(document).on("click", function(event) {
    const target = $(event.target);
    if (!target.closest(".nav-list").length && !target.closest(".hamburger").length) {
      navList.removeClass("open");
      overlay.removeClass("overlay-on");
    }
  });

  
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
        $(".navigation").addClass("fixed");
    }else{
        $(".navigation").removeClass("fixed");
    }
})

})













