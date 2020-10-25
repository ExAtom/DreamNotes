var notesTest = [
  {
    title: "A nice title of a something",
    content: "Now I have to write something here, but idk what. I think this is enough.",
    date: "2020. 01. 01."
  },
  {
    title: "This is an other title",
    content: "This is the content of the other note. This way, I have two notes in an array and now I can test some stuff with this.",
    date: "2020. 12. 31."
  }
];

localStorage.setItem("notes", JSON.stringify(notesTest));

localStorage.setItem("password", "Abc123456")

var notes = JSON.parse(localStorage.getItem("notes"));
var password = localStorage.getItem("password");

function login() {
  if (document.getElementById("passwordInput").value == password) {
    console.log("Helyes jelszó!")
  }
  else {
    console.log("Helytelen jelszó!")
  }
}