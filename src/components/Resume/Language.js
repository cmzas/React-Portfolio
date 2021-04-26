import React from 'react'

const Language = (props) => {
    return (
        <>
        <div className="py-1">
            <h1>{props.obj.language}<span className="pl-1">({props.obj.fluency})</span></h1>
            </div>
        </>
    )
}

export default Language;
