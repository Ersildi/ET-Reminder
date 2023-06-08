let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

function newTask() {
  // Kemi krijuar nje thirrje js qe krijon nje element liste
  let li = document.createElement("li");
  // Marim elmentin qe kemi vendosur ne input
  let inputValue = document.getElementById("toDoInputBox").value;
  // Popullojme listen
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  // Validim qe mos kriojme elemente bosh
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  // Pranon vleren
  document.getElementById("toDoInputBox").value = "";

  // Krijohet spani
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Per te fshire tasket
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
