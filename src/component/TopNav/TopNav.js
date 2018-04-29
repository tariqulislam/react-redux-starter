import React from 'react'
import styles from '../../asset/App.scss'
import AppHelper from '../../shared/AppHelper';
import {Link} from 'react-router-dom';
import map from 'lodash/map'

export const TopNav = () => {
    return (
        <div className={styles.Appheader}>
         {
            map(AppHelper.getNavigationItems.TopNav, item =>
                <Link key={item.id} className={styles.AppLink} to={item.path}>{item.label}</Link>
             )
         }
        </div>
    )
}

export default TopNav