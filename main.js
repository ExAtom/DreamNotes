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

notesTest.sort((a, b) => {
  let date1 = new Date(a.date).getTime();
  let date2 = new Date(b.date).getTime();
  return date1 - date2;
});
localStorage.setItem("password", "1234");

let notes = JSON.parse(localStorage.getItem("notes"));
let password = localStorage.getItem("password");

function login() {
  if (document.getElementById("passwordInput").value == password) {
    loadSite();
  }
  else {
    console.log("Helytelen jelszó!");
  }
}

function loadSite() {
  let siteContent = "";
  notesTest.forEach(i => {
    siteContent += `<div>${i.title}: ${i.content} - on ${i.date}</div>`
  });
  document.getElementById("content").innerHTML = siteContent;
}
