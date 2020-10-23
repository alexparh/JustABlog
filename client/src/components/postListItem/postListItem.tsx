import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Span } from "../../shared/styledComponents/styledComponents";
import auth from "../../utils/auth/auth";
import "./postListItem.css";

export interface PostListItemProps {
	id: string;
	authorName: string;
	authorId: string;
	header: string;
	text: string;
	publishedAt: Date;
}

const PostItemActionPanelContainer = styled.div`
	margin: 0 1rem;
`;

const PostInfoContainer = styled.div`
	display: flex;
	margin-left: auto;
`;

const PostListItem = ({
	id,
	authorName,
	authorId,
	header,
	text,
	publishedAt
}: PostListItemProps) => {
	const createdAt = new Date(publishedAt);

	return (
		<div className="col s12 m7">
			<div className="card horizontal">
				{/* <div className="card-image">
					<img src={img} alt="Post Img" />
				</div> */}
				<div className="card-stacked">
					<div className="card-content">
						<Span className="card-title">{header || <Skeleton />}</Span>
						<p>{text.slice(0, 300) || <Skeleton count={3} />}...</p>{" "}
						{/*View first 120 symbols of the text post*/}
					</div>
					<div className="card-action actions">
						<Link to={`/posts/${id}`} className="lime-text">
							<Span>Read</Span>
						</Link>
						<PostItemActionPanelContainer>
							{authorId === auth.getCurrentUserId() ? <Span>Edit</Span> : null}
						</PostItemActionPanelContainer>
						<PostInfoContainer>
							<PostItemActionPanelContainer>
								<Span>{authorName}</Span>
							</PostItemActionPanelContainer>

							<PostItemActionPanelContainer>
								<Span>{createdAt.toTimeString().slice(0, 8)}</Span>
							</PostItemActionPanelContainer>
							<PostItemActionPanelContainer>
								<Span>{createdAt.toDateString()}</Span>
							</PostItemActionPanelContainer>
						</PostInfoContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostListItem;
