import React from "react";
import Skeleton from "react-loading-skeleton";
import { ContentContainer } from "../../shared/styledComponents/styledComponents";

const SkeletonPostListItem = () => {
	return (
		<div className="col s12 m7">
			<div className="card horizontal">
				{/* <div className="card-image">
					<img src={img} alt="Post Img" />
				</div> */}
				<div className="card-stacked">
					<div className="card-content">
						<span className="card-title">
							<Skeleton />
						</span>
						<p>
							<Skeleton count={3} />
						</p>
					</div>
					<div className="card-action">
						<Skeleton />
					</div>
				</div>
			</div>
		</div>
	);
};

const SkeletonMainPage = ({ count }: { count: number }) => {
	return (
		<ContentContainer>
			<ul>
				{[...new Array(count)].map((item, index) => (
					<SkeletonPostListItem key={index} />
				))}
			</ul>
		</ContentContainer>
	);
};

export default SkeletonMainPage;
