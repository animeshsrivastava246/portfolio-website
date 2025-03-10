import VanillaTilt from "vanilla-tilt";

export const applyTilt = (element: HTMLElement) => {
    if (element) {
        VanillaTilt.init(element, {
            max: 15,      // Max tilt rotation
            speed: 300,   // Transition speed
            glare: true,  // Adds reflection glare
            "max-glare": 0.5, // Glare intensity
        });
    }
};
