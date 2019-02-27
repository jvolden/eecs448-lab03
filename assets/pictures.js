// Rotate pictures

function setPicture(n) {
  let pictureNumber = document.getElementById("picture")
  let pictureText = document.getElementById("pictureText")
  let nextFile = parseInt(pictureNumber.src.charAt(pictureNumber.src.length - 5)) + n

  if (nextFile == 0) { nextFile = 5 }
  if (nextFile == 6) { nextFile = 1 }

  pictureNumber.src = "images/picture" + nextFile + ".jpg"
  pictureText.innerHTML = "images/picture" + nextFile + ".jpg"
}
