import {useRoutes} from 'react-router-dom'
// import Home from '@/pages/Home'
// import Publication from '@/pages/Publication'
// import Member from '@/pages/Member'
// import Seminar from '@/pages/Seminar'
import { lazy, Suspense } from 'react' 
const Home = lazy(() => import('@/pages/Home'))
const Publication = lazy(() => import('@/pages/Publication'))
const Member = lazy(() => import('@/pages/Member'))
const Seminar = lazy(() => import('@/pages/Seminar'))

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/publication',
            element: <Suspense fallback={<div>loading...</div>}><Publication /></Suspense>
            // element: <Publication/>
        },
        {
            path: '/member',
            element: <Suspense fallback={<div>loading...</div>}><Member /></Suspense>
            // element: <Member/>
        },
        {
            path: '/seminar',
            element: <Suspense fallback={<div>loading...</div>}><Seminar /></Suspense>
            // element: <Seminar/>
        },
        {
            path: '/',
            element: <Suspense fallback={<div>loading...</div>}><Home /></Suspense>,
            // element: <Home/>
        }
    ])
    return routes;
}

export default Routes;