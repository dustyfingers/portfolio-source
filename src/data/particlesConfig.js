const particlesConfig = {
    fps_limit: 32,
    particles: {
        number: {
            value: 25
        },
        size: {
            value: 2
        },
        color: "#0E5159",
        shape: {
            type: "circle",
            stroke: {
                width: 3,
                color: "#0E5159"
            }
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#0E5159",
            opacity: 0.6,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: true,
        }
    },

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 2
            },
            remove: {
                particles_nb: 2
            }
          }
    }
};

export default particlesConfig;