import React, { useState } from "react";
import "./Input.css";

const Input = () => {
    const [valor, setValor] = useState('Inicial');

    function onChange(e) {
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <h1>{valor}</h1>
            <div style={{display:'flex', flexDirection:'column'}}>
                <input value={valor} onChange={onChange} />
                <input value={valor} onChange={onChange} />
            </div>
        </div>
    )
}

export default Input;