import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, removeUser, onLogin, onSignup, onLogout, loadUser } from '../store/actions/user.actions'
import { useEffect } from "react";

export const AppHeader = () => {
    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [user])

    return (
        <header className='main-header'>

            <section className='container'>
                <h1 className="logo">Toyzzz .</h1>
                <nav>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/chart' >Charts</NavLink>
                    <NavLink to='/toy' >Toys</NavLink>
                </nav>
            </section>
            {!user && <NavLink to="/signUp">Sign Up!</NavLink>} | |
            {!user && <NavLink to="/login">Sign In!</NavLink>}
            {user && <span>Hello {user.fullname}</span>}
            {user && <button onClick={() => dispatch(onLogout())}>Log Out</button>}
        </header>
    )
}
