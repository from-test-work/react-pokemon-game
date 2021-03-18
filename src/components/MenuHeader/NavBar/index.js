import cn from 'classnames';
import style from './style.module.css'

const NavBar = ({isOpen, bgActive = false, onChangeMenuOpen }) => {

    return (
        <nav className={cn(style.root, {
            [style.bgActive] : bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>LOGO</p>
                <div
                   className={cn(style.menuButton, {
                       [style.active]: isOpen
                   })}
                   onClick={onChangeMenuOpen}
                >
                    <span />
                </div>
            </div>
        </nav>
    );
};


export default NavBar;