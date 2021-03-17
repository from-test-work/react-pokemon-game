import style from './style.module.css';

const HeaderBlock = ({
                         title = "Title",
                         desc = "Description",
                         onClickButton
                     }) => {

    const handleClick = () => {
        console.log('####: <Header />');
        onClickButton && onClickButton('game');
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button onClick={handleClick}>
                    START GAME
                </button>
            </div>
        </header>
    )
}

export default HeaderBlock;
