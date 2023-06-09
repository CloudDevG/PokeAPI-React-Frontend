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
        <header className="mb-3 p-2" style={{ backgroundColor: "#FF0000", borderBottom: "4px solid #FFDE00" }}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FF0000" }}>
                <div className='container-fluid'>
                    <div className='nav-item'>
                        <button className="navbar-toggler" style={{ backgroundColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#pokedexNavbarToggler" aria-controls="pokedexNavbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src={KennectedIcon} className="kennected-nav-icon" alt="Kennected Pokedex" />
                        </a>
                    </div>
                    <div className='nav-item'>
                        <img src={PokemonTextLogo} className="pokemon-text-logo" alt="Pokemon" />
                    </div>
                    <div className='nav-item'>
                        <div className="collapse navbar-collapse" id="pokedexNavbarToggler">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    {!isAuthenticated &&
                                        <button className="btn btn-primary"><Link className="nav-link" to="/login"><span className="nav-button-text">Login</span></Link></button>}
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated &&
                                        <button className="btn btn-primary"><Link className="nav-link" to="/logout" onClick={logout}><span className="nav-button-text">Logout</span></Link></button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;