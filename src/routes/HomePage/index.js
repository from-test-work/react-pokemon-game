import React from "react";
import HeaderBlock from "../../components/HeaderBlock";
import LayoutBlock from "../../components/LayoutBlock";


import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";

import '../../index.css';
import '../../App.css';


function HomePage() {
    return (
        <>
            <HeaderBlock />

            <LayoutBlock title="asodihjaiosda" urlBg={bg2}>
                <p>1.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>
                <p>1.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>
            </LayoutBlock>

            <LayoutBlock colorBg="#e2e2e2">
                <p>2.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>
                <p>2.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>

            </LayoutBlock>
            <LayoutBlock urlBg={bg3}>
                <p>3.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>
                <p>3.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro.</p>
            </LayoutBlock>
        </>
    );
}

export default HomePage;
