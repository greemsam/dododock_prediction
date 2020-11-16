
//Navigation

$(function(){
  //help_bt_start----------------------------------------------------
 $(".help_window").hide();
 $(".help").click(function(){
   $(".help_window").show();
 });
 $(".back_btn").click(function(){
   $(".help_window").hide();
 });

  //setting_bt_start-------------------------------------------------

  setting_bt=0;
  $(".setting_panel").hide();
  $(".setting").click(function(){
    if(setting_bt==1){
      $(".setting_panel").hide();
      setting_bt=0;
    } else {
      $(".setting_panel").show();
      setting_bt=1;
    }
  });

  bgm_bt=0;
  sound_bt=0;
  $(".bgm").click(function(){
    if(bgm_bt==1){
      $(this).css({"background-position":0 -50});
      bgm_bt=0;
    } else{
      $(this).css({"background-position":0});
      bgm_bt=1;
    }
  });
  $(".sound").click(function(){
    if(sound_bt==1){
      $(this).css({"background-position":0 -50});
      sound_bt=0;
    } else {
      $(this).css({"background-position":0});
      sound_bt=1;
    }
  });
});
