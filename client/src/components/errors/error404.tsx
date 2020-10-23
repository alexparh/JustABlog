import React from "react";
import { Link } from "react-router-dom";
import { ContentContainer, Span } from "../../shared/styledComponents/styledComponents";

const Error404 = () => {
	return (
		<ContentContainer>
			<h1>Error 404</h1>
			<h3>We couldn’t find this page.</h3>
			<Link to="/" className="lime-text">
				<Span underline={true} size="30px">
					To homepage
				</Span>
			</Link>
		</ContentContainer>
	);
};

export default Error404;
