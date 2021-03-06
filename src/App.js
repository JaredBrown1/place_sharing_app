import "./App.css";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Users />
				</Route>
				<Route exact path="/places/new">
					<NewPlace />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
