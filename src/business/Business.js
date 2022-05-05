import React, { Fragment } from 'react'
import useCurrecyFormat from '../hooks/useFormatCurrency'
import useSortableData from '../hooks/useSortableData'
import Pagination from '../pagination/Pagination'
import allStyles from '../assets/css/all-styles.module.css'


const Business = ({ }) => {

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

    const renderBusinesses = (list) => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <span style={{alignSelf:"center", fontWeight:"bolder"}}>Business List</span>
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
                        <tr>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    return (
        <Fragment>
            {renderBusinesses()}
        </Fragment>
    )
}

export default Business