import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import auth from "../../utils/auth/auth";

const NavbarContainer = styled.div`
	padding-left: 15%;
	padding-right: 15%;
`;

const NavbarWrapper = styled.div`
	padding-left: 5%;
	padding-right: 5%;
`;

const NavbarSpan = styled.span`
	font-family: Trirong;
`;

const Navbar = ({
	loggedIn,
	setLoggedIn
}: {
	loggedIn: boolean;
	setLoggedIn: Dispatch<SetStateAction<boolean>>;
}) => {
	const [active, setActive] = useState("");

	return (
		<NavbarContainer>
			<nav>
				<NavbarWrapper className="nav-wrapper #c6ff00 lime accent-3">
					<Link to="/" className="brand-logo" onClick={() => setActive("")}>
						<NavbarSpan className="black-text text-darken-2">Just a blog</NavbarSpan>
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{loggedIn ? (
							<>
								<li
									onClick={() => setActive("write")}
									className={active === "write" ? "active" : ""}
								>
									<Link to="/write">
										<NavbarSpan className="black-text text-darken-2">
											Write
										</NavbarSpan>
									</Link>
								</li>
								<li
									onClick={() => {
										setActive("signOut");
										setLoggedIn(false);
										auth.logOut();
									}}
									className={active === "signOut" ? "active" : ""}
								>
									<Link to="/">
										<NavbarSpan className="black-text text-darken-2">
											Sign Out
										</NavbarSpan>
									</Link>
								</li>
							</>
						) : (
							<li
								onClick={() => setActive("signIn")}
								className={active === "signIn" ? "active" : ""}
							>
								<Link to={"/signIn"}>
									<NavbarSpan className="black-text text-darken-2">
										Sign In
									</NavbarSpan>
								</Link>
							</li>
						)}
					</ul>
				</NavbarWrapper>
			</nav>
		</NavbarContainer>
	);
};

export default Navbar;
