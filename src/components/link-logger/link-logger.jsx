import React, { useEffect, useState } from "react";
import Modal from "./modal.jsx";

function LinkLogger() {
	const [modalContent, setModalContent] = useState(null);

	const handleClose = () => setModalContent(null);

	useEffect(() => {
		function handleLinkClick(event) {
			const target = event.target;

			if (target.tagName === "A" && !target.classList.contains("real-link")) {
				event.preventDefault(); // prevent navigation
				setModalContent(target.href);
			}
		}

		document.addEventListener("click", handleLinkClick);

		return () => {
			document.removeEventListener("click", handleLinkClick);
		};
	}, []);

	return modalContent ? <Modal handleClose={handleClose} /> : null;
}

export default LinkLogger;
