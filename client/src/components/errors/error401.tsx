import React from "react";
import { Link } from "react-router-dom";
import { ContentContainer, Span } from "../../shared/styledComponents/styledComponents";

const Error401 = () => {
	return (
		<ContentContainer>
			<h1>Error 401: UNAUTHORIZAED</h1>
			<h3>You must be logged in to see this page.</h3>
			<Link to="/signin" className="lime-text">
				<Span underline={true} size="30px">
					To Sign In
				</Span>
			</Link>
		</ContentContainer>
	);
};

export default Error401;
