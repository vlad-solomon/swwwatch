import "./Modal.scss";
import Button from "../Button/Button";

//todo fade out (and shrink) the other button when one of them is hovered

export default function Modal({ head = "Modal head", content = "Modal content", controls }) {
	return (
		<div className="modal">
			<div className="modal__head">{head}</div>
			<div className="modal__body">
				<span className="modal__content">{content}</span>
				<div className="modal__controls">
					{controls?.map(({ text, onClick, intent }) => (
						<Button key={text} text={text} onClick={onClick} intent={intent} />
					))}
				</div>
			</div>
		</div>
	);
}
