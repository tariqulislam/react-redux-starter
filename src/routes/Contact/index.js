import ContactContainer from './container/ContactContainer'
import contactReducer from './reducer/ContactReducer'
import {withReducer} from '../../core/withReducer'
export default withReducer('contactReducer', contactReducer)(ContactContainer)