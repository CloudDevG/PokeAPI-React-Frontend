import { useNavigate } from 'react-router-dom';

function ErrorUtil() {
    const navigate = useNavigate();

    return (
        <div className="error">


            <div className="card">
                <div className="card-header">
                    Kennected Pokedex
                </div>
                <div className="card-body">
                    <h3 className="card-title">Pokedex Error</h3>
                    <p className="card-text">We apologize for the issue :(</p>
                </div>
                <div className="card-footer">
                    <div className="row h-100 justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary" onClick={() => navigate('/')}>Go To Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ErrorUtil;