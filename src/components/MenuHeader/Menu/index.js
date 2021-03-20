import cn from 'classnames';
import {Link} from 'react-router-dom'
import style from './style.module.css';

const MENU = [
    {
        title: 'HOME', to: 'home'
    },
    {
        title: 'GAME', to: 'game'
    },
    {
        title: 'ABOUT', to: 'about'
    },
    {
        title: 'CONTACT', to: 'contact'
    },
]

const Menu = ({isOpen, onChangeParentState}) => {
    const handleClickToLink = () => {
        onChangeParentState && onChangeParentState(!isOpen);
    }
    return (
        <div
            className={cn(style.menuContainer, {
                [style.active]: isOpen === true,
                [style.deactive]: isOpen === false
            })}>
            <div className={style.overlay}/>
            <div className={style.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={handleClickToLink}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Menu;