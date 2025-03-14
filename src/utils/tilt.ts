import VanillaTilt from "vanilla-tilt";

export function applyTilt(el: HTMLElement) {
	if (el) {
		VanillaTilt.init(el, {
			max: 15,
			speed: 400,
			glare: true,
			"max-glare": 0.2,
		});
	}
}
