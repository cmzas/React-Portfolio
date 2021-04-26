import React from 'react'

const FeatureComponent = (props) => {
    return (
        <>
         <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgeone} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgetwo} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgethree} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgefour} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgefive} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12 bage-img">
                    <a href="#"><img className="bage-inner-img" src={props.obj.badgesix} /></a>
                </div>
            </div>
            
        </>
    )
}

export default FeatureComponent;
