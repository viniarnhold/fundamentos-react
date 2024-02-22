import React from "react";
import DirectChildren from "./DirectChildren";
import "./Direct.css"

const Direct = (props) => {
    return (
        <div className="Direct">
            <DirectChildren text="Essa é uma comunicação direta" number={20} boolean={true}/>
        </div>
    )
}

export default Direct;