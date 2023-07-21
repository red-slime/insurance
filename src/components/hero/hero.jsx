import HeroForm from "./hero-form.jsx";
import BMW from "../../assets/bmw.png";
import "./hero.scss";

const Hero = () => {
	return (
		<>
			<section className="hero-section">
				<div className="hero">
					<div className="info-c">
						<div className="info">
							<h2>
								There's low, lower, <br /> and {""}
								<span>affordable</span>
							</h2>
							<span className="secondary">Start an insurance quote online</span>
							<HeroForm />
							<div className="actions">
								<h4>Quick actions</h4>
								<ul>
									<li>File a Claim</li>
									<li>Make a Payment</li>
								</ul>
							</div>
							<a href="tel:7062624444" className="secondary question">
								Have a question? Call (706) 262-4444
							</a>
						</div>
					</div>
					<div className="image-c">
						<div className="hero-image">
							<img src={BMW} alt="BMW" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
