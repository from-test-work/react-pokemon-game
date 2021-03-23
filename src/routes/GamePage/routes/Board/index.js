import {useContext} from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';

import style from './style.module.css';
import './assets/board.png'

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    return (
        <div className={style.root}>
            <div className={style.playerOne}>
                {
                    Object.entries(pokemons)
                        .map(([key, {id, name, img, type, values, isSelected}]) => (
                            <PokemonCard
                                className={style.card}
                                key={key}
                                uuid={key}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                minimize
                                isSelected={isSelected}
                            />
                        ))
                }
            </div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;