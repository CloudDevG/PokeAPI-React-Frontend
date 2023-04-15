import { useEffect, useState } from "react";
import { retrieveAllPokemonFromPokedex } from "../../api/PokemonApiService";
import PokeBallImg from '../../assets/imgs/pokeball-icon.png';

function Dashboard() {

    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
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
                setLoading(false);
            })
    }

    const handleSelectChange = (e) => {
        if (e.target.value !== "all") {
            setSelectedColor(e.target.value);
        } else {
            setSelectedColor([]);
        }
    };

    return (
        <div className="dashboard">
            {!loading ? (
                <div className="container">
                    <h1>PokeDex - Gen #1</h1>
                    {message && <div className="alert alert-warning">{message}</div>}

                    <div>
                        <div className='pokemon-color-select'>
                            <label htmlFor="colors">Color Selection: </label>
                            <select onChange={handleSelectChange} name="colors" id="colors">
                                <option value="all">All</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="brown">Brown</option>
                                <option value="gray">Gray</option>
                                <option value="green">Green</option>
                                <option value="pink">Pink</option>
                                <option value="purple">Purple</option>
                                <option value="red">Red</option>
                                <option value="white">White</option>
                                <option value="yellow">Yellow</option>
                            </select>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Order #</th>
                                    <th>Name</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemonSpecies.filter((pokemon) => {
                                    if (selectedColor.length === 0) {
                                        return pokemonSpecies
                                    } else {
                                        return pokemon.color === selectedColor;
                                    }

                                }).map((species) => (
                                    <tr key={species.orderId}>
                                        <td>{species.orderId.toString()}</td>
                                        <td>{species.name}</td>
                                        <td>{species.color}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="pokeball-spinner-container">
                    <h1>Loading Pokedex.....</h1>
                    <h3 style={{ marginBottom: "10px" }}>(this will take just a few moments)</h3>
                    <img src={PokeBallImg} className="pokeball-spinner" alt="Pokeball" />
                </div>
            )}
        </div>
    )
}

export default Dashboard;