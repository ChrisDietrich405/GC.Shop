import { useState } from "react"

import "./styles.css"

export default function CreateAccount() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addName = (e) => {
        setName(e.target.value)
    }

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
                    <h3>Create account</h3>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" value={name} onChange={addName}  />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="text" id="email" value={email} onChange={addEmail}  />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="text" placeholder="At least 6 characters" id="password" value={password} onChange={addPassword}  />
                    </label>
                    <button type="submit">Create your C.G.Shop account</button>
                </form>
            
        </div>
    )


}
