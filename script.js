function particles() {
    particlesJS("particles-js", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"], // Add your desired colors
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      });
}

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

