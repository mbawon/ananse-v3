import React, { Fragment, useState } from 'react'
import BottomNav from '../bottonNav/BottomNav'
import ListView from '../list/ListView'
import allStyles from '../assets/css/all-styles.module.css'
import BottomModal from '../modal/BottomModal'

let data = [
    {
        "id":1,
        "name":"Business 1",
        "contact":"054175032"
    },
    {
        "id":2,
        "name":"Business 2",
        "contact":"054175032"
    },
    {
        "id":3,
        "name":"Business 3",
        "contact":"054175032"
    },
    {
        "id":4,
        "name":"Business 4",
        "contact":"054175032"
    },
    {
        "id":5,
        "name":"Business 5",
        "contact":"054175032"
    },
    {
        "id":6,
        "name":"Business 6",
        "contact":"054175032"
    },
    {
        "id":7,
        "name":"Business 7",
        "contact":"054175032"
    },
    {
        "id":8,
        "name":"Business 8",
        "contact":"054175032"
    },
    {
        "id":9,
        "name":"Business 9",
        "contact":"054175032"
    },
    {
        "id":10,
        "name":"Business 10",
        "contact":"054175032"
    }
]


const BusinessList = () =>{
    const [ btnNav, setBtnNav ] = useState(true)
    const [searchModal, setSearchModal] = useState(false)
    const [ viewBusiness, setViewBusiness ] = useState(false)
    const [ business, setBusiness ] = useState([])

    const getBusinessDetails = (input) =>{
        setBusiness(input)
        setViewBusiness(true)
    }

    return(
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
                            SEARCH
                        </button>
                    </div>
                </BottomModal>
            }

            {viewBusiness && 
                <BottomModal title="Details" toggleModal={() => setViewBusiness(false)}>

                </BottomModal>
            }

            <div className={allStyles.page__header} style={{height:!btnNav ? "15%" : "10%",}}>
                <span className={allStyles.pageTitle} style={{display:"inline-block", margin:"auto"}}>
                    Business Directory
                </span>
            </div>
            <div className={allStyles.page__content} style={{height:!btnNav ? "85%" : "80%"}}>
                <div style={{position:"relative", padding:15}}>
                    <input type="text" placeholder='Search' className="input__control" style={{paddingLeft:50}} onFocus={()=>setBtnNav(false)} onBlur={()=>setBtnNav(true)} />
                    <i className='fas fa-search fa-lg' style={{position:"absolute", left:30, top:38}}></i>
                    <i onClick={()=>setSearchModal(true)} className='fas fa-sliders fa-lg' style={{position:"absolute", right:35, top:38}}></i>
                </div>
                <div style={{height:"100%", overflowY:"auto",paddingBottom:90}}>
                    {
                        data?.map(business=><ListView listData = {business} key={business.id} title={business.name} contact={business.contact} action ={getBusinessDetails} />)
                    }
                </div>
            </div>
            {btnNav && <BottomNav />}
        </Fragment>
    )
}

export default BusinessList