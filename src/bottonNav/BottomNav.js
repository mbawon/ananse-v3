import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import allStyles from '../assets/css/all-styles.module.css'
import BottomModal from '../modal/BottomModal'

const BottomNav = ({}) =>{
    const [searchModal, setSearchModal] = useState(false)


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

    return (
        <Fragment>
            {searchModal &&
                <BottomModal title="Search" toggleModal={() => setSearchModal(false)}>
                    <div style={{ padding: 15 }}>
                        <select className='input__control' style={{ backgroundColor: "white" }}>
                            <option value="">Location</option>
                        </select>
                        <br />
                        <br />
                        <select className='input__control' style={{ backgroundColor: "white" }}>
                            <option value="">Category</option>
                        </select>
                        <br />
                        <br />
                        <button style={{ width: "100%", padding: 20, fontSize: 18, color: "white", backgroundColor: "red", border: "none" }}>
                            GET PLACES
                        </button>
                    </div>
                </BottomModal>
            }
            <div className={allStyles.page__footer2} style={{backgroundColor:"white"}}>
                <span onClick={goToHome} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}> <i className='fas fa-home fa-2x'></i><br /> Home </span>
                <span onClick={goToBusinesses} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-folder fa-2x'></i> <br /> Directory</span>
                <span onClick={()=>setSearchModal(true)} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-filter fa-2x'></i> <br /> Filter</span>
                <span onClick={goToCustomers} style={{ alignSelf: "center", textAlign: "center", fontSize: 14 }}><i className='fas fa-users fa-2x'></i> <br /> Customers</span>
            </div>
        </Fragment>
    )
}

export default BottomNav