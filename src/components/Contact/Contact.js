import React from "react";
import Form from "./NewForm";
import Image from "../../Images/profile.jpg";


const Contact = () => {

    return(
        <>
		<div className="container">
			<div className="profile-image mt-4 mb-4">
				<img src={Image}  alt="profile=image"/>
			</div>
			<div className="profile-content p-5">
			<div className="form-intro-text">
				<p>I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my <a href="#">project case studies</a> and <a href="#">resume</a>.</p>
			</div>
			<div className="social-channel">
			<p>You can also find me on the following channels</p>
			<div className="col-12 col-md-6 offset-md-3">
			<div className="row">
				
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-twitter-square "></i></a>
				</div>
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-linkedin"></i></a>
				</div>
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-google-plus-square"></i></a>
				</div>
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-github-square"></i></a>
				</div>
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-facebook-square"></i></a>
				</div>
				<div className="col-2  social-icon">
					<a href="#"><i class="fab fa-medium"></i></a>
				</div>
				</div>
			</div>
			</div>
			</div>
		</div>
        <div className="jumbotron-fluid contact-banner">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 form-right">
					<div className="container">
						<div className="form-right-heading">
						<h1>Get in touch</h1>
					</div>
					<Form/>
					  </div>

				</div>
			</div>

		</div>

	</div>
	

        </>
    )
}
export default Contact;