import React from 'react'
import Image from "../../Images/logos/press-logo-1.png";

const Featurein = () => {
    return (
        <>
          <div class="container">
    <div class="featured-title">
        <h2>Featured in</h2>
      </div>
    <div class="row">
      <div class="col-md-3 col-lg- mt-5">
        <img class="img-fluid" src={Image} width="180px" height="auto" />
      </div>
      <div class="col-md-3 mt-5">
        <img class="img-fluid" src={Image} width="170px" height="auto" />
      </div>
      <div class="col-md-3 mt-5">
        <img class="img-fluid" src={Image} width="180px" height="auto" />
      </div>
      <div class="col-md-3 mt-5">
        <img class="img-fluid" src={Image} width="180px" height="auto" />
      </div>
    </div>
  </div>
            
        </>
    )
}

export default Featurein;
