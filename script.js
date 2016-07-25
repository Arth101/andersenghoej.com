console.log("eyy world");

document.querySelector("#plz").addEventListener("click", function() {
  console.log("clicked next");
  document.querySelector(".overlay").className += " overlayShow";
});

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
