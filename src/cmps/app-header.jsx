import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { onLogout } from '../store/actions/user.actions'
import { useEffect } from "react";

export const AppHeader = () => {
    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [user])

    return (
        <header className='main-header'>
            <div className="auth-container">
                {!user && <NavLink className="auth-link" to="/signUp">Sign Up</NavLink>}
                {!user && <NavLink className="auth-link" to="/login">Log In</NavLink>}
            </div>

            <section className='container'>
                <h1 className="logo">Toyzzz .</h1>
                <nav>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/chart' >Charts</NavLink>
                    <NavLink to='/toy' >Toys</NavLink>
                </nav>
            </section>
            {user && <span>Hello {user.fullname}</span>}
            {user && <button onClick={() => dispatch(onLogout())}>Log Out</button>}
        </header>
    )
}
