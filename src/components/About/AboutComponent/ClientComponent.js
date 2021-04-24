import React from 'react';

const ClientComponent = (props) => {
    return (
        <>
         <div className="container">
        <div className="title pt-5 pb-4">
          <h1>Great clients I've worked with</h1>
      </div>
        <div className="row">

        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgeone} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgetwo} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgethree} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgefour} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgefive} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-1">
                <div className="col-md-12">
                    <a href="#"><img className="bage-img" src={props.obj.badgesix} /></a>
                </div>
            </div>
        </div>
      </div>

            
        </>
    )
}

export default ClientComponent;
