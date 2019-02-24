
// Password verification

function verifyPassword()
{
  let result = document.getElementById("result")
  let password1 = document.getElementById("password1").value
  let password2 = document.getElementById("password2").value

  if (password1.length < 8) {
    result.innerHTML = "Password is too short."
  } else {
    if (password1 == password2) {
      result.innerHTML = "Passwords match."
    } else {
      result.innerHTML = "Passwords do not match."
    }
  }
}
