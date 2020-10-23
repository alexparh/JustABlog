import React, { useState } from "react";
import { Span } from "../../shared/styledComponents/styledComponents";
import styled from "styled-components";
import CommentAddForm from "../commentAddForm/commentAddForm";
import CommentsList from "../commentsList/commentsList";

const CommentHr = styled.hr`
	border: 1px solid #000000;
	box-shadow: 0 1px 0 0 #bdbdbd;
`;

const CommentHeader = styled.span`
	font-size: 30px;
	font-family: Trirong;
`;

const CommentHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const CommentsContainer = styled.div`
	padding-top: 5%;
`;

const AddButtonContainer = styled.div`
	margin-left: auto;
`;

interface PostCommentProps {
	comments: [
		{
			id: string;
			text: string;
			addedAt: Date;
			author: {
				name: string;
			};
		}
	];
}

const PostComments = ({ comments }: PostCommentProps) => {
	const [showAddForm, setShowAddForm] = useState(false);

	return (
		<CommentsContainer>
			<CommentHeaderContainer>
				<div>
					<CommentHeader>Comments {comments ? comments.length : null}</CommentHeader>
				</div>
				<AddButtonContainer>
					<button
						className="waves-effect waves-light btn #c6ff00 lime accent-3"
						onClick={() => setShowAddForm(!showAddForm)}
					>
						<Span className="black-text text-darken-2">Write a comment</Span>
					</button>
				</AddButtonContainer>
			</CommentHeaderContainer>
			<CommentHr />
			{showAddForm ? <CommentAddForm /> : null}
			<CommentsList comments={comments || null} />
		</CommentsContainer>
	);
};

export default PostComments;
