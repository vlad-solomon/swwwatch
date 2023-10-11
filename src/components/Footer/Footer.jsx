import "./Footer.scss";
import Logo from "../../assets/img/logo.svg";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__inner">
				<img src={Logo} alt="logo" />
				<span>
					Created by{" "}
					<a href="https://github.com/vlad-solomon" target="_blank" referrerPolicy="no-referrer">
						Vlad Solomon 🡥
					</a>
				</span>
			</div>
		</div>
	);
}
