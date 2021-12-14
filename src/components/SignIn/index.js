import { Link } from "react-router-dom"

import { useState } from "react"

import "../../assets/css/form.css"

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addEmail = (e) => {
        setEmail(e.target.value)
    }

    const addPassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <h2>C.G.Shop</h2>
                <form onSubmit={submit}>
                    <h3>Sign In</h3>
                    <label htmlFor="email">
                        Email or Phone Number
                        <input type="text" id="name" value={email} onChange={addEmail}  />
                    </label>
                    <label htmlFor="password">
                        <div className="password-container">
                            <span className="password">Password</span><span className="forgot-password">Forgot Password?</span> 
                        </div>
                        
                        <input type="text" placeholder="" id="password" value={password} onChange={addPassword}  />
                        <p className="password-minimum">(At least 6 characters)</p>
                    </label>
                   
                </form>
            
        </div>
    )
}