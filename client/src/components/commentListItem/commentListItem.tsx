import React, { useState } from "react";

interface CommentProps {
	id: string;
	text: string;
	authorName: string;
	addedAt: Date;
}

const CommentListItem = ({ id, text, authorName, addedAt }: CommentProps) => {
	const createdAt = new Date(addedAt);

	return (
		<li>
			<span>{text}</span>
			<span>{createdAt.toTimeString()}</span>
			<span>{createdAt.toDateString()}</span>
			<span>{authorName}</span>
		</li>
	);
};

export default CommentListItem;
