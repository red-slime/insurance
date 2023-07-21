import { useRef, useEffect } from "react";
import aVideo from "../../assets/affordable.mp4";
import progressive from "../../assets/progressive.svg";
import gainsco from "../../assets/gainsco.png";
import assurance from "../../assets/assurance-america.png";
import "./about.scss";

const About = () => {
	const videoRef = useRef(1);
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.currentTime = 1;
		}
	}, []);
	return (
		<>
			<section className="about-section">
				<div className="about-container">
					<div className="about-info">
						<h2>
							Serving Georgia and South Carolina{" "}
							<span className="underlined">Over 50 Years!</span>
						</h2>
						<p>
							Our knowledgeable and skilled staff is here to provide you with
							detailed information about our insurance options, ensuring you
							find the perfect fit for your needs. Rest assured that as soon as
							you purchase insurance with us, you'll be instantly covered. For
							friendly and reliable service, feel free to visit any of our 13
							convenient locations!
						</p>
						<div className="btn-con">
							<a className="button" href="#quote">
								Get A Quote
							</a>
							<a className="button-secondary" href="#learn">
								Learn More
							</a>
						</div>
					</div>
					<div className="about-video">
						<video ref={videoRef} controls>
							<source src={aVideo} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
				{/* <div className="carriers">
					<img src={progressive} alt="progressive" />
					<img src={gainsco} alt="gainsco" />
					<img src={assurance} alt="america" />
				</div> */}
			</section>
		</>
	);
};

export default About;
