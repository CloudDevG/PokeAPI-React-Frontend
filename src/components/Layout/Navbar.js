import { Link } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import KennectedIcon from '../../assets/imgs/kennected-logo-white.png';
import PokemonTextLogo from '../../assets/imgs/pokemon-logo-txt.png';

function Navbar() {

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    function logout() {
        authContext.logout();
    }

    return (

        <header className="border-bottom border-light border-5 mb-5 p-2" style={{ backgroundColor: "#FF0000" }}>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="/">
                            <img src={KennectedIcon} className="kennected-nav-icon" alt="Kennected" /><img src={PokemonTextLogo} className="pokemon-text-logo" alt="Pokemon" />
                        </a>
                        <div className="collapse navbar-collapse">
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!isAuthenticated &&
                                    <button className="btn btn-primary"><Link className="nav-link" to="/login"><span className="nav-button-text">Login</span></Link></button>}
                            </li>
                            <li className="nav-item">
                                {isAuthenticated &&
                                    <>
                                        <button className="btn btn-warning" style={{ marginRight: '10px' }}><Link className="nav-link" to="/dashboard"><span className="nav-button-text">Dashboard</span></Link></button>
                                        <button className="btn btn-primary"><Link className="nav-link" to="/logout" onClick={logout}><span className="nav-button-text">Logout</span></Link></button>
                                    </>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Navbar;