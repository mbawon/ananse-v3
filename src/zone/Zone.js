import moment from 'moment';
import React, { Fragment } from 'react'
import allStyles from '../assets/css/all-styles.module.css'
import useCurrecyFormat from '../hooks/useFormatCurrency';
import useSortableData from '../hooks/useSortableData';

const Zones = () =>{
    const { formatCurrency } = useCurrecyFormat()
    const { items, requestSort, sortConfig } = useSortableData([]);

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

    const renderZones = (list) => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <span style={{alignSelf:"center", fontWeight:"bolder", backgroundColor:"red", padding:"7px 15px", borderRadius:5, color:"white", cursor:"pointer"}}>
                        Add Zone
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
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle}>Zone Management</span>
            </div>
            <div className={allStyles.page__content} style={{border:0}}>
                {renderZones()}
            </div>
            <div className={allStyles.page__footer}>
                <span style={{margin:"auto", fontSize:12}}>&copy; {moment().year()} Vodafone Ghana</span>
            </div>
        </Fragment>
    )
}

export default Zones