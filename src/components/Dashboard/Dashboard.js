import { useEffect, useState } from "react";
import { retrieveAllPokemonFromPokedex } from "../../api/PokemonApiService";
import PokeBallImg from '../../assets/imgs/pokeball-icon.png';

function Dashboard() {

    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState(null)


    useEffect(() => refreshPokedex(), [])

    function refreshPokedex() {
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
                                        (species) => (
                                            <tr key={species.orderId}>
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
                <>
                    <h1>Loading Pokedex.....</h1>
                    <h3 style={{ marginBottom: "5px" }}>(this might take a few secs)</h3>
                    <img src={PokeBallImg} className="pokeball-spinner" alt="Pokeball" />
                </>
            )}
        </div>
    )
}

export default Dashboard;