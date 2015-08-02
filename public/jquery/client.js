$(function(){
  $(".toletsbegin").click(function(){
    window.location.href="/letsbegin";
  });
  $(".cancel").click(function(){
    window.location.href="/";
  });
  $(".symbols_page").click(function(){
    window.location.href="/symbols";
  });
  $(".continue_next").click(function(){
    $(".output_symbol").addClass($(".symbol_9").attr("class"));
    $(".output_caption").html($(".label_9 span").html());
    $(".main_cont").remove();
  });
  // text animation
  // hide all at the begining
  //$("#message_container,#steps,#step1,#step2,#step3,#step1_ex,#step2_ex,#step3_ex,#step1_tit,#step2_tit,#step3_tit").hide();
  // animate title
  setTimeout(function(){
    var input_json = {
      "effect": 'bounce',
      "delayScale": 1.5,
      "delay": 50,
      "shuffle": false,
      "reverse": false,
    };
    $("#message_container").show();
    $("#steps").show().textillate({in:input_json});
  },2000);
  // animate each step title
  var ix=0;
  setInterval(function(){
    var input_json = {
      "effect": 'bounceIn',
      "delayScale": 1.5,
      "delay": 50,
      "shuffle": false,
      "reverse": false,
    };
    ix++;
    $("#step"+ix+"_tit").show().textillate({in:input_json});
  },6000);
  // animate each step explanation
  setTimeout(function(){
    var iy=0;
    setInterval(function(){
      var input_json = {
        "effect": 'flip',
        "delayScale": 1.5,
        "delay": 50,
        "shuffle": false,
        "reverse": false,
      };
      iy++;
      $("#step"+iy).show().textillate({in:input_json});
    },6000);
  },1000);
  // animate each step example
  setTimeout(function(){
    var iz=0;
    setInterval(function(){
      var input_json = {
        "effect": 'rotateIn',
        "delayScale": 1.5,
        "delay": 50,
        "shuffle": false,
        "reverse": false,
      };
      iz++;
      $("#step"+iz+"_ex").show().textillate({in:input_json});
    },6000);
  },5000);
  var input_json = {
    "effect": 'rotateIn',
    "delayScale": 1.5,
    "delay": 50,
    "shuffle": false,
    "reverse": false,
  };
  var output_json = {
    "effect": 'swing',
    "delayScale": 1.5,
    "delay": 50,
    "shuffle": false,
    "reverse": false,
  };
  $("#final_msg").show().textillate({in:input_json,out:output_json,loop:true});
});
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1479646505668090',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
