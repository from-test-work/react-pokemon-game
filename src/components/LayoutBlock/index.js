import style from './style.module.css';

const LayoutBlock = ({title="layout title", desc="Layout description", urlBg, colorBg}) => {
    return (
        <section className={style.root} style={
            urlBg ? {backgroundImage: `url(${urlBg})`} : colorBg ? {backgroundColor: colorBg} : {}
        }>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    {/* eslint-disable-next-line no-sequences */}
                    <div className={style.desc, style.full}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;