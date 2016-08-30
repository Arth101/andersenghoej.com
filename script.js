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
    "id" : "me",
    "type" : "personal",
    "size" : "small",
    "text" : "Name: Anders Enghøj<br />Age: 25<br />Residence: Copenhagen",
    "image" : "linkedin.jpg"
  },
  {
    "name" : "Yacc.io",
    "id" : "yacc",
    "type" : "personal",
    "size" : "small",
    "subtitle" : "Current Employer",
    "text" : "My current employer, Yacc.io, is a recent IT startup. I work as the primary frontend developer, SEO König and designer.",
    "image" : "yacc.png",
    "link" : "http://www.yacc.io/"
  },
  {
    "name" : "Web Developer,<br />Multimedia Designer",
    "id" : "education",
    "type" : "personal",
    "size" : "large",
    "subtitle" : "Skills & Education",
    "text" : "As a bachelor of Web Development I have learned how to undertake the design and construction of web applications of all sizes. I have been working creatively with coding, creating realistic projects while refining my development and programming skills to a professional level.<br /><br />HTML | CSS | JavaScript | React.js | node.js",
    "color" : "rgba(18,82,151,1)"
  },
  {
    "name" : "The 2nd Edit",
    "id" : "the2ndedit",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Webshop",
    "image" : "2ndEdit.png",
    "link" : "http://www.the2ndedit.com/"
  },
  {
    "name" : "Mærke&#173;lex",
    "id" : "maerkelex",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Scouting badge catalog",
    "image" : "maerkelex.svg",
    "link" : "http://maerkelex.dk/"
  },
  {
    "name" : "NJORD",
    "id" : "njord",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Wordpress webshop",
    "image" : "njord.jpg",
    "link" : "http://www.mynjord.com/"
  },
  {
    "name" : "Greve Parkour",
    "id" : "greveparkour",
    "type" : "interest",
    "size" : "small",
    "subtitle" : "Anders Enghøj",
    "image" : "parkour.jpg",
    "link" : "http://greveparkour.dk/"
  },
  {
    "name" : "harvi&#173;kampfly.dk",
    "id" : "kampfly",
    "type" : "interest",
    "size" : "small",
    "subtitle" : "Anders Enghøj",
    "image" : "kampfly.jpg",
    "link" : "http://harvikampfly.dk/"
  },
  {
    "name" : "Strong Geeks",
    "id" : "stronggeeks",
    "type" : "interest",
    "size" : "small",
    "subtitle" : "We had a lot of fun",
    "image" : "stronggeeks.jpg"
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

  if(box.name == null){
    box.name = "";
  }

  if(box.subtitle == null){
    box.subtitle = "";
  }

  var link = "";
  if(box.link != null){
    link = '<a href="' + box.link + '"><i class="material-icons links">link</i></a>'
  }

  div.innerHTML = '<div class="flex-img" id="' + box.id + '" style="' + boxImage + '"><p>' + box.name + '<span class="subtitle">' + box.subtitle + '</span></p><div class="valign"><p><strong>' + box.name +'</strong><span class="valign-text">' + box.text + '</span>' + link + '</p></div></div>';

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
