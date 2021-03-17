import cn from 'classnames';
import st from './style.module.css';

const LayoutBlock = ({title="layout title", urlBg, colorBg, children}) => {
    const style = {};
    if (urlBg) {style.backgroundImage = `url(${urlBg})`};
    if (colorBg) {style.backgroundColor = colorBg};
    return (
        <section className={st.root} style={style}>
            <div className={st.wrapper}>
                <article>
                    <div className={st.title}>
                        <h3>{title}</h3>
                        <span className={st.separator}></span>
                    </div>
                    <div className={cn(st.desc, st.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;