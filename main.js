const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

password.addEventListener("input", () => {
  console.log("a");
  if(confirmPassword.value == password.value) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
  else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  }
})

confirmPassword.addEventListener("input", () => {
  console.log("a");
  if(confirmPassword.value == password.value) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
  else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  }
})