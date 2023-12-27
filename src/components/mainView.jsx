import Button from "react-bootstrap/Button";
export const Main = () => {
	return (
		<>
			<section className="mainBackground">
				<div className="mainText">
					<h1>
						Your New <span id="specialWords">Copilot</span>{" "}
					</h1>
					<h2>
						Constantly Accessible, Completely Anonymous, Contextually Aware
					</h2>
					<Button id="buttonPadding" className="buttonGradiant">
						Smart Career Benchmark
					</Button>
				</div>
			</section>
		</>
	);
};
