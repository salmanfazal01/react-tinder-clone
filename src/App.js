import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import SwipeCard from "./components/SwipeCards/SwipeCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<SwipeCard />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
