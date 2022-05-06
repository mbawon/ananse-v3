import React, { Fragment, useEffect, useState } from 'react'
import allStyles from '../assets/css/all-styles.module.css'
import Card from '../card/Card'
import useCurrecyFormat from '../hooks/useFormatCurrency'
import useSortableData from '../hooks/useSortableData'
import Tabs from '../tabs/Tabs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStatistics, selectStatistics } from '../features/statistic.feature'
import { selectUser } from '../features/login.feature'

const Reports = () => {
    const { formatCurrency } = useCurrecyFormat()
    const { items, requestSort, sortConfig } = useSortableData([]);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // const userRole = useSelector(selectUser).role
    const userRole = "REGIONAL_MANAGER"

    const dispatch = useDispatch()

    const cardsData = useSelector(selectStatistics)

    const fetchSatus = useSelector(state=>state.statistic.status)

    useEffect(()=>{
        if(fetchSatus === "idle"){
            dispatch(fetchStatistics())
        }
    },[fetchSatus])

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

    const renderCustomerReport = () => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <div style={{ position: "relative", alignSelf: "center" }}>
                        <select placeholder='Search' style={{ padding: "5px 10px 5px 30px", backgroundColor:"white", width: 250, outline: "none", border: "1px solid #ccc" }}>
                            <option value="" hidden>Select Agent</option>
                        </select>
                        <i className='fas fa-user' style={{ position: "absolute", left: 10, top: 6 }}></i>
                    </div>
                    <span style={{ alignSelf: "center", fontWeight: "bolder", marginLeft: "auto" }}>
                        <div style={{alignSelf:"center", display:"flex", alignItem:"flex-start", marginLeft:0}}>
                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>From:</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                            />

                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>To:</span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                                minDate={startDate}
                            />

                            <span style={{backgroundColor:"blue", padding:"5px 10px", color:"white", borderRadius:5, cursor:"pointer"}}>
                                <i className='fas fa-calendar fa-sm'></i>
                            </span>
                        </div>
                    </span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('region')}>Full Name <i className={getClassNamesFor('region')}></i></th>
                            <th onClick={() => requestSort('region')}>Role<i className={getClassNamesFor('region')}></i></th>
                            <th onClick={() => requestSort('manager')}>Potentials <i className={getClassNamesFor('manager')}></i></th>
                            <th onClick={() => requestSort('teamCount')}>Customers <i className={getClassNamesFor('teamCount')}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </>
        )
    }

    const renderRegionalReport = () => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <div style={{ position: "relative", alignSelf: "center" }}>
                        <input type="text" placeholder='Search' style={{ padding: "5px 10px 5px 30px", width: 250, outline: "none", border: "1px solid #ccc" }} />
                        <i className='fas fa-search' style={{ position: "absolute", left: 10, top: 6 }}></i>
                    </div>
                    <span style={{ alignSelf: "center", fontWeight: "bolder", marginLeft: "auto" }}>
                        <div style={{alignSelf:"center", display:"flex", alignItem:"flex-start", marginLeft:0}}>
                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>From:</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                            />

                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>To:</span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                                minDate={startDate}
                            />

                            <span style={{backgroundColor:"blue", padding:"5px 10px", color:"white", borderRadius:5, cursor:"pointer"}}>
                                <i className='fas fa-calendar fa-sm'></i>
                            </span>
                        </div>
                    </span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('region')}>Region <i className={getClassNamesFor('region')}></i></th>
                            <th onClick={() => requestSort('manager')}>Manager <i className={getClassNamesFor('manager')}></i></th>
                            <th onClick={() => requestSort('teamCount')}>Team <i className={getClassNamesFor('teamCount')}></i></th>
                            <th onClick={() => requestSort('vodafoneCount')}>Vodafone <i className={getClassNamesFor('vodafoneCount')}></i></th>
                            <th onClick={() => requestSort('potentialCount')}>Potential <i className={getClassNamesFor('potentialCount')}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </>
        )
    }

    const renderAgentCustomerReport = () => {
        return (
            <>
                <div className={allStyles.tableHeader}>
                    <span style={{alignSelf:"center", textTransform:"uppercase", marginRight:15, fontWeight:"bolder", marginTop:3}}>Customers</span>
                    <div style={{ position: "relative", alignSelf: "center" }}>
                        <input type="text" placeholder='Search' style={{ padding: "5px 10px 5px 30px", width: 250, outline: "none", border: "1px solid #ccc" }} />
                        <i className='fas fa-search' style={{ position: "absolute", left: 10, top: 6 }}></i>
                    </div>
                    <span style={{ alignSelf: "center", fontWeight: "bolder", marginLeft: "auto" }}>
                        <div style={{alignSelf:"center", display:"flex", alignItem:"flex-start", marginLeft:0}}>
                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>From:</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                            />

                            <span style={{alignSelf:"center", fontWeight:"bolder"}}>To:</span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                showTimeSelect
                                endDate={endDate}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className={"dateRange"}
                                minDate={startDate}
                            />

                            <span style={{backgroundColor:"blue", padding:"5px 10px", color:"white", borderRadius:5, cursor:"pointer"}}>
                                <i className='fas fa-calendar fa-sm'></i>
                            </span>
                        </div>
                    </span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('region')}>Region <i className={getClassNamesFor('region')}></i></th>
                            <th onClick={() => requestSort('manager')}>Manager <i className={getClassNamesFor('manager')}></i></th>
                            <th onClick={() => requestSort('teamCount')}>Team <i className={getClassNamesFor('teamCount')}></i></th>
                            <th onClick={() => requestSort('vodafoneCount')}>Vodafone <i className={getClassNamesFor('vodafoneCount')}></i></th>
                            <th onClick={() => requestSort('potentialCount')}>Potential <i className={getClassNamesFor('potentialCount')}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <Fragment>
            <div className={allStyles.page__header}>
                <span className={allStyles.pageTitle} style={{paddingLeft:10}}>Dashboard</span>
            </div>
            <div className={allStyles.page__content} style={{ border: "none" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "row", padding: 10 }}>
                    <Card title="Businesses" value={100}></Card>
                    <div className='divider' value={0}></div>
                    <Card title="Vodafone" value={0}></Card>
                    <div className='divider' value={0}></div>
                    <Card title="Potential" value={0}></Card>
                    <div className='divider' value={0}></div>
                    <Card title="DPs" value={0}></Card>
                </div>
                <div style={{ padding: 10 }}>
                    {(userRole === "HEAD_OF_SME" || userRole === "REGIONAL_MANAGER") &&  
                    <Tabs>
                        <div label="Agent Workload">
                            {renderCustomerReport()}
                        </div>
                        <div label="Regional Performance">
                            {renderRegionalReport()}
                        </div>
                    </Tabs>}
                    {(userRole === "SALES_EXECUTIVE") && 
                    renderAgentCustomerReport()}
                </div>
            </div>
            <div className={allStyles.page__footer}>
                <span style={{margin:"auto", fontSize:12}}>&copy; {moment().year()} Vodafone Ghana</span>
            </div>
        </Fragment>
    )
}

export default Reports