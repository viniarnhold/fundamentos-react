import React, { useState } from "react";
import IndirectChildren from "./IndirectChildren";

const Indirect = (props) => {
    const [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd, setNerd] = useState(false);
    // nome idade nerd

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd ? 'Verdadeiro' : 'Falso'}</div>
            <IndirectChildren quandoClicar={fornecerInformacoes}></IndirectChildren>
        </div>
    )
}

export default Indirect;