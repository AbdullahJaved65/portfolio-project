// const allID = document.getElementById("all");
// const natureID = document.getElementById("nature");
// const architectureID = document.getElementById("architecture");
// const peopleID = document.getElementById("people");

// const imageContainer = document.querySelector(".image-container");
// const natureImage = document.querySelectorAll(".nature");
// const architectureImage = document.querySelectorAll(".architecture");
// const peopleImage = document.querySelectorAll(".people");

// allID.addEventListener("click", () => {
//   imageContainer.style.display = "block";
// });

// natureID.addEventListener("click", () => {
//   imageContainer.style.display = "none";
//   natureImage.forEach((img) => {
//     img.style.display = "block";
//   });
// });

// architectureID.addEventListener("click", () => {
//   imageContainer.style.display = "none";
//   architectureImage.forEach((img) => {
//     img.style.display = "block";
//   });
// });

// peopleID.addEventListener("click", () => {
//   imageContainer.style.display = "none";
//   peopleImage.forEach((img) => {
//     img.style.display = "block";
//   });
// });
// i;

filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
