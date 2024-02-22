import React from "react";

const Aleatorio = (props) => {
    const { min, max } = props;
    var sort = min + Math.floor(Math.random() * (max - min + 1));
    return (
        <>
            <h2>Número sorteado foi {sort}</h2>
        </>
    )
}

export default Aleatorio;