import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
	MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
export const MediaContent = () => {
	return (
		<section className="mediaContent">
			<section className="mediaFlex">
				<div className="text1 inner">
					<h3 id="privateHeader">Private and Efficient Self-Assessment</h3>
					<h6 id="text">
						Only 16 questions provide a quick yet insightful evaluation of your
						Emotional Fulfullment,Intellectual Engagement, Workplace
						Relationships, and Engagement within your current role.
					</h6>
				</div>
				<div className="inner">
					<img className="images" src="pic3.png" alt="Man staring at laptop" />
				</div>
				<div className="inner">
					<img className="images2" src="pic2.png" alt="Men staring at laptop" />
				</div>
				<div className="inner text2">
					<h3 id="confidentHeader">
						Confidential Guidance for Career Transitions
					</h3>
					<h6 id="text">
						Specifically designed for professionals at a turning point, this
						private tool provides insights into job satisfaction and
						performance, offering confidential guidance for pivotal career
						decisions.
					</h6>
				</div>
				<div className="text1 inner">
					<h3 id="privateHeader">Peer Comparisons for Context</h3>
					<h6 id="text">
						Compare your career progress with peers in a secure environment,
						offering a private yet clear perspective on where you stand
						professionally
					</h6>
				</div>
				<div className="inner">
					<img
						className="images"
						src="pic1.png"
						alt="Man and woman shaking hands"
					/>
				</div>
			</section>
			<div className="text-center">
				<MDBFooter className="text-lg-start">
					<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<MDBContainer className="text-center text-md-start mt-5">
							<MDBRow className="mt-3 align-items-center">
								<MDBCol md="3" lg="3" xl="3" className="mb-4 text-center">
									<img
										className="footerImage img-fluid"
										style={{ height: "150px" }}
										src="https://images.squarespace-cdn.com/content/v1/5b7fcdb28ab722e3da4af3cc/1592215816388-MJCNC0AYHWPXX67BP9UL/Monument+Grey.jpeg?format=500w"
										alt="greyimage"
									/>
								</MDBCol>

								<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
									<p>
										<a href="#!" className="text-reset">
											Home
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Smart Career Benchmark
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Augmented Mentorship
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Enterprise Solution
										</a>
									</p>
								</MDBCol>

								<MDBCol
									md="2"
									lg="2"
									xl="2"
									className="mx-auto mb-4 custom-term-conditions"
								>
									<p>
										<a href="#!" className="text-reset">
											Terms and Conditions
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Policies
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Contact
										</a>
									</p>
								</MDBCol>

								<MDBCol
									md="4"
									lg="4"
									xl="4"
									className="mx-auto mb-md-0 mb-4 mt-4"
								>
									<p>
										<a href="#!" className="text-reset">
											Join Our Newsletter
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Get the latest information from CoPilot Career
										</a>
									</p>
									<div className="d-md-flex flex-column flex-md-row align-items-md-center mb-3">
										<MDBInput
											contrast
											type="email"
											placeholder="Enter your mail address"
											className="mb-2 mb-md-0 mx-auto custom-input-width"
										/>
										<Button className=" signButton">Sign Up</Button>
									</div>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</section>
				</MDBFooter>
			</div>
		</section>
	);
};
