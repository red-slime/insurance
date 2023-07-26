import { useState, useEffect } from "react";
import LocationIcon from "../../assets/location-dot-solid.svg";
import PhoneIcon from "../../assets/phone-solid.svg";
import "./location.scss";

const LocationComponent = () => {
	const [location, setLocation] = useState({
		latitude: null,
		longitude: null,
		city: "Location",
		state: "disabled",
	});

	const getCityName = async (latitude, longitude) => {
		const response = await fetch(
			`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
		);

		const data = await response.json();
		setLocation((prevState) => ({
			...prevState,
			city: data.address.city || data.address.town || data.address.village,
			state: data.address.state,
		}));
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setLocation({ latitude, longitude });
				getCityName(latitude, longitude);
			},
			(error) => {
				// console.log(error);
				setLocation({
					latitude: null,
					longitude: null,
					city: "Augusta",
					state: "GA",
				});
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			}
		);
	}, []);

	return (
		<div className="graybar">
			<div className="gray-container">
				<div className="gray-location">
					<img
						src={LocationIcon}
						alt="location-icon"
						style={{ height: "14px" }}
					/>
					<p>
						{location.city}, {location.state}
					</p>
				</div>
				<div className="gray-phone">
					<img src={PhoneIcon} alt="phone-icon" style={{ height: "14px" }} />
					<a href="tel:7062624444">706.262.4444</a>
				</div>
			</div>
		</div>
	);
};

export default LocationComponent;
