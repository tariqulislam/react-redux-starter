import React from 'react'
const Loading = (props) => {
    if(props.error) {
        return <div> Error occured when loading component </div>
    } else if(props.timedOut) {
        return <div> Taking Long Time .....</div>
    } else if(props.pastDelay || props.isLoading) {
        return <div> Loading ...</div>
    } else {
        return null
    }
}
export default Loading
