import React, { SyntheticEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import auth from "../../utils/auth/auth";
import {
	Span,
	Header,
	ContentContainer,
	SuccessfulMessageContainer,
	AlertContainer
} from "../../shared/styledComponents/styledComponents";
import { CREATE_POST } from "../../graphql/mutation";

interface CreatePostResult {
	createPost: {
		id: string;
	};
}

interface PostInput {
	authorId: string;
	header: string;
	text: string;
}

const WritePage = () => {
	const [publishStatus, setPublishStatus] = useState(false);
	const [error, setError] = useState("");
	const [header, setHeader] = useState("");
	const [text, setText] = useState("");

	const [createPost] = useMutation<{ createPost: CreatePostResult }, { postInput: PostInput }>(
		CREATE_POST,
		{
			variables: { postInput: { authorId: auth.getCurrentUserId(), header, text } }
		}
	);

	const onSubmitForm = (event: SyntheticEvent) => {
		event.preventDefault();

		createPost()
			.then((response) => {
				const data = response.data;
				if (!data || !data.createPost) {
					setError("Something went wrong... Try again.");
					return;
				}
				setPublishStatus(true);
			})
			.catch((err) => setError(err.toString().slice(7)));
	};

	return (
		<>
			{publishStatus ? (
				<SuccessfulMessageContainer>
					<Header>Your post has been successfully created!</Header>
					<Link to="/" className="lime-text">
						<Span underline={true} size="30px">
							To main page
						</Span>
					</Link>
				</SuccessfulMessageContainer>
			) : (
				<ContentContainer>
					<Header>Write a post</Header>
					{error && (
						<AlertContainer>
							<Span size="20px">{error}</Span>
						</AlertContainer>
					)}
					<form className="col s12" onSubmit={onSubmitForm}>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="header"
									type="text"
									className="validate"
									value={header}
									onChange={(event) => setHeader(event.target.value)}
									required
								/>
								<label htmlFor="header">Header</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea
									id="textarea"
									className="materialize-textarea"
									value={text}
									onChange={(event) => setText(event.target.value)}
									required
								/>
								<label htmlFor="textarea">Textarea</label>
							</div>
						</div>
						<div>
							<button
								className="waves-effect waves-light btn #c6ff00 lime accent-3"
								type="submit"
							>
								<Span className="black-text text-darken-2">publish</Span>
							</button>
						</div>
					</form>
				</ContentContainer>
			)}
		</>
	);
};

export default WritePage;
