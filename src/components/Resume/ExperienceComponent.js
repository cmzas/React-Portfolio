import React from 'react'

const ExperienceComponent = (props) => {
    return (
        <>
            <div className="exp-details py-3">
                <div class="lead-title">
                    <h1 class=" font-weight-bolder">{props.obj.leadtitle}</h1>
                </div>
                <div class="date font-weight-bold">
                    <p>{props.obj.leadtime}</p>
                </div>
                <div class="lead-content">
                    <p>{props.obj.leadtext}</p>
                </div>
                <div class="achievement-title">
                    <h1>Achievements:</h1>

                    <div class="achiev-content">
                        <p>{props.obj.achievementdescription}</p>
                    </div>

                    <ul>
                        <li>{props.obj.achievementlistone}</li>
                        <li>{props.obj.achievementlisttwo}</li>
                        <li>{props.obj.achievementlistthree}</li>
                        <li>{props.obj.achievementlistfour}</li>
                    </ul>
                </div>
                <div class="lead-technology">
                    <h1>Technologies used:</h1>

                    <div class="col-md-12 pt-0">
                        <div class="row">
                            <div class="text-center col-lg-3 col-md-4 col-sm-4 col-4 techno-list">

                                <span class="badge badge-secondary badge-pill px-4">{props.obj.techlistone}</span>

                            </div>
                            <div class="text-center col-lg-3 col-md-4 col-sm-4 col-4 techno-list">

                                <span class="badge badge-secondary badge-pill px-4">{props.obj.techlisttwo}</span>

                            </div>
                            <div class="text-center col-lg-3 col-md-4 col-sm-4 col-4 techno-list">

                                <span class="badge badge-secondary badge-pill px-4">{props.obj.techlistthree}</span>

                            </div>
                            <div class="text-center col-lg-3 col-md-4 col-sm-4 col-4 techno-list">

                                <span class="badge badge-secondary badge-pill px-4">{props.obj.techlistfour}</span>

                            </div>


                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default ExperienceComponent;
