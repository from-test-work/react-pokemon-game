import {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

import style from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getPokemonsAsync, selectPokemonsData, selectPokemonsLoading} from "../../../../store/pokemons";

const StartPage = () => {
    const firebaseContext = useContext(FirebaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const isLoading = useSelector(selectPokemonsLoading);
    const pokemonsRedux = useSelector(selectPokemonsData);
    const dispatch = useDispatch();
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    console.log(isLoading);

    useEffect(() => {
        dispatch(getPokemonsAsync());

        firebaseContext.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebaseContext.offPokemonsSoket();
    }, [dispatch, firebaseContext])

    useEffect(() => {
        setPokemons(pokemonsRedux);
    }, [pokemonsRedux]);


    const handleChangeActiveSelected = (key) => {
        const pokemon = {...pokemons[key]}
        pokemonsContext.onSelectedPokemons(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))

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

            <div className={style.flex}>
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