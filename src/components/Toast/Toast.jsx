import "./Toast.scss";
import { toast, useToasterStore } from "react-hot-toast";
import Close from "../../assets/img/close.svg";
import { useEffect } from "react";

const TOAST_LIMIT = 3;

export default function Toast({ children, id }) {
	const { toasts } = useToasterStore();
	useEffect(() => {
		toasts
			.filter((t) => t.visible)
			.filter((_, i) => i >= TOAST_LIMIT)
			.forEach((t) => toast.dismiss(t.id));
	}, [toasts]);

	return (
		<>
			{children}
			<img src={Close} alt="close" onClick={() => toast.dismiss(id)} />
		</>
	);
}
