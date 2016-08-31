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
    "description" : "Name: Anders Enghøj<br />Age: 25<br />Residence: Copenhagen",
    "image" : "linkedin.jpg"
  },
  {
    "name" : "Yacc.io",
    "id" : "yacc",
    "type" : "personal",
    "size" : "small",
    "subtitle" : "Current Employer",
    "description" : "My current employer, Yacc.io, is a recent IT startup. I work as the primary frontend developer, SEO König and designer.",
    "image" : "yacc.png",
    "link" : "http://www.yacc.io/"
  },
  {
    "name" : "Web Developer,<br />Multimedia Designer",
    "id" : "education",
    "type" : "personal",
    "size" : "large",
    "subtitle" : "Skills & Education",
    "description" : "As a bachelor of Web Development I have learned how to undertake the design and construction of web applications of all sizes. I have been working creatively with coding, creating realistic projects while refining my development and programming skills to a professional level.<br /><br />HTML | CSS | JavaScript | React.js | node.js",
    "color" : "rgba(18,82,151,1)"
  },
  {
    "name" : "THE 2nd EDIT",
    "id" : "the2ndedit",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Webshop",
    "description" : "The 2nd Edit needed a new web-based selling platform, where users could sell their own products throught the company. That required a lot of user inputs and a good flow through the product flow. We made the platform's frontend using React.js, and I've got great experience using that framework.",
    "image" : "pastel_banner.png",
    "link" : "http://www.the2ndedit.com/"
  },
  {
    "name" : "Mærke&#173;lex",
    "id" : "maerkelex",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Scouting badge catalog",
    "description" : "Since no listings of the official and unofficial badges that scouts of Denmark can earn existed, a fellow scout and I created mærkelex. The site is mainly cataloging all the different badges across different organizations, and makes it easier to find badges that you might want to earn.",
    "image" : "maerkelex.svg",
    "link" : "http://maerkelex.dk/",
    "repo" : "https://github.com/hypesystem/maerkelex.dk"
  },
  {
    "name" : "NJORD",
    "id" : "njord",
    "type" : "job",
    "size" : "small",
    "subtitle" : "Wordpress webshop",
    "description" : "Njord Nutrition wanted a wordpress-based webshop, where customers would get customized supplements assigned through a test they could take. That just what we made for them.",
    "image" : "njord.jpg",
    "link" : "http://www.mynjord.com/"
  },
  {
    "name" : "Greve Parkour",
    "id" : "greveparkour",
    "type" : "interest",
    "size" : "small",
    "description" : "A small website that was made by a friend of mine and designed by me for the parkour team that we train weekly. The frontend is made using the CSS framework Materializecss, inspired by Google's material design.",
    "image" : "parkour2.jpg",
    "link" : "http://greveparkour.dk/",
    "youtube" : "https://www.youtube.com/user/GreveParkour"
  },
  {
    "name" : "harvi&#173;kampfly.dk",
    "id" : "kampfly",
    "type" : "interest",
    "size" : "small",
    "description" : "Have you ever wondered wheter the danish government has made a descision upon which fighterjet we should acquire? Probably not... but I still made this joke website to communicate whether or not we actually have new fighter jets yet (The answer is no).",
    "image" : "kampfly.jpg",
    "link" : "http://harvikampfly.dk/",
    "repo" : "https://github.com/Arth101/harvikampfly.dk"
  },
  {
    "id" : "stronggeeks",
    "type" : "interest",
    "description" : "My old crew and me did some fun stuff back in the day. You can check out our youtube below.",
    "size" : "small",
    "image" : "stronggeeks.jpg",
    "youtube" : "https://www.youtube.com/user/stronggeeks/videos"
  },
  {
    "name" : "facebook",
    "type" : "social",
    "size" : "tiny",
    "link" : "https://www.facebook.com/andersenghoej"
  },
  {
    "name" : "twitter",
    "type" : "social",
    "size" : "tiny",
    "link" : "https://twitter.com/Arth102"
  },
  {
    "name" : "linkedin",
    "type" : "social",
    "size" : "tiny",
    "link" : "https://www.linkedin.com/in/anders-engh%C3%B8j-2972129b"
  },
  {
    "name" : "github",
    "type" : "social",
    "size" : "tiny",
    "link" : "https://github.com/Arth101"
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
  var repo = "";
  var youtube = "";
  if(box.link != null){
    link = '<a href="' + box.link + '" target="_blank"><i class="fa fa-home links" aria-hidden="true"></i></a>';
  }
  if(box.repo != null){
    repo = '<a href="' + box.repo + '" target="_blank"><i class="fa fa-github links" aria-hidden="true"></i></a>';
  }
  if(box.youtube != null){
    repo = '<a href="' + box.youtube + '" target="_blank"><i class="fa fa-youtube-play links" aria-hidden="true"></i></a>';
  }

  div.innerHTML = '<div class="flex-img" id="' + box.id + '" style="' + boxImage + '"><p>' + box.name + '<span class="subtitle">' + box.subtitle + '</span></p><div class="valign"><p><strong>' + box.name +'</strong><span class="valign-text">' + box.description + '</span>' + link + repo + youtube + '</p></div></div>';

  if(box.type == "personal"){
    document.querySelector('#personal').appendChild(div);
  }
  if(box.type == "job"){
    document.querySelector('#job').appendChild(div);
  }
  if(box.type == "interest"){
    document.querySelector('#interest').appendChild(div);
  }

  if(box.type == "social"){
    div.innerHTML = '<a class="social-links" href="' + box.link +'" target="_blank"><div id="' + box.name + '" class="flex-img social-img"><i class="fa fa-' + box.name + '" aria-hidden="true"></i></div></a>';
    document.querySelector('#social').appendChild(div);
  }
});
