import React from "react";
import Studants from "../../data/Studants";

const StudantsList = () => {
    const studants = Studants.map(studant => {
        return <li key={studant.id}>
            {studant.id}) {studant.nome} -> {studant.nota}
        </li>
    }

    )
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {studants}
            </ul>
        </div>
    )
}

export default StudantsList;