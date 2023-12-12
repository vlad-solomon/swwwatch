import "./Toast.scss";
import { toast } from "react-hot-toast";
import Close from "../../assets/img/close.svg";

export default function Toast({ children, id }) {
	return (
		<>
			{children}
			<img src={Close} alt="close" onClick={() => toast.dismiss(id)} />
			&times;
		</>
	);
}
