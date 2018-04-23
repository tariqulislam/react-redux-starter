import Loadable from 'react-loadable'
import Loading from '../component/Loading'

const delay = 1200

const Home = Loadable({
    loader: () =>import('./Home'),
    loading: Loading,
    delay: delay
})

const About = Loadable({
    loader: () => import('./About'),
    loading: Loading,
    delay: delay
})

export { Home, About }