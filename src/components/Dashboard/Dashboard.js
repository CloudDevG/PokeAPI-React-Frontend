import { useEffect, useState } from "react";
import { retrieveAllPokemonFromPokedexByGeneration } from "../../api/PokemonApiService";
import PokeBallImg from '../../assets/imgs/pokeball-icon.png';

function Dashboard() {
    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => refreshPokedex(), []);

    function refreshPokedex() {
        setLoading(true);

        retrieveAllPokemonFromPokedexByGeneration(1)
            .then(response => {
                setPokemonSpecies(response.data);
                setLoading(false);
            })
            .catch(error => {
                setMessage(error);
                setLoading(false);
            })
    };

    const handleSelectColorChange = (e) => {
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

                    <div className="card">
                        <div className="card-header">
                            Kennected Pokedex
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">PokeDex - Gen #1</h5>
                            <p className="card-text">{message && <div className="alert alert-warning">{message}</div>}</p>
                            <div className="form-group">
                                <div className='pokemon-color-select'>
                                    <label htmlFor="colors">Color Selection: </label>
                                    <select className="form-control" onChange={handleSelectColorChange} name="colors" id="colors">
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
                    </div>
                </div>
            ) : (
                <div className="pokeball-spinner-container">
                    <div className="card">
                        <div className="card-header">
                            Kennected Pokedex
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Loading Pokedex.....</h5>
                            <p className="card-text">(this will take just a few moments)</p>
                            <img src={PokeBallImg} className="pokeball-spinner" alt="Pokeball" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard;