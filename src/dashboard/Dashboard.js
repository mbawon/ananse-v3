import React, { Fragment } from 'react'
import styles from './dashboard.module.css'
import allStyles from '../assets/css/all-styles.module.css'
import CustomMap from './CustomMap'

import voda from '../assets/images/Marker_Vodafone.png'
import potential from '../assets/images/Marker_Potential.png'
import dps from '../assets/images/Marker_DP.png'


const Dashboard = () => {
    return (
        <Fragment>
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle}>Dashboard</span>
                <span className={styles.mapView}>Map view</span>
                <span className={styles.mapView}>Table view</span>

                <select className={styles.searchInput1}>
                    <option value="" hidden>Select location</option>
                </select>
                <select className={styles.searchInput2}>
                    <option value="" hidden>Select category</option>
                </select>

                <span className={styles.searchBtn}>
                    <i className='fas fa-filter fa-sm'></i> Search
                </span>
                <span className={styles.profile2}>Hi! John Tanko</span>
            </div>
            <div className={allStyles.page__content}>
                <CustomMap />
            </div>
            <div className={allStyles.page__footer}>
                <span style={{ alignSelf: "center", marginLeft: "auto", fontSize:14 }}><img src={voda} width="15" /> Vodafone: 200</span>
                <span style={{ alignSelf: "center", marginLeft: 50, marginRight: 50, fontSize:14 }}><img src={potential} width="15" /> Potential: 200</span>
                <span style={{ alignSelf: "center", marginRight: "auto", fontSize:14 }}><img src={dps} width="15" /> DPS: 500</span>
            </div>
            <div className={allStyles.page__footer2}>
                <span style={{ alignSelf: "center", textAlign:"center", fontSize:14 }}> <i className='fas fa-map-marker fa-2x'></i><br /> Map </span>
                <span style={{ alignSelf: "center", textAlign:"center", fontSize:14 }}><i className='fas fa-list fa-2x'></i> <br /> List</span>
                <span style={{ alignSelf: "center", textAlign:"center", fontSize:14 }}><i className='fas fa-search fa-2x'></i> <br /> Search</span>
                <span style={{ alignSelf: "center", textAlign:"center", fontSize:14 }}><i className='fas fa-users fa-2x'></i> <br /> Customers</span>
            </div>
        </Fragment>
    )
}

export default Dashboard