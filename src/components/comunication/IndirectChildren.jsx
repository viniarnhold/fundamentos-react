import React from "react";

const IndirectChildren = (props) => {
    const min = 10;
    const max = 60;
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                e => props.quandoClicar('João', gerarIdade, gerarNerd)
            }>Fornecer Informações</button>
        </div>
    )
}

export default IndirectChildren;