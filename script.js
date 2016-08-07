console.log("eyy world");

function closeOverlay() {
  console.log("work plz");
  var crosses = document.querySelectorAll(".overlay");
  for(var i = 0; i < crosses.length; i++){
   //do something to each div like
   crosses[i].className = "overlay";
  }
}

function openOverlay(id) {
  console.log("clicked!!!");
  document.querySelector("#" + id + "-overlay").className += " overlayShow";
};

window.onkeydown = function(evt) {
  evt = evt || window.event;
   if (event.keyCode == 27) {
      closeOverlay();
   }
}
