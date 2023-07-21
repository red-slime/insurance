import carIcon from "../../assets/car-side-solid.png";
import bankIcon from "../../assets/building-columns-solid.png";
import moneyIcon from "../../assets/money-bill-trend-up-solid.png";
import "./three.scss";

const Three = () => {
	return (
		<>
			<section className="three-section">
				<div className="three-container">
					<div className="three">
						<h2>Thinking of you</h2>
						<p className="subheading">
							Our approach to developing products and solutions has always been
							focused on the future, anticipating and adapting to your evolving
							needs. This commitment holds even greater significance in the
							present. Allow us to demonstrate how we prioritize being there for
							you in critical moments.
						</p>
						<div className="cards-container">
							<div className="three-card">
								<div className="three-icon">
									<img src={carIcon} alt="car-icon" />
								</div>
								<div className="three-info">
									<h3>Helping your family</h3>
									<p>
										Explore the wide range of products to help defend what
										you’ve worked so hard to build.
									</p>
									<a href="#save_4" className="red-link">
										Family insurance
									</a>
								</div>
							</div>
							<div className="three-card">
								<div className="three-icon">
									<img src={bankIcon} alt="car-icon" />
								</div>
								<div className="three-info">
									<h3>Banking on time</h3>
									<p>
										Meet our third-party-provided products that allow you to
										bank when, where and how you want.
									</p>
									<a href="#save_5" className="red-link">
										Banking alliances
									</a>
								</div>
							</div>
							<div className="three-card">
								<div className="three-icon">
									<img src={moneyIcon} alt="car-icon" />
								</div>
								<div className="three-info">
									<h3>Plan your future</h3>
									<p>
										Get a head start with mutual funds, annuities, educational
										savings and retirement planning.
									</p>
									<a href="#save_6" className="red-link">
										Investment services
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Three;
