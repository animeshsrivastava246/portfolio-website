import gsap from "gsap";

// Generic function for sliding animation with direction control
const slideIn = (element: HTMLElement, xStart: number, yStart: number, duration: number = 1.5) => {
    if (element) {
        gsap.fromTo(
            element,
            { opacity: 0, x: xStart, y: yStart },
            { opacity: 1, x: 0, y: 0, duration: duration, ease: "power2.out" }
        );
    }
};

// Specific animations
const fadeIn = (element: HTMLElement) => {
    if (element) {
        gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out" });
    }
};

const slideInRight = (element: HTMLElement) => {
    slideIn(element, -90, 0, 2.5); // slide in from the left
};

const slideInUp = (element: HTMLElement) => {
    slideIn(element, 0, 60, 2); // slide up from the bottom
};

const slideInLeft = (element: HTMLElement) => {
    slideIn(element, 60, 0, 1.5); // slide in from the right
};

export { fadeIn, slideInLeft, slideInRight, slideInUp };
