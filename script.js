console.log("world");

document.querySelectorAll(".education").addEventListener("click", function() {
  console.log("clicked next");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".close-overlay").addEventListener("click", function() {
  document.querySelector(".overlay").style.display = "none";
});
