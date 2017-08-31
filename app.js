$(document).ready(function(){

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2?callback=?', function(data) {
    if(data.stream === null) {
      $("#esl_sc2Info").prepend($("<p>Offline</p>"));
      $("#esl_sc2").addClass("offline");
    } else {
      $("#esl_sc2Info").prepend($("<p>" + data.stream.game + " " + data.stream.channel.status + "</p>"));
      $("#esl_sc2").addClass("online");
    }
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
    if(data.stream === null) {
      $("#FCCInfo").prepend($("<p>Offline</p>"));
      $("#freecodecamp").addClass("offline");
    } else {
      $("#FCCInfo").prepend($("<p>" + data.stream.game + " " + data.stream.channel.status + "</p>"));
      $("#freecodecamp").addClass("online");
    }
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/culprate?callback=?', function(data) {
    if(data.stream === null) {
      $("#culprateInfo").prepend($("<p>Offline</p>"));
      $("#culprate").addClass("offline");
    } else {
      $("#culprateInfo").prepend($("<p>" + data.stream.game + " " + data.stream.channel.status + "</p>"));
      $("#culprate").addClass("online");
    }
  });

  clickEvents();
  function clickEvents() {

    var allOffline = [];
    var allActive = [];
    var allChannels = $(".channel");

    $("#all").click(function(){
      activeButton(this,"#active","#offline");
      allChannels.appendTo('#allChannels');
    });

    $("#active").click(function(){

      activeButton(this,"#all","#offline");

      $(".channel").each(function(index,value){
        if($(value).find("p").html() == "Offline") {
          allOffline.push($(value).detach());
          console.log(allOffline);
        }
      });

      if(allActive.length !== 0) {
        allActive.map(function(val){
          $(val).appendTo('#allChannels');
        });
        allActive.length = 0;
      }

    });

    $("#offline").click(function(){
      activeButton(this,"#active","#all");

      $(".channel").each(function(index,value){
        if($(value).find("p").html() !== "Offline") {
          allActive.push($(value).detach());
          console.log(allActive);
        }
      });

      if(allOffline.length !== 0) {
        allOffline.map(function(val){
          $(val).appendTo('#allChannels');
        });
        allOffline.length = 0;
      }
    });
  }


});


function activeButton(deactviate,active,active2) {
  $(deactviate).prop("disabled",true).css("background-color","#ffebcc");
  $(active).prop("disabled",false).css("background-color","#e66b00");
  $(active2).prop("disabled",false).css("background-color","#e66b00");
}
