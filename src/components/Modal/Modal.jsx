import "./Modal.scss";

//todo fade out (and shrink) the other button when one of them is hovered

export default function Modal({ head = "Modal head", content = "Modal content", children }) {
	return (
		<div className="modal">
			<div className="modal__head">{head}</div>
			<div className="modal__body">
				<span className="modal__content">{content}</span>
				<div className="modal__controls">{children}</div>
			</div>
		</div>
	);
}
