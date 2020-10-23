import React, { useState } from "react";
import CommentListItem from "../commentListItem/commentListItem";

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

const CommentList = ({ comments }: PostCommentProps) => {
	return (
		<ul>
			{comments
				? comments.map((comment) => {
						const {
							id,
							author: { name },
							text,
							addedAt
						} = comment;
						return (
							<CommentListItem
								key={id}
								id={id}
								authorName={name}
								text={text}
								addedAt={addedAt}
							/>
						);
				  })
				: null}
		</ul>
	);
};

export default CommentList;
