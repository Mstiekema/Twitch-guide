window.onresize = function(event) {
  if(window.innerWidth < 1000) {
    $("#standard-menu").addClass("hidden");
    $("#dropdown-menu").removeClass("hidden");
  } else {
    $("#standard-menu").removeClass("hidden");
    $("#dropdown-menu").addClass("hidden");
  }
}

$(document).ready(function(){
  if(window.innerWidth < 1000) {
    $("#standard-menu").addClass("hidden");
    $("#dropdown-menu").removeClass("hidden");
  } else {
    $("#standard-menu").removeClass("hidden");
    $("#dropdown-menu").addClass("hidden");
  }
});
