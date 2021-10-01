$(function(){
/////////////////////////

$(".top_banner i").on("click", function(){
   // $(".top_banner").hide();//
   $(".top_banner").addClass("on");
});//배너//

$(".header .mopen").on("click",function(){
   $("nav").toggleClass("on");
});

$(".main_slider").slick({
   arrows:false,autoplay:true 
});

$(".main_slider figure").eq(1).addClass("on");
$(".main_slider").on("afterChange", function(e,s,c){
  // console.log(c)
   $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
});//슬라이더//



//동영상 멈춤//
$("#con03 .xi-pause").on("click", function(){
   $("#con03 video").trigger("pause")

});

//동영상 재생//
$("#con03 .xi-play").on("click", function(){
   $("#con03 video").trigger("play")

});




$("#bgndVideo").YTPlayer({
   containment:'#vpl',
   autoPlay:true,
   mute:true, 
   startAt:0, 
   opacity:1
});



$("#con05 .xi-pause").on("click", function(){
   $("#bgndVideo").YTPPause();
});

$("#con05 .xi-play").on("click", function(){
   $("#bgndVideo").YTPPlay();
});





$("#bgVideo").YTPlayer({
   containment:'#con06',
   autoPlay:true,
   mute:true, 
   startAt:5, 
   opacity:1,
   showControls:false,
   playOnlyIfVisible:true,
});



$("#con06 .xi-pause").on("click", function(){
   $("#bgVideo").YTPPause();
});

$("#con06 .xi-play").on("click", function(){
   $("#bgVideo").YTPPlay();
});



$(".product_slider").slick({
   arrows:false,
   dots:true,
   slidesToShow:5,
   responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$("#con07 .arrows .xi-angle-left").on("click", function(){
   $(".product_slider").slick("slickPrev");
});


$("#con07 .arrows .xi-angle-right").on("click", function(){
   $(".product_slider").slick("slickNext");
});


//탭//
$(".tab_link li").on("click", function(){
  // console.los자기자신($ (this).index())자신의 고유번호 //
  var idx=$(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".tab_content>div").eq(idx).show().siblings().hide();

});

//링크로 가기//
$(".link select").on("change", function(){
   var lik=$(this).val();
   //if(lik) window.open(lik); 새창//
   if(lik) location.href=lik; //현재창
});

 AOS.init();

/////////////////////////
})