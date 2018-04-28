import React from 'react'
import WithAuthRoute from '../../router/WithAuthRoute'
import TopNav from '../../component/TopNav'


export const MainLayout = (props) => {
    return (
      <div>
        <TopNav />
        <WithAuthRoute />
      </div>
    )
}

export default MainLayout