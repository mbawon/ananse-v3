import React, { Fragment } from 'react'
import allStyles from '../assets/css/all-styles.module.css'

const Users = () =>{

    return(
        <Fragment>
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle}>User List</span>
            </div>
        </Fragment>
    )
}

export default Users