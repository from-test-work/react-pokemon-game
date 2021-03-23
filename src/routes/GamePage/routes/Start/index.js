import {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";

import style from './style.module.css';
import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";


const StartPage = () => {
    const firebaseContext = useContext(FirebaseContext);
    const pokemonsContext = useContext(PokemonContext);

    const history = useHistory();

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebaseContext.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebaseContext.offPokemonsSoket();
    }, [])

    const handleChangeActiveSelected = (key) => {
        const pokemon = {...pokemons[key]}
        pokemonsContext.onSelectedPokemons(key, pokemon);
        if (pokemons[key]) {
            const copyState = {...pokemons};
            copyState[key]["selected"] = !copyState[key]["selected"]

            setPokemons(copyState);
        }
    };

    const handleStartGameClick = () => {
        history.push("/game/board");
    }


    return (
        <div>
            <div className={style.buttonWrap}>
                <button onClick={handleStartGameClick}
                        disabled={Object.keys(pokemonsContext.pokemons).length < 5}>
                    Start Game
                </button>
            </div>

            <div className="flex">
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, selected}]) => (
                        <PokemonCard
                            className={style.card}
                            key={key}
                            keyId={key}
                            id={id}
                            name={name}
                            img={img}
                            type={type}
                            values={values}
                            isActive={true}
                            isSelected={selected}
                            onChangeParentState={ () => {
                                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                    handleChangeActiveSelected(key, selected)
                                }
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default StartPage;