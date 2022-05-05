import React from 'react'
import styles from './layout.module.css'
import logo from '../assets/images/logo-big.png'
import { NavLink, Route, Routes } from 'react-router-dom'
import appRoutes from './main.routes'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <nav className={styles.navbar}>
                <img src={logo} alt="logo" width="170" style={{ alignSelf: "center", marginTop: 7 }} />
                <span className={styles.profile}>LoggedIn: john.tanko@vodafone.com</span>
                <span className={styles.logout}>Logout</span>
                <span className={styles.logout2}>
                    <i className='fas fa-sign-out fa-lg'></i>
                </span>
                
            </nav>
            <div className={styles.main}>
                <aside>
                    <span style={{ padding: 19, borderBottom: "1px solid #ccc", fontWeight: "bolder" }}>
                        Navigation
                    </span>
                    <ul>
                        {
                            appRoutes?.map((appR, index) => {
                                return (
                                    <li><NavLink key={index} to={appR.path} className={props => (props.isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>{appR.name}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                </aside>
                <section>
                    <Routes>
                        {
                            appRoutes?.map((appR,index)=>{
                                return <Route key={index} path={appR.path} element={appR.element} />
                            })
                        }
                    </Routes>
                </section>
            </div>
        </div>
    )
}

export default Layout