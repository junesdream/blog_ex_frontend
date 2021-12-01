import "./App.css";
import Navigation from "./componants/Navigation";
import Footer from "./componants/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
	const { user } = useContext(Context);
	
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/post/:postId">
					<Single /> </Route>
				<Route path="/write">{user ? <Write /> : <Login />}</Route>
				<Route path="/settings">{user ? <Settings /> : <Register />}</Route>
			</Switch>
			<Footer />			
		</Router>
	);
}

export default App;
