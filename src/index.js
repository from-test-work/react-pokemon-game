import React from 'react';
import ReactDom from 'react-dom';

import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from "./components/LayoutBlock";
import FooterBlock from "./components/FooterBlock";

import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";

import './index.css';

const el = (
    <>
        <HeaderBlock />

        <LayoutBlock urlBg={bg2}/>
        <LayoutBlock colorBg={"#e2e2e2"}/>
        <LayoutBlock urlBg={bg3}/>

        <FooterBlock />
    </>
);

ReactDom.render(el, document.getElementById('root'))