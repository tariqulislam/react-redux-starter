import React from 'react'
import map from 'lodash/map'

class Contact extends React.Component {
    
    componentDidMount() {
       const {renderContactInfo, getPostsInfo} = this.props
       renderContactInfo()
       getPostsInfo({id: 1})
    }

    render() {
        const {posts, contactTitle, contactDetails} = this.props
        console.log(this.props)
        return (
            <div>
                <h1>{contactTitle}</h1>
                <p>{contactDetails}</p>
                <ul>
                {
                    map(posts, post =>
                      <li>{post.name}</li>
                    )
                }
                </ul>
            </div>
        )
    }
}

export default Contact