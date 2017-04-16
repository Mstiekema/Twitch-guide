$.getJSON("./watis.json", function(data) {
  var allModal = data.allModal
  var clicks = document.getElementsByClassName("click");
  for (var i = 0; i < clicks.length; i++) {
    clicks[i].addEventListener('click', function() {
      var link = allModal[this.id].link
      var text = allModal[this.id].text
      var title = allModal[this.id].name
      var short = allModal[this.id].short
      var imgWidth = allModal[this.id].width
      $("#modalImg").attr("src", link)
      $("#modalText").html("<h3 style='margin-top:0px;'>"+title+"</h3>")
      for(var i = 0; i < short.length; i++) {
        $("#modalText").append("<b>► " + short[i] + "</b><br>")
      }
      $("#modalText").append("<br>" + text)
      var width = imgWidth + 320
      $("#modalInfo").width(width)
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
