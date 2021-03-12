import style from './style.module.css';

const FooterBlock = () => {
    return (
        <footer>
            <div className={style.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default FooterBlock;