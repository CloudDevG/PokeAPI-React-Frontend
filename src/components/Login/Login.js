import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (await authContext.login(username, password)) {
            navigate(`/dashboard`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                Kennected Pokedex
            </div>
            <div className="card-body">
                <h3 className="card-title">Login</h3>
                <div className="login">
                    {showErrorMessage && <div className="errorMessage">Incorrect username or password! Please check your credentials and try again</div>}
                    <div className="container p-4">
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={handleUsernameChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={handlePasswordChange} />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row h-100 justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;