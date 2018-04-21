import HomeContainer from './container/HomeContainer'
import { withReducer } from '../../core/withReducer'
import homeReducer from './reducer/HomeReducer'
export default withReducer('homeReducer', homeReducer)(HomeContainer)