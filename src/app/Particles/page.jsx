'use client'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const App = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",  
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 80,
                                    duration: 10.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#FFD700",  
                            },
                            links: {
                                color: "#FFD700",  
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 0,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000, 
                                },
                                value: 10,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 7, max: 5 },  
                            },
                            shadow: {
                                enable: true,
                                color: {
                                    value: "#FFD700",  
                                },
                                blur: 55,  
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default App;
