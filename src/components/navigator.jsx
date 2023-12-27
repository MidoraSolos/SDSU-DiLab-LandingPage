import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
export const Navigator = () => {
	return (
		<Navbar className="navColor">
			<Container className="container">
				<Navbar.Brand className="logoName" href="#home">
					CopilotCareer
				</Navbar.Brand>
				<Nav>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="page1">Smart Benchmark</Nav.Link>
					<Nav.Link href="#page2">Augmented Mentorship</Nav.Link>
					<Nav.Link href="#page3">Enterprise Solution</Nav.Link>
					<Nav.Link href="#page4">Contact</Nav.Link>
				</Nav>
				<Button className="buttonGradiant logButton">Log in</Button>
			</Container>
		</Navbar>
	);
};
