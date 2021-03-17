import cn from 'classnames';
import style from './style.module.css'

const NavBar = ({navState, onChangeMenuOpen }) => {
    console.log('navState: ', navState);

    return (
        <nav className={style.root}>
            <div className={style.navWrapper}>
                <p className={style.brand}>LOGO</p>
                <a href="/#"
                   className={
                       cn(
                           style.menuButton,
                           {[style[`${navState.className}`]]: navState.status}
                       )
                    }
                    onClick={onChangeMenuOpen}
                >
                    <span />
                </a>
            </div>
        </nav>
    );
};


export default NavBar;