import style from './style.module.css';

const HeaderBlock = ({title="Title", desc="Description"}) => {
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </header>
    )
}

export default HeaderBlock;
