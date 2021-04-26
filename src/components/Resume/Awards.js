import React from 'react'

const Awards = (props) => {
    return (
        <>
            <div className="award-area">
                <div class="award-lorem pt-2">
                    <h1 class="font-weight-bold"><i class="fas fa-trophy"></i>{props.obj.awardtitle}</h1>
                </div>
                <div class="lorem-content mb-0">
                    <p>{props.obj.des}</p>
                </div>

            </div>

        </>
    )
}

export default Awards;
