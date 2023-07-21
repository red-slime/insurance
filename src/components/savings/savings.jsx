import "./savings.scss";
import familyCar from "../../assets/best-family-cars.jpg";

const Savings = () => {
	return (
		<>
			<section className="savings-section">
				<div className="savings-container">
					<div className="question">
						<h2>
							How can <span className="text-logo">affordable</span> save me
							money?
						</h2>
						<p className="subheading">
							When you work with our team, you get the protection you need at an
							affordable rate.
						</p>
						<div className="car-container">
							<img src={familyCar} alt="car" />
						</div>
					</div>
					<div className="answer">
						<div className="card">
							<h3>Drive & Save</h3>
							<p>Drive your discounts up to 30%.</p>
							<a href="#save_1" className="red-link">
								Learn more about safe driving
							</a>
						</div>
						<div className="card">
							<h3>Steer Clear</h3>
							<p>Safe-driving young adults can save 20%.</p>
							<a href="#save_2" className="red-link">
								Check out Steer Clearing
							</a>
						</div>
						<div className="card">
							<h3>Auto Discounts</h3>
							<p>See the offers that help you budget.</p>
							<a href="#save_3" className="red-link">
								Save money with auto discounts
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Savings;
