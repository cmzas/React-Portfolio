import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
      <nav class="navbar navbar-expand-lg">
             <div class="container-fluid">
                 <div class="icons">
                    <Link to="" class="mr-3"><i class="fab fa-twitter"></i></Link>
                    <Link to="" class="mr-3"><i class="fas fa-camera"></i></Link>
                    <Link to="" class="mr-3"><i class="fab fa-twitter"></i></Link>
                    <Link to="" class="mr-3"><i class="fab fa-linkedin-in"></i></Link>
            </div>
             <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                 aria-expanded="false" aria-label="Toggle navigation">
                 <i class="fas fa-bars navbar-toggler-icon"></i>
                </button>
             <div class="collapse navbar-collapse" id="collapsibleNavId">
                 <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                     <li class="nav-item active disabled">
                         <Link class="nav-link" to="/">ABOUT</Link>
                     </li>
                     <li class="nav-item">
                         <Link class="nav-link" to="/project">PROJECTS</Link>
                     </li>
                     <li class="nav-item">
                         <Link class="nav-link" to="/talk">TALKS</Link>
                     </li>
                     <li class="nav-item">
                         <Link class="nav-link" to="/blog">BLOGS</Link>
                     </li>
                     <li class="nav-item">
                         <Link class="nav-link" to="/resume">RESUME</Link>
                     </li>
                   
                     {/* <li class="nav-item dropdown">
                         <Link class="nav-link dropdown-toggle" to="" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</Link>
                         <div class="dropdown-menu" aria-labelledby="dropdownId">
                             <Link class="dropdown-item" to="">PROJECT 1</Link>
                             <div class="dropdown-divider"></div>
                             <Link class="dropdown-item" to="">PROJECT 2</Link>
                         </div>
                     </li> */}
                     <li class="nav-item">
                        <Link class="nav-link" to="/contact">CONTACT</Link>
                    </li>
                   
                 </ul>
                
             </div>
            </div>
         </nav>

        </>
    )
}
export default Header;