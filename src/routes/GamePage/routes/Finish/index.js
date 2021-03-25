import {useContext} from "react";
import {useHistory} from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContext";
import cn from "classnames";

import style from "./style.module.css";

const FinishPage = () => {
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();

    const myCards =  Object.values(pokemonsContext.pokemons);
    const enemyCards = pokemonsContext.enemyPopemons;

    console.log('####: myCards', myCards);
    console.log('####: enemyCards', enemyCards);

    const handleEndtGameClick = () => {
        console.log(pokemonsContext);
        pokemonsContext.onClearContext();
        history.push({pathname: '/game/'});
    }
    return (
        <>
            <div className={style.flex}>
                {
                    myCards.map(({id, name, img, type, values}) => (
                        <div
                            key={id}>
                            <PokemonCard
                                className={cn(style.card, style.noSelected)}
                                key={id}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={style.buttonWrap}>
                <button onClick={handleEndtGameClick}>END GAME</button>
            </div>
            <div className={style.flex}>
                {
                    enemyCards.map(({id, name, img, type, values, isSelected}) => (
                        <div
                            key={id}>
                            <PokemonCard
                                className={style.card}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={isSelected}
                            />
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default FinishPage;