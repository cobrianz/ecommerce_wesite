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