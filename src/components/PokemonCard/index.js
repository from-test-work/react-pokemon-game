import style from './style.module.css';
import cardBackSide from '../../assets/card-back-side.jpg'
import cn from 'classnames';

const PokemonCard = ({id, name, img, type, values, isActive = false, onChangeParentState}) => {
    const handleClick = () => {
        onChangeParentState && onChangeParentState({id, isActive});
    }

    return (
        <div className={style.root} onClick={handleClick}>
            <div className={cn(style.pokemonCard, {[style.active]: isActive})}>
                <div className={style.cardFront}>
                    <div className={cn(style.wrap, style.front)}>
                        <div className={cn(style.pokemon, style[type])}>
                            <div className={style.values}>
                                <div className={cn(style.count, style.top)}>
                                    {values.top}
                                </div>
                                <div className={cn(style.count, style.right)}>
                                    {values.right}
                                </div>
                                <div className={cn(style.count, style.bottom)}>
                                    {values.bottom}
                                </div>
                                <div className={cn(style.count, style.left)}>
                                    {values.left}
                                </div>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={style.info}>
                                <span className={style.number}>#{id}</span>
                                <h3 className={style.name}>{name}</h3>
                                <small className={style.type}>Type:
                                    <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.cardBack}>
                    <div className={cn(style.wrap, style.back)}>
                        <img src={cardBackSide} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;