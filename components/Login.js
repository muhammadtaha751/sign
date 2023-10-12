import { useState } from "react"
import { login } from '../config/Firebase'

function login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = () => {
        login(email, password)
    }
    return (
        <div className="signin">
            <h3>Signin</h3>
            <input onChange={e => (setEmail)(e.target.value)} placeholder="Entet your email" type="email" />
            <input onChange={e => (setPassword)(e.target.value)} placeholder="Entet your password" type="password" />
            <button onClick={signin}>Signin</button>
        </div>
    )
}
export default login