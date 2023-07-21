import hiringIcon from "../../assets/hiring-icon.png";
import "./hiring.scss";

const Hiring = () => {
	return (
		<>
			<section className="hiring-section">
				<div className="hiring-container">
					<div className="hiring-image">
						<img src={hiringIcon} alt="hiring" />
					</div>
					<div className="hiring-info">
						<h2>We're hiring, join our team</h2>
						<p className="subheading">
							Find a job with our corporate teams or make the decision to become
							a an independent contractor agent.
						</p>
						<a href="#save_7" className="red-link">
							Choose your next career path
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hiring;
