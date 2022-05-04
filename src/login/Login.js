import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AES from "crypto-js/aes";
import styles from './login.module.css'
import { login, resetStatus, selectKey } from '../features/login.feature';
import logo from '../assets/images/vodafone.png'


const Login = () => {
    //state
    const [showPassword, setShowPassword] = useState(false)
    const [credential, setCredential] = useState({})

    const keyStatus = useSelector(state => state.login?.keyStatus)
    const keyError = useSelector(state => state.login?.keyError)

    const loginStatus = useSelector(state => state.login?.status)
    const loginError = useSelector(state => state.login?.loginError)

    const dispatch = useDispatch()

    const publicKey = useSelector(selectKey)

    //functions

    const handleInputCredentials = (e) => {
        let key = e.target.name;
        let val = e.target.value
        setCredential(prev => {
            return {
                ...prev, [key]: val
            }
        })
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const genPass = Math.random().toString(36).slice(2, 15)
        if (keyStatus === "succeeded") {
            const encryptedAES = AES.encrypt(genPass, publicKey)
            const loginCredentials = AES.encrypt(credential, encryptedAES)
            dispatch(login({ username:credential.username, key: encryptedAES, data: loginCredentials }))
        } else {
            const timmer = setTimeout(() => {
                dispatch(resetStatus())
                clearTimeout(timmer)
            }, 1000);
            if (keyError) {
                console.log("Could not retrieve public key.");
            } else {
                console.log("Login error...")
            }
        }
    }

    const renderLogin = () => {
        return (
            <form onSubmit={handleLogin} className={styles.login_form}>
                {loginError === "failed" && keyError === "failed" &&
                    <div className='errorResponse'>
                        Login Failed: Your user ID or password may be incorrect
                    </div>
                }
                <input type="text" name="username" placeholder='Username' className='input__control' onChange={handleInputCredentials} />
                <br />
                <div style={{ position: "relative" }}>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder='Password' className='input__control' onChange={handleInputCredentials} />
                    {credential.password && <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'} style={{ position: "absolute", right: 15, top: 13, cursor: "pointer" }} onClick={togglePassword} ></i>}
                </div>
                <br />
                {
                    loginStatus === "loading" ?
                        <button className={styles.login_btn} disabled>Wait...</button>
                        :
                        <button className={styles.login_btn}>LOGIN</button>
                }
            </form>
        )
    }

    return (
        <div className={styles.login}>
            <div className={styles.login_left}>
                <section className={styles.login_description}>
                    <h1 className={styles.login_title}>Welcome To Ananse</h1>
                    <h2 className={styles.login_details}>Vodafone business solution, business search, and opportunity prospecting.</h2>
                </section>
            </div>
            <div className={styles.login_right}>
                <img src={logo} alt="logo" width="70" style={{margin:"auto auto 0 auto"}} />
                <br />
                <h1 className={styles.login_header}>Ananse Login</h1>
                <br />

                {renderLogin()}
            </div>
        </div>
    )
}

export default Login