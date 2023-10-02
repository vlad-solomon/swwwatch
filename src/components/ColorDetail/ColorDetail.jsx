import "./ColorDetail.scss";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import Toast from "../Toast/Toast";
import Copy from "../../assets/img/copy.svg";

function ColorDetail({ type, values, pretty }) {
	return (
		<div className="color-detail__wrapper">
			<div className="color-detail">
				<div className="color-detail__type">{type}</div>
				<div className="color-detail__values">{Array.isArray(values) ? values.map((value, index) => <span key={index}>{value}</span>) : <span>{values}</span>}</div>
			</div>
			<Button
				icon={Copy}
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
			/>
		</div>
	);
}

export default ColorDetail;
