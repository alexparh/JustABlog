import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import MainPage from "../pages/mainPage";
import SignInPage from "../pages/signInPage";
import WritePage from "../pages/writePage";
import PostPage from "../pages/postPage";
import RegisterPage from "../pages/registerPage";
import Error404 from "../errors/error404";
import { ProtectedRoute } from "../../shared/protectedRoute/protected.route";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "../../utils/auth/auth";

function App() {
	const [loggedIn, setLoggedIn] = useState(auth.isAuthenticated());

	return (
		<Router>
			<div className="app">
				<Navbar {...{ loggedIn, setLoggedIn }} />
				<div className="container">
					<Switch>
						<Route path="/" component={MainPage} exact />
						<ProtectedRoute path="/write" component={WritePage} exact />
						<Route
							path="/signIn"
							exact
							render={(routeProps) => (
								<SignInPage {...{ ...{ setLoggedIn, ...routeProps } }} />
							)}
						/>
						<Route path="/register" component={RegisterPage} exact />
						<Route
							path="/posts/:id"
							render={({ match }) => {
								const { id } = match.params;
								return <PostPage id={id} />;
							}}
						/>
						<Route path="*" component={Error404} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
