import React, { Fragment, useState } from 'react'
import styles from './dashboard.module.css'
import allStyles from '../assets/css/all-styles.module.css'
import CustomMap from './CustomMap'

import voda from '../assets/images/Marker_Vodafone.png'
import potential from '../assets/images/Marker_Potential.png'
import dps from '../assets/images/Marker_DP.png'
import BottomModal from '../modal/BottomModal'
import BottomNav from '../bottonNav/BottomNav'
import Business from '../business/Business'


const Dashboard = () => {
    const [ switchView, setSwitchView ] = useState("map")

    const handleView = (param) =>{
        setSwitchView(param)
    }

    return (
        <Fragment>

            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle}>Dashboard</span>
                <span onClick={()=>handleView("map")} className={styles.mapView} style={{borderBottom:switchView === "map" ? "2px solid red": undefined}}>Map view</span>
                <span onClick={()=>handleView("table")} className={styles.mapView} style={{borderBottom:switchView === "table" ? "2px solid red": undefined}}>Table view</span>

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

            {switchView === "map" && <div className={allStyles.page__content}>
                 <CustomMap />
            </div>}

            {switchView === "table" && <div className={allStyles.page__content} style={{border:"none"}}>
                <Business />
            </div>}

            <div className={allStyles.page__footer}>
                <span style={{ alignSelf: "center", marginLeft: "auto", fontSize: 14 }}><img src={voda} width="15" /> Vodafone: 200</span>
                <span style={{ alignSelf: "center", marginLeft: 50, marginRight: 50, fontSize: 14 }}><img src={potential} width="15" /> Potential: 200</span>
                <span style={{ alignSelf: "center", marginRight: "auto", fontSize: 14 }}><img src={dps} width="15" /> DPS: 500</span>
            </div>

            { <BottomNav /> }
        </Fragment>
    )
}

export default Dashboard