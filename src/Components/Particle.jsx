import Particles from "react-particles"
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
function Particle(){

    const particlesInit = useCallback(async engine => {
        console.log(engine);
       
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            name: "Star",
            "fullScreen":{
                "enable":true,
                "zIndex":-1
            },
            particles: {
                number: {
                    value: 7,
                    density: {
                        enable: false,
                    },
                },
                color: {
                    value: "#fff",
                },
                shape: {
                    type: "star",
                    options: {
                        star: {
                            sides: 5,
                        },
                    },
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: 4,
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360,
                    },
                    direction: "clockwise",
                    animation: {
                        enable: true,
                        speed: 5,
                        sync: false,
                    },
                },
                links: {
                    enable: true,
                    distance: 600,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: 2,
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                  
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1,
                            color: "#f00",
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        color: "#ffff00",
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2,
                    },
                },
            },
            background: {
                color: "#111",
            },
        }}
        />
    )
}

export default Particle