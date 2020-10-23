import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	// uri: "http://localhost:3001/graphql",
	uri: process.env.REACT_APP_API_URI,
	cache: new InMemoryCache()
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
