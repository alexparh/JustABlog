import { gql } from "@apollo/client";

const REGISTER = gql`
	mutation Register($userInput: UserRegisterInput!) {
		register(userInput: $userInput)
	}
`;

const LOGIN = gql`
	mutation Login($userInput: UserLoginInput!) {
		login(userInput: $userInput)
	}
`;

const CREATE_POST = gql`
	mutation createPost($postInput: PostInput!) {
		createPost(postInput: $postInput) {
			id
		}
	}
`;

export { REGISTER, LOGIN, CREATE_POST };
