const getForm = document.querySelector(".login-form");
const getInputEmail = document.querySelector('input[name ="email"]');
const getInputPassword = document.querySelector('input[name ="password"]');

getForm.addEventListener("input", (event) => {
  const value = event.target.value.trim();
});

getForm.addEventListener("submit", (s) => {
  s.preventDefault();

  const email = getInputEmail.value.trim();
  const password = getInputPassword.value.trim();

  if(!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const userInfo = { email, password };
  console.log("User information", userInfo);
  form.reset()
  
});
