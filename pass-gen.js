const passInput = document.querySelector("#password-inp");
const copyPass = document.querySelector(".copy-pass");
const reloadBtn = document.querySelector("#reload-btn");

//generates password on page load
generatePassword();

// generates new password when reload icon is clicked
reloadBtn.addEventListener("click", function () {
  passInput.value = "";
  generatePassword();
  if (passInput.value === "") {
    passInput.value = "choose options below";
  }
});

// copies password to clipboard
copyPass.addEventListener("click", function () {
  navigator.clipboard.writeText(passInput.value);

  //notifies that password has been copied
  copyPass.innerText = "Copied!";
  setTimeout(function () {
    copyPass.innerText = "Copy Password";
  }, 1000);
});

// password generator
function generatePassword() {
  // length of the password
  var length = 20,
    charset = "",
    password = "";

  // options if checked
  if (document.getElementById("lowercase").checked) {
    charset = charset + "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("uppercase").checked) {
    charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("symbols").checked) {
    charset = charset + "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  if (document.getElementById("numbers").checked) {
    charset = charset + "0123456789";
  }

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  passInput.value = password;
}
