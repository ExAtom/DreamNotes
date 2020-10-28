let notesTest = [
  {
    title: "first",
    content:
      "Now I have to write something here, but idk what. I think this is enough.",
    date: "1/1/2020",
  },
  {
    title: "fourth",
    content: "asd",
    date: "12/31/2020",
  },
  {
    title: "second",
    content: "asd",
    date: "2/31/2020",
  },
  {
    title: "third",
    content: "asd",
    date: "4/1/2020",
  },
];
// localStorage.setItem("notes", JSON.stringify(notesTest));

let notes = JSON.parse(localStorage.getItem("notes"));
let password = localStorage.getItem("password");

notes.sort((a, b) => {
  let date1 = new Date(a.date).getTime();
  let date2 = new Date(b.date).getTime();
  return date1 - date2;
});

function setSetting(setting, value) {
  switch (setting) {
    case "password":
      password = value;
      break;
    case "notes":
      notes = value;
      break;
  }
  localStorage.setItem(setting, value);
}

function toggleClass(id, className) {
  document.getElementById(id).classList.toggle(className);
}

function loadLogin() {
  if (password == null) toggleClass("login", "no_account");
}

function login() {
  if (document.getElementById("passwordInput").value == password) {
    loadSite();
  } else if (password == null) {
    setSetting("password", document.getElementById("newPasswordInput").value);
    loadSite();
  }
}

function loadSite() {
  let siteContent = "";
  if (notes == null) siteContent = "No notes yet";
  else {
    notes.forEach((i) => {
      // let currentDate = new Date(i.date);
      // siteContent += `<div>${i.title}: ${i.content} - on ${currentDate.getFullYear()}. ${currentDate.getMonth()}. ${currentDate.getDay()}.</div>`
      siteContent += `<div>${i.title}: ${i.content} - on ${i.date}</div>`;
    });
  }
  toggleClass("body", "hide-login");
  document.getElementById("notes").innerHTML = siteContent;
}

function addNote() {
  toggleClass("body", "show-editor");
}
