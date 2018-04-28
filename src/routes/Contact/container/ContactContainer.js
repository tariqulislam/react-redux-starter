import {connect}  from 'react-redux'
import {
 getContactInfo,
 setContactInfo
} from '../reducer/ContactReducer'

import Contact from '../component/Contact'

const loadRenderContactInfo = (dispatch) => {
    dispatch(getContactInfo())
    dispatch(setContactInfo({
            contactTitle: "This is new contact title",
            contactDetails: "This is new contact details"
        }))
}

const mapStateToProps = (state) => ({
   contactTitle: state.contactReducer.contactTitle,
   contactDetails: state.contactReducer.contactDetails
})

const mapActionCreator = (dispatch) => ({
   renderContactInfo: loadRenderContactInfo(dispatch)
})

export default connect(
mapStateToProps,
mapActionCreator
)(Contact)



