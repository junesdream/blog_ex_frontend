import "./App.css";
import Navigation from "./componants/Navigation";
import Footer from "./componants/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Music from "./pages/Music";
import Snaps from "./pages/Snaps";
import Gallary from "./pages/Gallery";
import Contact from "../src/pages/footerpages/Contact";
import Impressum from "../src/pages/footerpages/Impressum";
import About from "../src/pages/footerpages/About";
// import MyCalendar from "../src/pages/footerpages/MyCalendar";
import Kalendar from "../src/pages/footerpages/Kalendar";
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
					<Single />
				</Route>
				<Route path="/write">{user ? <Write /> : <Login />}</Route>
				<Route path="/settings">
					{user ? <Settings /> : <Register />}
				</Route>
				<Route path="/music">{user ? <Music /> : <Register />}</Route>
				<Route path="/snaps">{user ? <Snaps /> : <Register />}</Route>
				<Route path="/gallery">
					{user ? <Gallary /> : <Register />}
				</Route>

				<Route path="/contact" component={Contact}>
					<Contact />
				</Route>
				<Route path="/impressum" component={Impressum}>
					<Impressum />
				</Route>
				<Route path="/about" component={About}>
					<About />
				</Route>
				{/* <Route path="/mycalendar" component={MyCalendar}>
					<MyCalendar />
				</Route> */}
				<Route path="/kalendar" component={Kalendar}>
					<Kalendar />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
