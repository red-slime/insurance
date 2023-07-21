import "./footer.scss";

const Footer = () => {
	return (
		<>
			<section className="footer-section">
				<div className="footer-container">
					<div className="mobile-logo">
						<h3>AFFORDABLE</h3>
					</div>
					<div className="footer-menu">
						<div className="menu-item">
							<h3>Contact</h3>
							<a href="#fake1">Contact Us</a>
							<a href="#fake2">File a Claim</a>
						</div>
						<div className="menu-item">
							<h3>Quick links</h3>
							<a href="#fake3">Pay Insurance Bill</a>
							<a href="#fake4">Enroll in Autopay</a>
						</div>
						<div className="menu-item">
							<h3>About</h3>
							<a href="#fake5">About Affordable Insurance</a>
							<a href="#fake6">Articles & Blogs</a>
						</div>
						<div className="menu-item">
							<h3>Careers</h3>
							<a href="#fake7">Careers at Affordable</a>
							<a href="#fake8">Own your business</a>
						</div>
					</div>
					<div className="footer-socials">
						<h4 className="mobile-follow">Follow Us</h4>
						<ul>
							<li>Follow Us</li>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
							<li>LinkedIn</li>
						</ul>
					</div>
				</div>
				<div className="copyright">
					<p>
						© No Copyright 2023, Fake Website - Designed & Developed by{" "}
						<a href="mailto:zainmcintire@gmail.com" className="real-link">
							Xane McIntire
						</a>{" "}
						using{" "}
						<a
							href="https://react.dev/"
							className="real-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
