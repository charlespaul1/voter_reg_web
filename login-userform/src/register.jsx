import { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label htmlFor="name">Name</label>
            <input value={name} name="name" id="name" onChange={(e) => setName } placeholder="Full name"/>
            <label htmlFor="email">Email</label>
            <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" />
            <label htmlFor="password">Password</label>
            <input  value = {pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*********" />
            <button>Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login') }>Already have an account ? <br/>Login here</button>
        </div>

    )
}