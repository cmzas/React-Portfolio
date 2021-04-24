import React from 'react'

const FeatureComponent = (props) => {
    return (
        <>
         <div class="col-6 col-md-3 col-lg- mt-4">
        <img class="bage-img" src={props.obj.badgeone}  />
      </div>
      <div class="col-6 col-md-3 mt-4">
        <img class="bage-img" src={props.obj.badgetwo}  />
      </div>
      <div class="col-6 col-md-3 mt-4">
        <img class="bage-img" src={props.obj.badgethree}  />
      </div>
      <div class="col-6 col-md-3 mt-4">
        <img class="bage-img" src={props.obj.badgefour}  />
      </div>
            
        </>
    )
}

export default FeatureComponent;
