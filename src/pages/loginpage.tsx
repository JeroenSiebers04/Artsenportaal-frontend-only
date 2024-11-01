import React, { useEffect, useState } from "react";
import "./styles/stylesheetloginpage.css";
import ForgotPasswordPopup from "./forgotpasswordpopup"; // Zorg ervoor dat dit pad correct is

interface Props {
	setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ setHideNavbar }) => {
	const [showPopup, setShowPopup] = useState<boolean>(false);
	const [personel_number, setPersonelNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		setHideNavbar(true);

		return () => {
			setHideNavbar(false);
		};
	}, [setHideNavbar]);

	const openPopup = () => {
		setShowPopup(true);
	};

	const closePopup = () => {
		setShowPopup(false);
	};

	const handleLogin = () => {
		// Placeholder voor login functionaliteit zonder backend
		if (personel_number && email && password) {
			// Simuleer een succesvolle login
			window.location.href = "/dashboard";
		} else {
			setError("Vul alstublieft alle velden in");
		}
	};

	return (
		<div className="login-page">
			<div className="login-form">
				<div className="main-login-form">
					<h1>Inloggen</h1>
					<div>
						<div className="form-group">
							<input
								type="text"
								id="personnel-number"
								name="personnel-number"
								placeholder="Personeels nummer"
								onChange={(e) => setPersonelNumber(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								id="login-email"
								name="login-email"
								placeholder="E-mail"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Wachtwoord"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-group action-group">
							<button id="login-button" onClick={handleLogin}>
								Log in
							</button>
							<a id="password-forgotten-button" href="#" onClick={openPopup}>
								Wachtwoord vergeten?
							</a>
						</div>
						{error && <p className="error-label">{error}</p>}
					</div>
				</div>
				<div className="footer">
					<p>Mede mogelijk gemaakt door</p>
					<div className="logos">
						<img
							src="/images/umcUtrechtLogo.png"
							alt="UMC Utrecht Wilhelmina Kinderziekenhuis"
						/>
						<img src="/images/JDBLogo.png" alt="JDB logo" />
					</div>
				</div>
			</div>
			<div className="image-container">
				<img
					src="/images/loginImage.png"
					alt="Group of people in orange hoodies"
				/>
			</div>
			{showPopup && <ForgotPasswordPopup onClose={closePopup} />} {/* Show popup if showPopup is true */}
		</div>
	);
};

export default LoginPage;
