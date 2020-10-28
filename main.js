let notes = JSON.parse(localStorage.getItem("notes"));
if (notes == null) notes = [];
let password = localStorage.getItem("password");
sortNotes();

function sortNotes() {
  notes.sort((a, b) => {
    return b.date - a.date;
  });
}

console.log(notes);

function setSetting(setting, value) {
  switch (setting) {
    case "password":
      password = value;
      localStorage.setItem(setting, value);
      break;
    case "notes":
      notes[notes.length] = value;
      localStorage.setItem("notes", JSON.stringify(notes));
      sortNotes();
      break;
  }
}

function toggleClass(id, className) {
  document.getElementById(id).classList.toggle(className);
}

function loadLogin() {
  if (password == null) toggleClass("body", "no-account");
}

function login() {
  if (document.getElementById("passwordInput").value == password) {
    loadSite(true);
  } else if (password == null) {
    setSetting("password", document.getElementById("newPasswordInput").value);
    loadSite(true);
  }
}

function loadSite(loginVisible) {
  let siteContent = "";
  if (notes.length == 0) siteContent = "No notes yet";
  else {
    notes.forEach((i) => {
      // let currentDate = new Date(i.date);
      // siteContent += `<div>${i.title}: ${i.content} - on${currentDate.getFullYear()}. ${currentDate.getMonth()}. ${currentDate.getDay()}.</div>`
      let d = new Date(i.date);
      siteContent += `<div>${i.title}: ${i.content} - ${d.getMonth()}/${d.getDate()}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</div>`;
    });
  }
  if (loginVisible) toggleClass("body", "hide-login");
  document.getElementById("notes").innerHTML = siteContent;
}

function addNote() {
  document.getElementById("note").value = "";
  document.getElementById("title").value = "";
  toggleClass("body", "show-editor");
}

function closeNote() {
  let noteTitle = document.getElementById("title").value;
  let note = document.getElementById("note").value;
  let d = new Date();
  console.log("Title: " + title);
  console.log("Note: " + note);
  if (noteTitle != "" && note != "") {
    setSetting("notes", {
      title: noteTitle,
      content: note,
      date: d.getTime()
    });
  }
  toggleClass("body", "show-editor");
  loadSite(false);
}

function openNote(title) {}
