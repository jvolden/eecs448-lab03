
// Rotate pictures

function nextPicture() {
  let pictureNumber = document.getElementById("picture")
  let pictureText = document.getElementById("pictureText")
  let nextFile = parseInt(pictureNumber.src.charAt(pictureNumber.src.length - 5)) + 1
  if (nextFile == 6) {
    nextFile = 1
  }

  pictureNumber.src = "images/picture" + nextFile + ".jpg"
  pictureText.innerHTML = "images/picture" + nextFile + ".jpg"
}


function previousPicture() {
  let pictureNumber = document.getElementById("picture")
  let pictureText = document.getElementById("pictureText")
  let nextFile = parseInt(pictureNumber.src.charAt(pictureNumber.src.length - 5)) - 1
  if (nextFile == 0) {
    nextFile = 5
  }

  pictureNumber.src = "images/picture" + nextFile + ".jpg"
  pictureText.innerHTML = "images/picture" + nextFile + ".jpg"
}
