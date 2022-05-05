import React, { Fragment, useState } from 'react'
import BottomNav from '../bottonNav/BottomNav'
import ListView from '../list/ListView'
import allStyles from '../assets/css/all-styles.module.css'
import BottomModal from '../modal/BottomModal'

let data = [
    {
        "id":1,
        "name":"Customer 1",
        "contact":"054175032"
    },
    {
        "id":2,
        "name":"Customer 2",
        "contact":"054175032"
    },
    {
        "id":3,
        "name":"Customer 3",
        "contact":"054175032"
    },
    {
        "id":4,
        "name":"Customer 4",
        "contact":"054175032"
    },
    {
        "id":5,
        "name":"Customer 5",
        "contact":"054175032"
    },
    {
        "id":6,
        "name":"Customer 6",
        "contact":"054175032"
    },
    {
        "id":7,
        "name":"Customer 7",
        "contact":"054175032"
    },
    {
        "id":8,
        "name":"Customer 8",
        "contact":"054175032"
    },
    {
        "id":9,
        "name":"Customer 9",
        "contact":"054175032"
    },
    {
        "id":10,
        "name":"Customer 10",
        "contact":"054175032"
    }
]


const CustomerList = () =>{
    const [ btnNav, setBtnNav ] = useState(true)
    const [ viewCustomer, setViewCustomer ] = useState(false)
    const [ customer, setCustomer ] = useState([])

    const getCustomerDetails = (input) =>{
        setCustomer(input)
        setViewCustomer(true)
    }

    return(
        <Fragment>

            {viewCustomer && 
                <BottomModal title="Details" toggleModal={() => setViewCustomer(false)}>

                </BottomModal>
            }

            <div className={allStyles.page__header} style={{height:!btnNav ? "15%" : "10%",}}>
                <span className={allStyles.pageTitle} style={{display:"inline-block", margin:"auto"}}>
                    My Customers
                </span>
            </div>
            <div className={allStyles.page__content} style={{height:!btnNav ? "85%" : "80%"}}>
                <div style={{position:"relative", padding:15}}>
                    <input type="text" placeholder='Search' className="input__control" style={{paddingLeft:50}} onFocus={()=>setBtnNav(false)} onBlur={()=>setBtnNav(true)} />
                    <i className='fas fa-search fa-lg' style={{position:"absolute", left:30, top:38}}></i>
                </div>
                <div style={{height:"100%", overflowY:"auto",paddingBottom:90}}>
                    {
                        data?.map(customer=><ListView listData = {customer} key={customer.id} title={customer.name} contact={customer.contact} action ={getCustomerDetails} />)
                    }
                </div>
            </div>
            {btnNav && <BottomNav />}
        </Fragment>
    )
}

export default CustomerList