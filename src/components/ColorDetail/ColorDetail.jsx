import "./ColorDetail.scss";
import Button from "../Button/Button";
import { ReactComponent as Copy } from "../../img/copy.svg";
import toast from "react-hot-toast";
import Toast from "../Toast/Toast";

function ColorDetail({ type, values, pretty }) {
	return (
		<div className="color-detail__wrapper">
			<div className="color-detail">
				<div className="color-detail__type">{type}</div>
				<div className="color-detail__values">{Array.isArray(values) ? values.map((value, index) => <span key={index}>{value}</span>) : <span>{values}</span>}</div>
			</div>
			<Button
				shape="square"
				tooltip={
					<>
						<span>{pretty}</span>
						<span>Click to copy</span>
					</>
				}
				onClick={() => {
					navigator.clipboard.writeText(pretty);
					toast(({ id }) => (
						<Toast id={id}>
							<span>
								Copied <span className="toast__pretty">{pretty}</span> to clipboard
							</span>
						</Toast>
					));
				}}
			>
				<Copy />
				{/* //todo ^ replace this with icon prop */}
			</Button>
		</div>
	);
}

export default ColorDetail;
