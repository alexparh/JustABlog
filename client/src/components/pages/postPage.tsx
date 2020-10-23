import React from "react";
import { useQuery } from "@apollo/client";
import { Span } from "../../shared/styledComponents/styledComponents";
import PostComments from "../postComments/postComments";
import Error404 from "../errors/error404";
import {
	PostAuthorInfoContainer,
	PostContentContainer,
	PostHeader,
	PostHeaderContainer
} from "../../shared/styledComponents/styledComponents";
import SkeletonPostPage from "../skeletonLoading/skeletonPostPage";
import { GET_POST } from "../../graphql/queries";

const PostPage = ({ id }: { id: string }) => {
	const { data, loading, error } = useQuery(GET_POST, {
		variables: {
			id
		}
	});

	const post = data ? data.getPost : null;

	return error ? (
		<Error404></Error404>
	) : loading ? (
		<SkeletonPostPage />
	) : (
		<PostContentContainer>
			<PostHeaderContainer>
				<PostHeader>{post.header}</PostHeader>
			</PostHeaderContainer>
			<PostAuthorInfoContainer>
				<Span>{post.author.name}</Span>
				<Span>{new Date(post.publishedAt).toTimeString().slice(0, 8)}</Span>
				<Span>{new Date(post.publishedAt).toDateString()}</Span>
			</PostAuthorInfoContainer>
			<div>
				<Span size="20px">{post.text}</Span>
			</div>
			<PostComments comments={post.comments} />
		</PostContentContainer>
	);
};

export default PostPage;
