import React from 'react';
import { Link } from "react-router-dom";

const FooterComponent = (props) => {
    return (
        <>
         <div class="container">

<div class="col-md-12">

    <div class="footer">
        <div class="box text-center pt-5">
            <div class="img">
                <img src={props.profileimage} />
            </div>
            <div class="hire-title">
                <h2>Interested in hiring me for your project?</h2>
                <p>{props.footertext}</p>
                <div className="center pb-3 pt-2">
                    <Link to="/contact" className="view-project">Let's Talk</Link>
                </div>
            </div>
        </div>
    </div>

</div>





</div>
<div className="copy-right bg-dark">
<p>{props.copyright}</p>
</div>
            
        </>
    )
}

export default FooterComponent;
