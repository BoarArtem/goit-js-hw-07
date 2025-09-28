const getForm = document.querySelector(".login-form");
const getInputEmail = document.querySelector('input[name ="email"]');
const getInputPassword = document.querySelector('input[name ="password"]');

getForm.addEventListener("input", (event) => {
  const value = event.target.value.trim();
});

getForm.addEventListener("submit", (s) => {
  s.preventDefault();

  const getUserEmail = getInputEmail.value.trim();
  const getUserPassword = getInputPassword.value.trim();

  if (getUserEmail && getUserPassword) {
    const userInfoObject = { getUserEmail, getUserPassword };
    console.log("User information:", userInfoObject);
    getForm.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
