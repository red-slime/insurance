import "./_global.scss";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Three from "./components/three/three.jsx";
import Savings from "./components/savings/savings.jsx";
import Hiring from "./components/hiring/hiring.jsx";
import Footer from "./components/footer/footer.jsx";
import LinkLogger from "./components/link-logger/link-logger.jsx";

const App = () => {
	return (
		<div className="App">
			<LinkLogger />
			<Header />
			<Hero />
			<About />
			<Three />
			<Savings />
			<Hiring />
			<Footer />
		</div>
	);
};

export default App;
