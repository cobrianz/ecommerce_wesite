

  /* form */

  const signup = document.querySelector('.form__signup');
  const signin = document.querySelector('.form__login');
  const signupBtn = document.querySelectorAll('.button__light');
  const signinBtn = document.querySelectorAll('.button__light');


function toggleForm() {
  signup.style.right = "0%";
  signin.style.left = "-100%";
}
function toggleform() {
  signin.style.left = "50%";
  signup.style.right = "-100%";
}

function redirect() {
  Window.location.href = "index.html";
}

