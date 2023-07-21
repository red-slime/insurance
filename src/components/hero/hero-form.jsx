import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./hero-form.scss";

const HeroForm = () => {
	const [product, setProduct] = useState("Auto");
	const handleProduct = (event) => {
		setProduct(event.target.value);
	};

	const [zipcode, setZipcode] = useState("");
	const handleZipcodeChange = (event) => {
		setZipcode(event.target.value);
	};

	const handleSubmit = () => {
		console.log("Product:", product);
		console.log("Zip Code:", zipcode);
	};

	return (
		<>
			<Box sx={{ minWidth: 120, width: "100%" }}>
				<FormControl className="custom-form" sx={{ width: "100%" }}>
					<InputLabel id="demo-simple-select-label" className="custom-label">
						Product
					</InputLabel>
					<Select
						labelId="demo-simple-select"
						id="demo-simple-select"
						className="custom-select"
						value={product}
						label="Product"
						onChange={handleProduct}
					>
						<MenuItem value="Auto">Auto</MenuItem>
						<MenuItem value="Home">Home</MenuItem>
						<MenuItem value="Commercial">Commercial</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "10px",
				}}
			>
				<TextField
					id="zipcode-input"
					label="Zip Code"
					className="custom-zip"
					value={zipcode}
					onChange={handleZipcodeChange}
					fullWidth
					margin="normal"
					inputProps={{
						maxLength: 5,
					}}
				/>

				<Button
					variant="contained"
					disableElevation
					className="custom-button"
					onClick={handleSubmit}
				>
					Start quote
				</Button>
			</Box>
		</>
	);
};

export default HeroForm;
