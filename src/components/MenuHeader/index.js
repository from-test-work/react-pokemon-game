import React, { useState } from "react";

import Menu from "./Menu"
import NavBar from "./NavBar"

const MenuHeader = ({bgActive}) => {
    const [isOpen, setOpen] = useState(null);

    const handleMenuOpen = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <Menu isOpen={isOpen} onChangeParentState={handleMenuOpen} />
            <NavBar isOpen={isOpen} bgActive={bgActive} onChangeMenuOpen={handleMenuOpen} />
        </>
    );
};

export default MenuHeader;