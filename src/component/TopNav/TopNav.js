import React from 'react'
import styles from '../../asset/App.scss'
import AppHelper from '../../shared/AppHelper';
import {Link} from 'react-router-dom';

export const TopNav = () => {
    return (
        <div className={styles.Appheader}>
         {
             AppHelper.getNavigationItems.TopNav.map((item) => {
                 return (<Link className={styles.AppLink} to={item.path}>{item.label}</Link>)
             })
         }
        </div>
    )
}

export default TopNav