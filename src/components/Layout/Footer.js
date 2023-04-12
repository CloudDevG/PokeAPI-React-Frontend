import { useContext } from "react";
import { AuthContext } from "../../security/AuthContext";

function Footer() {
    const authContext = useContext(AuthContext);

    console.log(`Footer component - ${authContext.number}`);

    return (
        <footer className="bg-info text-center text-lg-start fixed-bottom">
            <div className="text-center p-3" style={{ backgroundColor: '#3B4CCA', color: '#FFDE00' }}>
                © 2023 - Kennected Pokedex
            </div>
        </footer>
    )
}

export default Footer;