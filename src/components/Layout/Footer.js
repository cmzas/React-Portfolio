import React from 'react'
import Image from "../../Images/profile.jpg";

const Footer = () => {
    return (
        <>
        <footer class="bg-primary">
            <div class="container bg-primary">

                <div class="col-md-12">
                    
                        <div class="footer">
                            <div class="box text-center pt-5">
                                <div class="img">
                                    <img src={Image} />
                                </div>
                                    <div class="hire-title">
                                        <h2>Interested in hiring me for your project?</h2>
                                        <p>Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a href="#">steve.doe@youremail.com </a>or use the <a href="#">form on the contact page.</a>
                                        </p>
                                        <a href="#" class="btn btn-primary">Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                       
                    </div>

                    



                </div>
                <div className="copy-right bg-dark">
                    <p>Template Copyright © <a href="#"> 3rd Wave Media</a></p>
                    </div>
                </footer>

        </>
    )
}

export default Footer;
