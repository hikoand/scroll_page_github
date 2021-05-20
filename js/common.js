$(function() {
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function() {
    // console.log($(this.hash))

    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();

    $("html,body").stop();
    $("html,body").animate({scrollTop : offsetElem.top},1500)
  });

  //go to top buttom display
  $(window).scroll(function(){
    // console.log($(this).scrollTop())

    if( $(this).scrollTop() == 0) {
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 add class
  let wHeight = $(window).innerHeight();
  console.log("window height: "+wHeight)
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    });
  });
});
