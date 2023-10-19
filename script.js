const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must enter you task!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDate();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDate();
  }
});

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
