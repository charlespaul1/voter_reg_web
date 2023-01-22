import React, {useState} from "react";
export const Login = (props) => {
    //creating a state
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" />
            <label htmlFor="password">Password</label>
            <input  value = {pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*********" />
            <button>Log in</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register') }>Don't have an account ? <br/>register here</button>
        </div>

    )
};