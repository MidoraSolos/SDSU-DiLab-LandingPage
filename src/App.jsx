import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigator } from "./components/navigator";
import { Main } from "./components/mainView";
import { Content } from "./components/content";
import { MediaContent } from "./components/mediaContent";

function App() {
	return (
		<>
			<div className="App">
				<Navigator />
				<Main />
				<Content />
				<MediaContent />
			</div>
		</>
	);
}

export default App;
