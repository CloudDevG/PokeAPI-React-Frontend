import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import { retrieveAllPokemonFromPokedex } from "../../api/PokemonApiService";
import PokeBallImg from '../../assets/imgs/pokeball-icon.png';

function Dashboard() {

    const authContext = useAuth();

    const navigate = useNavigate();

    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState(null)


    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        setLoading(true);

        retrieveAllPokemonFromPokedex()
            .then(response => {
                setPokemonSpecies(response.data);
                setLoading(false);
            })
            .catch(error => {
                setMessage(error);
            })

    }

    return (
        <div>
            {!loading ? (
                <div className="container">
                    <h1>PokeDex - Gen #1</h1>

                    {message && <div className="alert alert-warning">{message}</div>}


                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Order #</th>
                                    <th>Name</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pokemonSpecies.map(
                                        (species, i) => (
                                            <tr key={i}>
                                                <td>{species.orderId.toString()}</td>
                                                <td>{species.name}</td>
                                                <td>{species.color}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            ) : (
                <img src={PokeBallImg} className="pokeball-spinner" alt="Pokeball" />

            )}
        </div>



    )
}

export default Dashboard;