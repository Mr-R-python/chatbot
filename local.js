function setup() {
	chatbot.loadFiles(['local.rive']);
}

window.onload = setup;


function myFunction() {
  var checkBox = document.getElementById("show");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display="block";
  } else {
     text.style.display = "none";
  }
}


