import { useState } from "react"

import { register } from '../config/Firebase'
function Signup() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')


    const signup = () => {
        register(email, password, fullName, age)
    }
    return (
        <div className="Signup">
            <h3>Signup</h3>
            <input onChange={e => (setFullName)(e.target.value)} placeholder="Enter your Full name" />
            <input onChange={e => (setEmail)(e.target.value)} placeholder="Enter your Emai Address" type="email" />
            <input onChange={e => (setAge)(e.target.value)} placeholder="Enter you Age" type="number" />
            <input onChange={e => (setPassword)(e.target.value)} placeholder="Enter your password" type="password" />
            <button onClick={signup}>Signup</button>
        </div>
    )
}
export default Signup