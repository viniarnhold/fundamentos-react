import React from "react";

const PairConditional = (props) => {
    return (
        <div>
            {props.numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}

export default PairConditional;