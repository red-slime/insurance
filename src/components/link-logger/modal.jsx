import Exit from "../../assets/exit.svg";
import XAAANE from "../../assets/zain-mcintire-at-gmail.png";
import "./modal.scss";

function Modal({ handleClose }) {
	return (
		<>
			<div className="blurred"></div>
			<div className="modal">
				<div className="background"></div>
				<button onClick={handleClose}>
					<img src={Exit} alt="close-modal" />
				</button>
				<div className="content">
					<div className="content-container">
						<h2>Clicking around?</h2>
						<p className="first">
							These links don't work, <span>but they could.</span>
						</p>
						<p className="second">
							I'm looking to sell this site to an insurance company in Augusta -
							interested?
						</p>
						<a href="https://xaaane.com/" target="_blank" className="third">
							See what else I've built.
						</a>
						<p className="fourth">Full sites include:</p>
						<p className="fifth">
							Hosting, form handling, analytics, seo, security, backups, email -
							and more.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
