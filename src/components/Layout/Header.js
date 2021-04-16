import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
 <nav className="navbar navbar-expand-lg">
             <div className="container-fluid">
                 <div className="icons">
                    <a href="#" className="mr-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mr-3"><i className="fas fa-camera"></i></a>
                    <a href="#" className="mr-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mr-3"><i className="fab fa-linkedin-in"></i></a>
            </div>
             <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                 aria-expanded="false" aria-label="Toggle navigation">
                 <i className="fas fa-bars navbar-toggler-icon"></i>
                </button>
             <div className="collapse navbar-collapse" id="collapsibleNavId">
                 <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                     <li className="nav-item active disabled">
                         <a className="nav-link" href="#">ABOUT</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">PROJECTS</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">TALKS</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">BLOGS</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">RESUME</a>
                     </li>
                   
                     <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</a>
                         <div className="dropdown-menu" aria-labelledby="dropdownId">
                             <a className="dropdown-item" href="#">PROJECT 1</a>
                             <div className="dropdown-divider"></div>
                             <a className="dropdown-item" href="#">PROJECT 2</a>
                         </div>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                   
                 </ul>
                
             </div>
            </div>
         </nav>

        </>
    )
}
export default Header;