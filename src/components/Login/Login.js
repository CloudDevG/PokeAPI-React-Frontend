import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (await authContext.login(username, password)) {
            navigate(`/dashboard`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="login">

            <h1 className="login-title-txt">Kennected Pokedex</h1>
            <h2 className="login-title-txt">Login</h2>
            {showErrorMessage && <div className="errorMessage">Incorrect username or password! Please check your credentials and try again</div>}

            <div className="container m-3 p-4">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={handleUsernameChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>




                {/* <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div> */}

            </div>













        </div>
    )
}

export default Login;