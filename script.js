// Show an alert when button is clicked
document.getElementById("helloBtn").onclick = function() {
  alert("Hello, welcome to my page!");
};

// Change background color on photo hover
let photo = document.getElementById("profile");
photo.onmouseover = function() {
  document.body.style.backgroundColor = "#e6ffe6";
};
photo.onmouseout = function() {
  document.body.style.backgroundColor = "#f0f8ff";
};
