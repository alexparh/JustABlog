import React from "react";
import { Route, Redirect } from "react-router-dom";
import Error401 from "../../components/errors/error401";
import auth from "../../utils/auth/auth";

export type RouteComponentProps<TParams = {}> = Partial<TParams> & {
	path: string;
	exact?: boolean;
	component: React.ElementType;
};

export const ProtectedRoute = ({ component: Component, ...rest }: RouteComponentProps) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth.isAuthenticated()) {
					return <Component {...props} />;
				} else {
					return <Error401 />;
				}
			}}
		/>
	);
};
