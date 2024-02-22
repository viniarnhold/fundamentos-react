import React from "react";
import If from "./If";

const UserInfo = (props) => {
    const nome = props.nome;
    return (
        <div>
            <If teste={nome}>
                Seja bem vindo <strong>{props.nome}</strong>!
            </If>
            <If teste={!nome}>
                Seja bem vindo Anônimo!
            </If>
        </div>
    )
}

export default UserInfo;