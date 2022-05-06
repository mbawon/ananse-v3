import React, { Fragment } from 'react'
import allStyles from '../assets/css/all-styles.module.css'
import BottomNav from '../bottonNav/BottomNav'


const Profile = ({}) =>{
    return (
        <Fragment>
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle} style={{display:"inline-block", margin:"auto"}}>
                    Profile
                </span>
            </div>
            <div className={allStyles.page__content}>
            </div>
            {<BottomNav />}
        </Fragment>
    )
}

export default Profile