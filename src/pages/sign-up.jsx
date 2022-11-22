import { userService } from '../services/user.service.js'
import { onSignup } from '../store/actions/user.actions'
import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const SignUp = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

    const getUserDetails = async (ev) => {
        let username = ev.target[0].value
        let password = ev.target[1].value
        let fullname = ev.target[2].value
        let user = { fullname, username, password }
        setUser(user)
        dispatch(onSignup(user))
        navigate('/toy')
        ev.target[0].value = ''
        ev.target[1].value = ''
        ev.target[2].value = ''
    }

    return (
        <div className="sign-up-container">
            {!user &&
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={getUserDetails}>
                        <label>User Name: </label>
                        <input placeholder="Enter Username.." type="text" /><br></br>
                        <label>Password: </label>
                        <input placeholder="Enter Password.." type="password" /><br></br>
                        <label>Full Name: </label>
                        <input placeholder="Enter FullName.." type="text" /><br />
                        <button className="btn">Sign Up</button>
                    </form>
                </div>
            }
        </div>)
}
