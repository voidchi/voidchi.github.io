// javaScript code for GA SEI APP

document.getElementById('date').innerHTML = new Date().toDateString();

// for each button, a function
// gets the display status of the respective element and changes it
// unsure why it needs an initial click to "warm up"

function showBio() {
  var bio = document.getElementById("myBio");
  var contact = document.getElementById("myContact");
  if (bio.style.display == "none") {
    bio.style.display = "block";
    contact.style.display = "none"
  }
  else {
    bio.style.display = "none";
  }
}

function showContact() {
  var bio = document.getElementById("myBio");
  var contact = document.getElementById("myContact");
  if (contact.style.display == "none") {
    contact.style.display = "block";
    bio.style.display = "none"
  }
  else {
    contact.style.display = "none";
  }
}
