import moment from 'moment';
import React, { Fragment, useState } from 'react'
import allStyles from '../assets/css/all-styles.module.css'
import useCurrecyFormat from '../hooks/useFormatCurrency';
import useSortableData from '../hooks/useSortableData';
import InputModal from '../modal/InputModal';

const Users = () =>{
    const { formatCurrency } = useCurrecyFormat()
    const { items, requestSort, sortConfig } = useSortableData([]);
    const [ modalTitle, setModalTitle ] = useState("Create user")
    const [ showInputModal, setShowInputModal ] = useState(false)

    const [ user, setUser ] = useState({})

    const getClassNamesFor = (name) => {

        if (!sortConfig) {
            return "fas fa-sort"
        }
        const sortDir = sortConfig.key === name ? sortConfig.direction : undefined;
        if (sortDir === "ascending") {
            return "fas fa-sort-asc"
        } else if (sortDir === "descending") {
            return "fas fa-sort-desc"
        } else {
            return "fas fa-sort"
        }
    };

    const handleUserForm = (e) =>{
        e.preventDefault()
    }

    const renderUsers = (list) => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <span onClick={()=>setShowInputModal(true)} style={{alignSelf:"center", fontWeight:"bolder", backgroundColor:"red", padding:"7px 15px", borderRadius:5, color:"white", cursor:"pointer"}}>
                        Add User
                    </span>
                    <div style={{position:"relative", alignSelf:"center", marginLeft:"auto"}}>
                        <input type="text" placeholder='Search' style={{padding:"5px 10px 5px 30px",width:250, outline:"none", border:"1px solid #ccc"}} />
                        <i className='fas fa-search' style={{position:"absolute", left:10, top:6}}></i>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('id')}>Id <i className={getClassNamesFor('id')}></i></th>
                            <th onClick={() => requestSort('id')}>Id <i className={getClassNamesFor('id')}></i></th>
                            <th onClick={() => requestSort('id')}>Id <i className={getClassNamesFor('id')}></i></th>
                            <th onClick={() => requestSort('id')}>Id <i className={getClassNamesFor('id')}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </>
        )
    }

    return(
        <Fragment>
            {showInputModal && 
            <InputModal title={modalTitle} size="45%" toggleModal={()=>setShowInputModal(false)}>
                <div style={{padding:15}}>
                    <form onSubmit={handleUserForm}>
                        <div className='input__group'>
                            <input type="text" id="fullName" name="fullName" className='input__control' value={user.fullName || ""} required/>
                            <label htmlFor='fullName' className='input__label'>Full Name</label>
                        </div>
                        <br />
                        <div className='row2'>
                            <div className='input__group'>
                                <input type="email" id="email" name="email" className='input__control' value={user.email || ""} required/>
                                <label htmlFor='email' className='input__label'>Email address</label>
                            </div>
                            <div className='divider'></div>
                            <div className='input__group'>
                                <input type="text" id="username" name="username" className='input__control' value={user.username || ""} required/>
                                <label htmlFor='username' className='input__label'>Username</label>
                            </div>
                        </div>
                        <br />
                        <div className='input__group'>
                            <select id="role" name="role" className='input__control' value={user.role || ""} required>
                                <option value="" hidden>Select</option>
                                <option value="TECHNICAL">Technical</option>
                                <option value="HEAD_OF_SME">Head of SME</option>
                                <option value="REGIONAL_MANAGER">Regional Manager</option>
                                <option value="TEAM_LEADER">Team Lead</option>
                                <option value="SALES_EXECUTIVE">Sales Executive</option>
                            </select>
                            <label htmlFor='role' className='input__label'>Role</label>
                        </div>
                        <br />
                        <div className='input__group'>
                            <select id="active" name="active" className='input__control' value={user.active || ""} required>
                                <option value="" hidden>Select</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                            <label htmlFor='active' className='input__label'>Status</label>
                        </div>
                    </form>
                </div>
                <div style={{display:"flex", height:60, borderTop:"1px solid #ccc"}}>
                    <button className='inputBtn' style={{marginLeft:"auto", marginRight:10}}>Save</button>
                    <button className='inputBtn' style={{marginRight:10}}>Reset</button>
                    <button className='inputBtn' style={{marginRight:"auto"}}>Close</button>
                </div>
            </InputModal>}
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle}>User Management</span>
            </div>
            <div className={allStyles.page__content} style={{border:0}}>
                {renderUsers()}
            </div>
            <div className={allStyles.page__footer}>
                <span style={{margin:"auto", fontSize:12}}>&copy; {moment().year()} Vodafone Ghana</span>
            </div>
        </Fragment>
    )
}

export default Users