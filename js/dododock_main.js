
//contents controls

$(function(){
  card_move_dis = $("body").width(); //for cards moving
  predic_x = $("body").height(); //for predic position

  home_hide();
  load_dock();
  a_return_false();
  title_font_control();
  card_info_hide();
  card_info_pre_hide();

  $(".d_active>a").click(function(){
    font_ani_clear(); //(1)
    $(".home").show(); //(2)
    $(".dododock_area").css({"z-index":9}); //(3)
    $(".dododock_box").animate({"bottom":-596}, 800, function(){
      $(".card_info").show();//(4)
      $(".card_area").animate({"top":100}, 1000);//(5)
      $(".card_info").animate({"opacity":1}, 500, function(){//(6)
        $(".card_info").animate({"opacity":1}, 500, function(){ //(7)
          $(".dododock_area").css({"z-index":0}); //(8)
          $(".card_info").animate({"opacity":0}, 500, function(){ //(9)
            $(".card_info").hide();//(10)
          });
        });
      });
    });
  });
 /*
 (1) "구슬을 만지세요" setInterval 제거
 (2) 홈 버튼 보여줌
 (3) 카드 목록을 불러오는 애니메이션이 완전히 끝날때까지, dododock_area를 덮어씌워서 카드 클릭을 막음
 (4) "카드를 고르세요" 메시지를 띄움
 (5) 1초동안 카드 목록을 불러옴
 (6) 0.5초동안 "카드를 고르세요" 메시지의 opacity를 1로 만듬
 (7) 0.5초동안 "카드를 고르세요" 메시지의 opacity:1을 유지
 (8) dododock_area를 맨 뒤로 보냄
 (9) 0.5초동안 "카드를 고르세요" 메시지의 opacity를 0으로 만듬
 (10) "카드를 고르세요" 메시지 숨김
 */

  $(".card_wrap>li").click(function(){
    // dododock_deactive(); //도도닥 구슬 비활성화
    nav_hide();
    $(".dododock_area").css({"z-index":9});
    card_sel = $(this).attr("class");
    $(".card_wrap>li").css({"transform":"rotateZ(0deg)", "transition":"0.8s"});
    $(".card_wrap>li:nth-child(2n+1)").not(document.getElementById(card_sel)).css({"transform":"rotateZ(360deg)", "left":card_move_dis+10});
    $(".card_wrap>li:nth-child(2n)").not(document.getElementById(card_sel)).css({"transform":"rotateZ(360deg)", "left":-card_move_dis-10});
    $(document.getElementById(card_sel)).css({"transform":"rotateZ(360deg)", "top":120, "left":80});

    $(".card_area").animate({"height":"100%"}, 100, function(){
      $(".card_area").animate({"height":"100%"}, 900, function(){
        $(".card_area").css({"position":"fixed"});
        $(".card_area").animate({"height":"100%"}, 0, function(){
          $(".card_area").css({"position":"absolute"});
          $(".card_area").animate({"height":950}, 10, function(){
            card_rev();
            card_value();
            card_info_pre_show();
            predict_show();
            $(".predic").animate({"opacity":1}, 500, function(){
              nav_show();
              $(".card_info_pre").animate({"opacity":1}, 500, function(){
                $(".predic").animate({"opacity":1}, 200, function(){
                  $(".predic").animate({"opacity":1}, 500, function(){
                    $(".card_info_pre").animate({"opacity":0}, 300, function(){
                      card_info_pre_hide();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
    // setTimeout(function(){
    //   $(".card_area").css({"position":"absolute"});
    //   $(".card_area").animate({"height":950}, 100);
    // }, 1000);

    // $(".card_area").animate({"height":950}, 1000);
    //스크롤 바 아래쪽의 카드를 클릭했을 때, 화면의 초점을 맞추기 위해 포지션 설정이 바뀜.
    //absolute -> fixed -> absolute
    //선택되지 않은 요소의 id 애니메이트

    // setTimeout(function(){card_rev(); card_value();}, 1010);
    // setTimeout(function(){card_info_pre_show(); card_info_pre_show_op();}, 1010);
    // setTimeout(function(){nav_show(); predict_show();}, 1800); //show navigation
    // setTimeout(function(){card_info_pre_hide_op();}, 2400);
    // setTimeout(function(){card_info_pre_hide();}, 2700);

  });//(".card_wrap>li") click function

  $(".home").click(function(){
    $(".dododock_area").css({"z-index":0});
    predict_hide();
    title_font_control();
    setTimeout(function(){home_hide(); card_area_fix_pos();}, 200);
    setTimeout(function(){card_area_abs_pos();}, 800);
    setTimeout(function(){load_dock(); card_wrap_li_initialize();}, 1000);
  });//홈으로 돌아갈때도 포지션이 fixed - absolute로 바뀜.

//contents controls

//functions--------------------------------------

//card_control----------------------------------------

function card_rev(){
  // $()
  $(document.getElementById(card_sel)).css({
    "transform":"rotateY(-180deg)",
    "top":0,
    "left":0,
    "width":288,
    "height":446,
  });
};//card reverse

function card_area_fix_pos(){
  $(".card_area").css({"position":"fixed"});
  $(".card_area").animate({"top":-720, "height":720}, 800);
}
function card_area_abs_pos(){
    $(".card_area").css({"position":"absolute"});
}; //card_area_backto_abs

function card_wrap_li_initialize(){
  $(".card_wrap>li").css({
    "transform":"rotate(0deg)",
    "background":"url(img/d_card.png)",
    "width":139,
    "height":213
  });

  $("#card0").css({"top":0, "left":0});
  $("#card1").css({"top":0, "left":149});
  $("#card2").css({"top":223, "left":0});
  $("#card3").css({"top":223, "left":149});
  $("#card4").css({"top":446, "left":0});
  $("#card5").css({"top":446, "left":149});
}; // move cards away

//initialize----------------------------------------------

function load_dock(){
  $(".dododock_box").animate({"bottom":0},800);
}; // load dododock charcater

function a_return_false(){
  $("a").click(function(e){
    e.preventDefault();
  });
} //a_return_false

function title_font_control(){
  fn=25;
  n=0;
  font_ani = setInterval(function(){
    if(n==1){
      $(".text").animate({"font-size":fn});
      n=0;
    } else {
      $(".text").animate({"font-size":fn-5});
      n=1;
    }
  }, 60);
}; //title_font_control

function font_ani_clear(){
  clearTimeout(font_ani);
}

function dododock_deactive(){
  $(".d_active>a").css({"background":"url(img/deactivated_dododock.png)"});
};

function loadcards(){
  $(".card_area").animate({"top":100}, 1000);
}; // load cards

function card_info_hide_op(){
  $(".card_info").animate({"opacity":0});
}
function card_info_hide(){
  $(".card_info").hide();
}

function card_info_show(){
  $(".card_info").show();
}
function card_info_show_op(){
  $(".card_info").animate({"opacity":1});
}

function card_info_pre_hide(){
  $(".card_info_pre").hide();
}

function card_info_pre_hide_op(){
  $(".card_info_pre").animate({"opacity":0}, 300);
}

function card_info_pre_show(){
  $(".card_info_pre").show();
}
function card_info_pre_show_op(){
  $(".card_info_pre").animate({"opacity":1}, 300);
}
//navigation_hide-------------------------------------

function home_hide(){
  $(".home").hide();
};

function help_hide(){
  $(".help").hide();
};

function set_hide(){
  $(".setting").hide();
};

function nav_hide(){
  $(".nav").hide();
};

function nav_show(){
  $(".nav").show();
};
//navigation_hide-------------------------------------

//prediction
function predict_hide(){
  $(".predic").animate({"opacity":0, "height":0}, 200);
};

function predict_show(){
  $(".predic").css({"top":580, "height":412});
};

function card_value(){

  card_v = Math.floor(Math.random() * 6);  // returns a number between 0 and 5

  if(card_v==0){
      $(".card_wrap>li").css({"background":"url(img/assassine_card.png)"});
      $(".predic").css({"background":"url(img/assassine_pre.png)"});
    }
    else if(card_v==1){
      $(".card_wrap>li").css({"background":"url(img/seaslug_card.png)"});
      $(".predic").css({"background":"url(img/seaslug_pre.png)"});
    }
    else if(card_v==2){
      $(".card_wrap>li").css({"background":"url(img/saxophonist_card.png)"});
      $(".predic").css({"background":"url(img/saxophonist_pre.png)"});
    }
    else if(card_v==3){
      $(".card_wrap>li").css({"background":"url(img/harmony_card.png)"});
      $(".predic").css({"background":"url(img/harmony_pre.png)"});
    }
    else if(card_v==4){
      $(".card_wrap>li").css({"background":"url(img/dododockpen_card.png)"});
      $(".predic").css({"background":"url(img/dododockpen_pre.png)"});
    }
    else if(card_v==5){
      $(".card_wrap>li").css({"background":"url(img/seamonster_card.png)"});
      $(".predic").css({"background":"url(img/seamonster_pre.png)"});
    };
};
