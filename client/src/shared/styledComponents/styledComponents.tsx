import styled from "styled-components";

const Header = styled.h1`
	font-family: Trirong;
`;

const AuthContainer = styled.div`
	padding-top: 5%;
	padding-left: 20%;
	padding-right: 20%;
	text-align: center;
`;

const ContentContainer = styled.div`
	padding-top: 5%;
	padding-left: 10%;
	padding-right: 10%;
`;

const SuccessfulMessageContainer = styled.div`
	padding-top: 5%;
	padding-left: 10%;
	padding-right: 10%;
	text-align: center;
`;

const RegisterLinkContainer = styled.div`
	padding-top: 5%;
`;

const AlertContainer = styled.div`
	padding: 0.5rem 1rem;
	border-radius: 10px;
	text-align: center;
	margin-bottom: 1rem;
	background: rgba(255, 0, 0, 0.3);
`;

const PostContentContainer = styled.div`
	padding-top: 5%;
	padding-left: 22%;
	padding-right: 22%;
`;

const PostHeaderContainer = styled.div`
	text-align: center;
	padding-bottom: 5%;
`;

const PostHeader = styled.span`
	font-size: 40px;
	font-family: Trirong;
`;

const PostAuthorInfoContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-left: auto;
	> * {
		margin: 0 1rem;
	}
`;

const Span = styled.span<{ size?: string; underline?: boolean }>`
	font-family: PT Serif;
	font-size: ${(props) => props.size};
	:hover {
		text-decoration: ${(props) => (props.underline ? "underline" : "")};
	}
`;

export {
	Span,
	Header,
	AuthContainer,
	RegisterLinkContainer,
	ContentContainer,
	AlertContainer,
	SuccessfulMessageContainer,
	PostContentContainer,
	PostHeaderContainer,
	PostHeader,
	PostAuthorInfoContainer
};
