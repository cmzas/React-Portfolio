import React from 'react';
import FooterComponent from "./FooterComponent";
import Data from "../Data/Footer/FooterData";
const Footer = () => {
    return (
        <>
            <footer class="bg-footer">
                {Data.map(obj => {
                    return (
                        <FooterComponent 
                        profileimage={obj.profileimage}
                        footertext={obj.footertext}
                        copyright={obj.copyright}
                        />
                    )
                })}


            </footer>

        </>
    )
}

export default Footer;
