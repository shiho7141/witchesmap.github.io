$(function(){
  // 마우스 커서 이미지 변경
  $("#wrap").mousemove(function (e) {
    $("#cursor").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $("#cursor").hide();
  });
  // 나침반 버튼 호버시 이미지 변경
  $("#compass_btn").hover(function(){
        $(this).attr("src", $(this).attr("src").replace(".png", "_on.png"));
    }, function(){
        $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"));
    });
  // 나침반 버튼 클릭시 모달창 팝업
  $("#compass_btn").on("click", function(){
    $("#compass_modal").fadeIn();
  });
  // 나침반 닫기 버튼 클릭시 모달창 닫기
  $("#compass_modal .close_btn").on("click", function(){
    $("#compass_modal").fadeOut();
  });
  // sns 아이콘 호버시 변경
  $("#compass_btn img, #sns_icon li a img").hover(function(){
    $(this).attr("src", $(this).attr("src").replace(".png", "_on.png"));
  }, function(){
      $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"));
  });
  // 서울(서부) 버튼 모달창 팝업
  $("#wseoul_btn").on("click", function(){
    $("#wseoul_modal").fadeIn();
  });
  $("#wseoul_modal .close_btn").on("click", function(){
    $("#wseoul_modal").fadeOut();
  });
  // 서울(동부) 버튼 모달창 팝업
  $("#eseoul_btn").on("click", function(){
    $("#eseoul_modal").fadeIn();
  });
  $("#eseoul_modal .close_btn").on("click", function(){
    $("#eseoul_modal").fadeOut();
  });
  // 범대학 버튼 모달창 팝업
  $("#universal_btn").on("click", function(){
    $("#universal_modal").fadeIn();
  });
  $("#universal_modal .close_btn").on("click", function(){
    $("#universal_modal").fadeOut();
  });
  // 인천 버튼 모달창 팝업
  $("#incheon_btn").on("click", function(){
    $("#incheon_modal").fadeIn();
  });
  $("#incheon_modal .close_btn").on("click", function(){
    $("#incheon_modal").fadeOut();
  });
  // 강원 버튼 모달창 팝업
  $("#gangwon_btn").on("click", function(){
    $("#gangwon_modal").fadeIn();
  });
  $("#gangwon_modal .close_btn").on("click", function(){
    $("#gangwon_modal").fadeOut();
  });
  // 서울 서부-서울대 가입단위 리스트 모달창 팝업
  $("#seoul_btn").on("click", function(){
    $("#seoul_univ").fadeIn();
  });
  $("#seoul_univ .close_btn").on("click", function(){
    $("#seoul_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 서부-성균관대 가입단위 리스트 모달창 팝업
  $("#sung_btn").on("click", function(){
    $("#sung_univ").fadeIn();
  });
  $("#sung_univ .close_btn").on("click", function(){
    $("#sung_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 서부-숙명여대 가입단위 리스트 모달창 팝업
  $("#sook_btn").on("click", function(){
    $("#sook_univ").fadeIn();
  });
  $("#sook_univ .close_btn").on("click", function(){
    $("#sook_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 서부-연세대(서울캠) 가입단위 리스트 모달창 팝업
  $("#yeons_btn").on("click", function(){
    $("#yeons_univ").fadeIn();
  });
  $("#yeons_univ .close_btn").on("click", function(){
    $("#yeons_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 서부-이화여대 가입단위 리스트 모달창 팝업
  $("#ehwa_btn").on("click", function(){
    $("#ehwa_univ").fadeIn();
  });
  $("#ehwa_univ .close_btn").on("click", function(){
    $("#ehwa_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 서부-중앙대 가입단위 리스트 모달창 팝업
  $("#jung_btn").on("click", function(){
    $("#jung_univ").fadeIn();
  });
  $("#jung_univ .close_btn").on("click", function(){
    $("#jung_univ").fadeOut();
    $("#wseoul_modal").fadeIn();
  });
  // 서울 동부-경희대 가입단위 리스트 모달창 팝업
  $("#gyeong_btn").on("click", function(){
    $("#gyeong_univ").fadeIn();
  });
  $("#gyeong_univ .close_btn").on("click", function(){
    $("#gyeong_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 서울 동부-고려대 가입단위 리스트 모달창 팝업
  $("#go_btn").on("click", function(){
    $("#go_univ").fadeIn();
  });
  $("#go_univ .close_btn").on("click", function(){
    $("#go_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 서울 동부-국민대 가입단위 리스트 모달창 팝업
  $("#gook_btn").on("click", function(){
    $("#gook_univ").fadeIn();
  });
  $("#gook_univ .close_btn").on("click", function(){
    $("#gook_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 서울 동부-동국대 가입단위 리스트 모달창 팝업
  $("#dong_btn").on("click", function(){
    $("#dong_univ").fadeIn();
  });
  $("#dong_univ .close_btn").on("click", function(){
    $("#dong_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 서울 동부-성신여대 가입단위 리스트 모달창 팝업
  $("#sungsin_btn").on("click", function(){
    $("#sungsin_univ").fadeIn();
  });
  $("#sungsin_univ .close_btn").on("click", function(){
    $("#sungsin_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 서울 동부-한국외대 가입단위 리스트 모달창 팝업
  $("#han_btn").on("click", function(){
    $("#han_univ").fadeIn();
  });
  $("#han_univ .close_btn").on("click", function(){
    $("#han_univ").fadeOut();
    $("#eseoul_modal").fadeIn();
  });
  // 범대학-모두의 페미니즘 모달창 팝업
  $("#modu_btn").on("click", function(){
    $("#modu_univ").fadeIn();
  });
  $("#modu_univ .close_btn").on("click", function(){
    $("#modu_univ").fadeOut();
    $("#universal_modal").fadeIn();
  });
  // 범대학-유니브페미 모달창 팝업
  $("#univfemi_btn").on("click", function(){
    $("#univfemi_univ").fadeIn();
  });
  $("#univfemi_univ .close_btn").on("click", function(){
    $("#univfemi_univ").fadeOut();
    $("#universal_modal").fadeIn();
  });
  // 인천-인천대 가입단위 리스트 모달창 팝업
  $("#inc_btn").on("click", function(){
    $("#inc_univ").fadeIn();
  });
  $("#inc_univ .close_btn").on("click", function(){
    $("#inc_univ").fadeOut();
    $("#incheon_modal").fadeIn();
  });
  // 인천-인하대 가입단위 리스트 모달창 팝업
  $("#inha_btn").on("click", function(){
    $("#inha_univ").fadeIn();
  })
  $("#inha_univ .close_btn").on("click", function(){
    $("#inha_univ").fadeOut();
    $("#incheon_modal").fadeIn();
  })
  // 강원-연세대(원주캠) 가입단위 리스트 모달창 팝업
  $("#yeonw_btn").on("click", function(){
    $("#yeonw_univ").fadeIn();
  });
  $("#yeonw_univ .close_btn").on("click", function(){
    $("#yeonw_univ").fadeOut();
    $("#gangwon_modal").fadeIn();
  });
  // 지역 버튼 클릭시 flip.mp3 재생
  $(".content_btn").on("click", function(){
    var audio = new Audio("flip.mp3");
    audio.loop = false; // 반복재생하지 않음
    audio.volume = 0.05;
    audio.currentTime = 0.2;
    audio.play(); // sound1.mp3 재생
  });
  // 대학 버튼 클릭시 flip.mp3 재생
  $(".univ_btn").on("click", function(){
    var audio = new Audio("flip.mp3");
    audio.loop = false; // 반복재생하지 않음
    audio.volume = 0.05;
    audio.currentTime = 0.2;
    audio.play(); // sound1.mp3 재생
  });
  // 나침반 버튼 클릭시 compass_open.mp3 재생
  $("#compass_btn").on("click", function(){
    var audio_compass = new Audio("compass_open.mp3");
    audio_compass.loop = false;
    audio_compass.volume = 0.2;
    audio_compass.play();
  });
});
