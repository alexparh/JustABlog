import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Span } from "../../shared/styledComponents/styledComponents";

const CommentAddForm = () => {
	return (
		<div className="row">
			<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<textarea id="textarea1" className="materialize-textarea"></textarea>
						<label htmlFor="textarea1">Your comment</label>
					</div>
				</div>
			</form>
			<button className="waves-effect waves-light btn #c6ff00 lime accent-3">
				<Span className="black-text text-darken-2">leave a comment</Span>
			</button>
		</div>
	);
};

export default CommentAddForm;
