import React from 'react'
import FeatureComponent from "./AboutComponent/FeatureComponent";
import FeatureinData from "../Data/About/FeatureinData";

const Featurein = () => {
    return (
        <>
        <div className="jumbotron-fluid featuredin-bg pb-3">
          <div class="container">
    <div class="featured-title pt-4">
        <h2>Featured in</h2>
      </div>
    <div class="row">
      {FeatureinData.map(obj=>{
        return(
        <FeatureComponent
        obj={obj}
        />
        )
      })}
     
    </div>
  </div>
  </div>
            
        </>
    )
}

export default Featurein;
