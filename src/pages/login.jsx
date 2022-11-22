
import { onLogin } from '../store/actions/user.actions'
import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getUserDetails = async (ev) => {
        let username = ev.target[0].value
        let password = ev.target[1].value
        let user = { username, password }
        try {
            const loggedUser = await dispatch(onLogin(user))
            setUser(loggedUser)
            navigate('/toy')
        }
        catch (err) {
            console.log('Cannot log in ... :', err)
        }

    }

    return (
        <section className="login-container">
            <h2>Login</h2 >
            {user ? <div> </div>
                : <div> <form onSubmit={getUserDetails}>
                    <label>Enter Username :</label>
                    <input placeholder="Enter Username.." type="text" /><br></br>
                    <label>Enter Password :</label>
                    <input placeholder="Enter Password.." type="password" /><br></br>
                    <button className="btn">Log In</button>
                </form>
                </div>}
        </section >
    )
}