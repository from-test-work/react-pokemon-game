import {useRouteMatch, Switch, Route} from 'react-router-dom';
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {useState} from 'react';


const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [enemyPopemons, setEnemyPopemons] = useState([]);
    const [statusGame, setStatusGame] = useState("");
    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if(prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];
                return copyState;
            }
            return{
                ...prevState,
                [key]: pokemon
            }
        })
    }

    const handleEnemyPokemons = (enemyPokemons) => {
        setEnemyPopemons(enemyPokemons);
    }

    const handleClearContext = () => {
        setSelectedPokemons({});
        setEnemyPopemons([]);
    };

    const handleStatusGame = (statusGame) => {
        setStatusGame(statusGame);
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            enemyPopemons,
            statusGame,
            onSelectedPokemons: handleSelectedPokemons,
            onEnemyPokemons: handleEnemyPokemons,
            onClearContext: handleClearContext,
            onSetStatusGame: handleStatusGame,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;