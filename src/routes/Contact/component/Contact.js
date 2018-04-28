import React from 'react'

export const Contact = (props) => {
    return (
     <div>
        <h1>{props.contactTitle}</h1>
        <p>{props.contactDetails}</p>
     </div>
    )
}

export default Contact