// Change border and background colors.

function setCSS()
{
    let borderRed = document.getElementById("borderRed").value
    let borderGreen = document.getElementById("borderGreen").value
    let borderBlue = document.getElementById("borderBlue").value
    let backgroundRed = document.getElementById("backgroundRed").value
    let backgroundGreen = document.getElementById("backgroundGreen").value
    let backgroundBlue = document.getElementById("backgroundBlue").value

    let borderColor = "rgb(" + 
                     borderRed + 
                     "," + borderGreen + 
                     "," + borderBlue + ")"

    let backgroundColor = "rgb(" + 
                           backgroundRed + 
                           "," + backgroundGreen + 
                           "," + backgroundBlue + ")"

    console.log(borderColor, backgroundColor)

    let elements = document.getElementsByClassName("lorem")
    console.log(elements)
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "2px solid " + borderColor
        elements[i].style.backgroundColor = backgroundColor
    }

}
