import { useState, useEffect } from "react";
import LocationComponent from "../location/location.jsx";
import Hamburger from "../../assets/hamburger.svg";
import Exit from "../../assets/exit.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedin-in.svg";
import "./header.scss";
//import Logo from "../../assets/logo.png";

const Header = () => {
	/////////////////////////
	/* Start mobile menu */
	///////////////////////

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const setBodyStyle = () => {
			document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		};

		const handleResize = () => {
			if (window.innerWidth > 768) {
				closeMenu();
			}
			setBodyStyle();
		};

		window.addEventListener("resize", handleResize);
		setBodyStyle();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleHamburgerClick = () => {
		toggleMenu();
	};

	const handleLinkClick = () => {
		closeMenu();
	};

	/////////////////////////
	/* End mobile menu */
	///////////////////////

	return (
		<>
			<LocationComponent />
			<section className="nav-section">
				<div className="nav-container">
					<div className="logo">
						{/* <img src={Logo} alt="logo" /> */}
						<h3>AFFORDABLE</h3>
					</div>
					<div className="links">
						<ul>
							<li>
								<a href="#insurance">Insurance</a>
							</li>
							<li>
								<a href="#locations">Locations</a>
							</li>
							<li>
								<a href="#resources">Resources</a>
							</li>
							<li>
								<a href="#careers">Careers</a>
							</li>
							<li>
								<a href="tel:7062624444">CALL NOW</a>
							</li>
						</ul>
						<img
							className="hamburger"
							src={isMenuOpen ? Exit : Hamburger}
							alt="hamburger-menu"
							onClick={handleHamburgerClick}
							style={{
								transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
							}}
						/>
					</div>
				</div>
			</section>
			<section
				className="mobile-menu"
				style={{ display: isMenuOpen ? "block" : "none" }}
			>
				<div className="mobile-links">
					<ul>
						<li>
							<a href="#insurance">Insurance</a>
						</li>
						<li>
							<a href="#locations">Locations</a>
						</li>
						<li>
							<a href="#resources">Resources</a>
						</li>
						<li>
							<a href="#careers">Careers</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#get-quote">Get a Quote</a>
						</li>
						<li>
							<a href="#file-claim">File a Claim</a>
						</li>
						<li>
							<a href="#make-payment">Make a Payment</a>
						</li>
					</ul>
					<div className="mobile-social-icon-container">
						<img src={Facebook} alt="facebook-icon" />
						<img src={Twitter} alt="twitter-icon" />
						<img src={Instagram} alt="instagram-icon" />
						<img src={LinkedIn} alt="linkedin-icon" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
