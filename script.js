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
    "name" : "",
    "id" : "me",
    "type" : "personal",
    "size" : "small",
    "text" : "",
    "image" : "linkedin.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "Yacc.io",
    "id" : "yacc",
    "type" : "personal",
    "size" : "small",
    "text" : "Current Employer",
    "image" : "yacc.png",
    "link" : "www.google.dk"
  },
  {
    "name" : "Web Developer,<br />Multimedia Designer",
    "id" : "education",
    "type" : "personal",
    "size" : "large",
    "text" : "Skills & Education",
    "color" : "rgba(18,82,151,1)",
    "link" : "www.google.dk"
  },
  {
    "name" : "The 2nd Edit",
    "id" : "the2ndedit",
    "type" : "job",
    "size" : "small",
    "text" : "Webshop",
    "image" : "2ndEdit.png",
    "link" : "www.google.dk"
  },
  {
    "name" : "Mærke&#173;lex",
    "id" : "maerkelex",
    "type" : "job",
    "size" : "small",
    "text" : "Scouting badge catalog",
    "image" : "maerkelex.svg",
    "link" : "www.google.dk"
  },
  {
    "name" : "NJORD",
    "id" : "njord",
    "type" : "job",
    "size" : "small",
    "text" : "Wordpress webshop",
    "image" : "njord.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "Greve Parkour",
    "id" : "greveparkour",
    "type" : "interest",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "parkour.jpg",
    "link" : "www.google.dk"
  },
  {
    "name" : "harvi&#173;kampfly.dk",
    "id" : "kampfly",
    "type" : "interest",
    "size" : "small",
    "text" : "Anders Enghøj",
    "image" : "kampfly.jpg",
    "link" : "http://harvikampfly.dk/"
  },
  {
    "name" : "Strong Geeks",
    "id" : "stronggeeks",
    "type" : "interest",
    "size" : "small",
    "text" : "We had a lot of fun",
    "image" : "stronggeeks.jpg",
    "link" : "www.google.dk"
  }
]

boxes.forEach(function(box) {
  console.log("name: ", box.name);
  var div = document.createElement('div');
  div.className = 'flex-item ' + box.size;

  var boxImage = box.image;
  if(box.image == null){
    boxImage = "background-color:" + box.color;
  } else {
    boxImage = "background-image: url(images/" + box.image + ")";
  };

  div.innerHTML = '<div class="flex-img" id="' + box.id + '" style="' + boxImage + '"><p>' + box.name + '<span>' + box.text + '</span></p><div class="valign"><p><strong>' + box.name +'</strong>' + box.text +'<a href="' + box.link + '"><i class="material-icons links">link</i></a></p></div></div>';

  if(box.type == "personal"){
    document.querySelector('#personal').appendChild(div);
  }
  if(box.type == "job"){
    document.querySelector('#job').appendChild(div);
  }
  if(box.type == "interest"){
    document.querySelector('#interest').appendChild(div);
  }
});
