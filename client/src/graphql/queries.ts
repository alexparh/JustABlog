import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
	query getAllPosts {
		getAllPosts {
			id
			header
			text
			publishedAt
			author {
				name
				id
			}
		}
	}
`;

const GET_POST = gql`
	query getPost($id: String!) {
		getPost(id: $id) {
			id
			header
			text
			publishedAt
			author {
				name
				id
			}
			comments {
				id
				text
				addedAt
				author {
					name
				}
			}
		}
	}
`;

export { GET_ALL_POSTS, GET_POST };
