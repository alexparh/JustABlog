import React from "react";
import Skeleton from "react-loading-skeleton";
import {
	PostAuthorInfoContainer,
	PostContentContainer,
	PostHeader,
	PostHeaderContainer
} from "../../shared/styledComponents/styledComponents";

const SkeletonPostPage = () => {
	return (
		<PostContentContainer>
			<PostHeaderContainer>
				<PostHeader>
					<Skeleton />
				</PostHeader>
			</PostHeaderContainer>
			<PostAuthorInfoContainer>
				<Skeleton width={200} />
			</PostAuthorInfoContainer>
			<div>
				<Skeleton count={50} />
			</div>
		</PostContentContainer>
	);
};

export default SkeletonPostPage;
