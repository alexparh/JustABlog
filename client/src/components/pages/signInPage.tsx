import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import auth from "../../utils/auth/auth";
import {
	Span,
	Header,
	AuthContainer,
	RegisterLinkContainer,
	AlertContainer
} from "../../shared/styledComponents/styledComponents";
import { History } from "history";
import { LOGIN } from "../../graphql/mutation";

interface LoginResult {
	login: string;
}

interface Login {
	email: string;
	password: string;
}

const SignInPage = ({
	history,
	setLoggedIn
}: {
	history: History;
	setLoggedIn: Dispatch<SetStateAction<boolean>>;
}) => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login] = useMutation<{ login: LoginResult }, { userInput: Login }>(LOGIN, {
		variables: { userInput: { email, password } }
	});

	const onSubmitForm = (event: SyntheticEvent) => {
		event.preventDefault();
		login()
			.then((response) => {
				const data = response.data;
				if (!data) {
					setError("Something went wrong... Try again.");
					return;
				}
				auth.logIn(() => {
					history.push("/");
				}, data.login.toString());
				setLoggedIn(true);
			})
			.catch((err) => {
				setEmail("");
				setPassword("");
				setError(err.toString().slice(7));
			});
	};

	return (
		<AuthContainer>
			<Header>Welcome back</Header>
			<form className="col s12" onSubmit={onSubmitForm}>
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
						<Span className="black-text text-darken-2">log in</Span>
					</button>
				</div>
			</form>
			<RegisterLinkContainer>
				<Span size="22px">No account? </Span>
				<Link to="/register">
					<Span underline={true} size="22px">
						Create one
					</Span>
				</Link>
			</RegisterLinkContainer>
		</AuthContainer>
	);
};

export default SignInPage;
