import React from 'react';
import Veeno from "../img/blanc-bleu.png"

const Header = () => {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <img src={Veeno} width="120"/>
        </div>
    )
}

export default Header;