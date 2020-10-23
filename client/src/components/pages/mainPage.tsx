import React from "react";
import { useQuery } from "@apollo/client";
import PostListItem from "../postListItem/postListItem";
import SkeletonMainPage from "../skeletonLoading/skeletonMainPage";
import { ContentContainer } from "../../shared/styledComponents/styledComponents";
import { GET_ALL_POSTS } from "../../graphql/queries";

interface Post {
	id: string;
	header: string;
	text: string;
	publishedAt: Date;
	author: {
		id: string;
		name: string;
	};
}

const MainPage = () => {
	const { data, loading } = useQuery(GET_ALL_POSTS);

	return !loading ? (
		<ContentContainer>
			<ul>
				{data.getAllPosts.map((post: Post) => {
					const {
						id,
						author: { id: authorId, name },
						header,
						text,
						publishedAt
					} = post;

					return (
						<PostListItem
							key={id}
							id={id}
							authorName={name}
							authorId={authorId}
							header={header}
							text={text}
							publishedAt={publishedAt}
						/>
					);
				})}
			</ul>
		</ContentContainer>
	) : (
		<SkeletonMainPage count={20} />
	);
};

export default MainPage;
