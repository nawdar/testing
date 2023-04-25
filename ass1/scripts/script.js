const changetheme = document.querySelector("#Darktheme");
const sidebar = document.querySelector(".div1");
const wholebar = document.querySelector(".div2")
const textArea = document.querySelector("textarea");
const button = document.querySelectorAll("button");
const textColor = document.querySelectorAll("h3")
function darktheme () {
    wholebar.classList.toggle("darkmode1")
    sidebar.classList.toggle("darkmode");
    textArea.classList.toggle("darkmode");
    for (let item of button) {
      item.classList.toggle("darkmode");
    }
    for (let texts of textColor) {
        texts.classList.toggle("textcolor")
    }

}
changetheme.addEventListener("click", darktheme);


const changeText = () => {
    if (changetheme.textContent === "Dark Theme") {
      changetheme.textContent = "Light Theme";
    } else if (changetheme.textContent === "Light Theme") {
      changetheme.textContent = "Dark Theme";
    }
  };
  changetheme.addEventListener("click", changeText);


const cancel = document.querySelector(".b4");
const save = document.querySelector(".b3");
function cancelBttn() {
  textArea.style.visibility = "hidden";
  cancel.style.visibility = "hidden";
  save.style.visibility = "hidden";
}
cancel.addEventListener("click", cancelBttn);

const NewNote = document.querySelector(".b1");
function NewNoteBttn() {
  textArea.style.visibility = "visible";
  cancel.style.visibility = "visible";
  save.style.visibility = "visible";
}
NewNote.addEventListener("click", NewNoteBttn);


function NewNote2() {
  if  (textArea.visibility = "visible") {
    textArea.value = "";
  } 
  }
  NewNote.addEventListener("click", NewNote2);

  let NotesArray = [
    { title: "note one", body: "this is my first note" },
    { title: "note two", body: "this is my second note" },
  ];
  const NotesArrayElements = document.querySelector("ul");

  function saveBttn() {
    let notesText = textArea.value;
    let titlenote = prompt("save as:");
    if (titlenote === null) {
      return;
    } else {
      NotesArray.push({ title: titlenote, body: notesText });
      const listItem = document.createElement("li");
      listItem.textContent = titlenote;
      NotesArrayElements.appendChild(listItem);
    }
  }
  save.addEventListener("click", saveBttn);

  function savedLists(e) {
    for (let scripts of NotesArray) {
      if (scripts.title == e.target.textContent) {
        textArea.value = scripts.body;
      }
    }
  }
  
  NotesArrayElements.addEventListener("click", savedLists);







