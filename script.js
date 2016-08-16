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

var boxes = [
  {
    "name" : "me",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "linkedin.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "Yacc.io",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "yacc.png",
    "link" : "www.google.dk"
  },
  {
    "name" : "education",
    "size" : "large",
    "text" : "Anders eeee",
    "image" : "facebook.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "The 2nd Edit",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "2ndEdit.png",
    "link" : "www.google.dk"
  },
  {
    "name" : "Mærkelex.dk",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "maerkelex.svg",
    "link" : "www.google.dk"
  },
  {
    "name" : "NJORD",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "njord.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "Greve Parkour",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "parkour.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "harvikampfly.dk",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "kampfly.jpg",
    "link" : "www.google.dk"
  }
]

boxes.forEach(function(box) {
  console.log("name: ", box.name);
  var div = document.createElement('div');
  div.className = 'flex-item ' + box.size;
  div.innerHTML = '<div class="flex-img" style="background-image: url(images/' + box.image + ')">' + box.name + '</div>';
  document.querySelector('.flex-container').appendChild(div);
})
