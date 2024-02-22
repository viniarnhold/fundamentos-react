import React from "react";
import "./Card.css"

const Card = props => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;