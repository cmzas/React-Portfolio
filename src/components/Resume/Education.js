import React from 'react'

const Education = (props) => {
    return (
        <>
            <div className="degree">
                <div class="lead-title pt-2 ">
                    <h1 class=" font-weight-bolder">{props.obj.degree}</h1>
                </div>
                <div class="degree-content">
                    <p class="my-0">{props.obj.institute}</p>
                    <p>{props.obj.year}</p>
                </div>
            </div>

        </>
    )
}

export default Education
