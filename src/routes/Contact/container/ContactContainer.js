import {connect}  from 'react-redux'
import {
 getContactInfo,
 setContactInfo,
 setPostInfo,
 getPostInfoFromApi
} from '../reducer/ContactReducer'

import Contact from '../component/Contact'

const loadRenderContactInfo = (dispatch) => {
    dispatch(getContactInfo())
    dispatch(setContactInfo({
            contactTitle: "This is new contact title",
            contactDetails: "This is new contact details"
        }))
}

const loadGetPostsInfo = (data,dispatch) => {
    dispatch(getPostInfoFromApi(data))
    .then(resonse => {
        dispatch(setPostInfo(resonse.payload.data))
    })   
}

const mapStateToProps = (state) => ({
   contactTitle: state.contactReducer.contactTitle,
   contactDetails: state.contactReducer.contactDetails,
   posts: state.contactReducer.posts
})

const mapActionCreator = (dispatch) => ({
   renderContactInfo: () => loadRenderContactInfo(dispatch),
   getPostsInfo: (data) => loadGetPostsInfo(data,dispatch)
})

export default connect(
mapStateToProps,
mapActionCreator
)(Contact)



