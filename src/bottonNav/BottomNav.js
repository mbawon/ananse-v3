import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import allStyles from '../assets/css/all-styles.module.css'
import BottomModal from '../modal/BottomModal'

const BottomNav = ({}) =>{

    const navigate = useNavigate()

    const goToHome = () =>{
        navigate("/")
    }

    const goToBusinesses = () =>{
        navigate("/businesses")
    }

    const goToCustomers = () =>{
        navigate("/my-customers")
    }

    const goToProfile = () =>{
        navigate("/profile")
    }

    return (
        <Fragment>

            <div className={allStyles.page__footer2} style={{backgroundColor:"white"}}>
                <span onClick={goToHome} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}> <i className='fas fa-home fa-2x'></i><br /> Home </span>
                <span onClick={goToBusinesses} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-briefcase fa-2x'></i> <br /> Businesses</span>
                <span onClick={goToCustomers} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-users fa-2x'></i> <br /> Customers</span>
                <span onClick={goToProfile} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-user fa-2x'></i> <br /> Profile</span>
            </div>
        </Fragment>
    )
}

export default BottomNav