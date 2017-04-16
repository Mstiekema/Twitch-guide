$.getJSON("./chat.json", function(data) {
  var chatMsg = data.chatMsgs
  for (key in chatMsg) {
    var link = chatMsg[key].link
    var text = chatMsg[key]['short']
    var name = chatMsg[key]['name']
    $("#chatMsgs").append('<div id="'+key+'" class="message"><img class="msgIcon" src='+link+'><p class="msgText"><b>'+name+"</b>: "+text+'</p></div>');
  }

  var msgs = document.getElementsByClassName("message");
  for (var i = 0; i < msgs.length; i++) {
    msgs[i].addEventListener('click', function() {
      var link = chatMsg[this.id].link
      var text = chatMsg[this.id].long
      var name = chatMsg[this.id].name
      $("#modalInfo").html('<img id="modalImg" src='+link+'><b>&nbsp;'+name+"</b><br><p class='modalText'>"+text+'</p>')
      $('#modalInfo').removeClass('animated bounceOutUp');
      $('#modalInfo').addClass('animated bounceInDown');
      document.getElementById("modal").style.display = "block";
    });
  }

  window.onclick = function(event) {
    if(document.getElementById("modal").style.display == "block" && event.target == modal) {
      $('#modalInfo').removeClass('animated bounceInDown');
      $('#modalInfo').addClass('animated bounceOutUp');
      setTimeout(function () { document.getElementById("modal").style.display = "none" }, 1000);
    }
  };
})
