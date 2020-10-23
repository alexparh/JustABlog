import React, { SyntheticEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import {
	Span,
	Header,
	AuthContainer,
	AlertContainer,
	SuccessfulMessageContainer
} from "../../shared/styledComponents/styledComponents";
import { REGISTER } from "../../graphql/mutation";

interface RegisterResult {
	register: string;
}

interface Register {
	name: string;
	email: string;
	password: string;
}

const RegisterPage = () => {
	const [regStatus, setRegStatus] = useState(false);
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [register] = useMutation<{ register: RegisterResult }, { userInput: Register }>(
		REGISTER,
		{ variables: { userInput: { name, email, password } } }
	);

	const onSubmitForm = (event: SyntheticEvent) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords must match each other");
			return;
		} else {
			setError("");
		}
		register()
			.then((response) => {
				const data = response.data;
				if (!data || !data.register) {
					setError("Something went wrong... Try again.");
					return;
				}
				setRegStatus(true);
			})
			.catch((err) => setError(err.toString().slice(7)));
	};

	return (
		<>
			{regStatus ? (
				<SuccessfulMessageContainer>
					<Header>Congratulations, your account has been successfully created.</Header>
					<Link to="/signIn" className="lime-text">
						<Span underline={true} size="30px">
							Continue to login
						</Span>
					</Link>
				</SuccessfulMessageContainer>
			) : (
				<AuthContainer>
					<Header>Join Just a blog</Header>
					<form className="col s12" onSubmit={onSubmitForm}>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="name"
									type="text"
									className="validate"
									required
									value={name}
									onChange={(event) => setName(event.target.value)}
								/>
								<label htmlFor="name">Full Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="email"
									type="email"
									className="validate"
									required
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="password"
									type="password"
									className="validate"
									required
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="confirmPassword"
									type="password"
									className="validate"
									required
									value={confirmPassword}
									onChange={(event) => setConfirmPassword(event.target.value)}
								/>
								<label htmlFor="confirmPassword">Confirm password</label>
							</div>
						</div>
						{error && (
							<AlertContainer>
								<Span size="20px">{error}</Span>
							</AlertContainer>
						)}
						<div>
							<button
								className="waves-effect waves-light btn #c6ff00 lime accent-3"
								type="submit"
							>
								<Span className="black-text text-darken-2">sign up</Span>
							</button>
						</div>
					</form>
				</AuthContainer>
			)}
		</>
	);
};

export default RegisterPage;
