import jwt_decode from "jwt-decode";

type DecodeJWT = {
	iat: Date;
	userId: string;
	userName: string;
};

const auth = () => {
	let inMemoryJWT = {
		token: "",
		userId: "",
		username: ""
	};

	const clearInMemoryJWT = () => {
		inMemoryJWT.token = "";
		inMemoryJWT.userId = "";
		inMemoryJWT.username = "";
	};

	// This listener allows to disconnect another session of app started in another tab
	window.addEventListener("storage", (event) => {
		if (event.key === "ra-logout") {
			clearInMemoryJWT();
		}
	});

	const logIn = (cb: () => void, token: string) => {
		inMemoryJWT.token = token;
		const decode: DecodeJWT = jwt_decode(token);
		inMemoryJWT.userId = decode.userId;
		inMemoryJWT.username = decode.userName;
		cb();
	};

	const logOut = () => {
		clearInMemoryJWT();
		window.localStorage.setItem("ra-logout", Date.now().toString());
	};

	const isAuthenticated = () => {
		return Boolean(inMemoryJWT.token);
	};

	const getCurrentUserId = () => {
		return inMemoryJWT.userId;
	};

	const getCurrentUserName = () => {
		return inMemoryJWT.username;
	};

	return {
		logIn,
		logOut,
		isAuthenticated,
		getCurrentUserId,
		getCurrentUserName
	};
};

export default auth();
