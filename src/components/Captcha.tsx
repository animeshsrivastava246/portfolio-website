import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaRef {
	reset: () => void;
}

interface CaptchaProps {
	onVerify: (token: string | null) => void;
}

const siteKey = (import.meta as any).env.VITE_RECAPTCHA_SITE_KEY;

const Captcha = forwardRef<CaptchaRef, CaptchaProps>(({ onVerify }, ref) => {
	const captchaRef = useRef<ReCAPTCHA | null>(null);
	const [verified, setVerified] = useState(false);

	// Expose reset method to parent components
	useImperativeHandle(ref, () => ({
		reset: () => {
			if (captchaRef.current) {
				captchaRef.current.reset();
				setVerified(false);
				onVerify(null);
			}
		},
	}));

	const handleChange = (token: string | null) => {
		setVerified(!!token);
		onVerify(token);
	};

	return (
		<div className="flex justify-center">
			{siteKey ? (
				<ReCAPTCHA ref={captchaRef} sitekey={siteKey} onChange={handleChange} />
			) : (
				<p className="text-red-600">reCAPTCHA site key is missing</p>
			)}
		</div>
	);
});

export default Captcha;
