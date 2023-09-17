import "./Toast.scss";
import { toast } from "react-hot-toast";
import { ReactComponent as Close } from "../../img/close.svg";

export default function Toast({ children, id }) {
	return (
		<>
			{children}
			<Close onClick={() => toast.dismiss(id)} />
		</>
	);
}
