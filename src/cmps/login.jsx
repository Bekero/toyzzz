
import { userService } from '../services/user.service.js'
import React from 'react'

export class Login extends React.Component {

    state = {
        user: this.props.user,
        msg: null
    }

    onLogin = (ev) => {
        ev.preventDefault()
        const username = ev.target[0].value
        const password = ev.target[1].value
        userService.login({ username, password })
            .then((user) => {
                this.setState({ user })
            })
            .catch((err) => this.setState({ msg: err.response.data }))
    }

    // onLogout = () => {
    //     userService.logout()
    //         .then(() => {
    //             this.setState({ user: null })
    //         })
    // }

    render() {
        const { user, msg } = this.state

        return (
            <section className="login-container">
                <h2>Login :</h2 >
                {user ? <div>
                    {/* <h2>Hello {user.fullname}</h2> */}
                    {/* <button onClick={this.onLogout}>Log Out</button> */}
                </div>
                    : <form onSubmit={this.onLogin}>
                        <input placeholder="Enter Username.." type="text" />
                        <input placeholder="Enter Password.." type="password" />
                        <button>Sign In</button>
                        <p>{msg}</p>
                    </form>}
            </section >
        )
    }
}