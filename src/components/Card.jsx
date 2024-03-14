import React from 'react';
import './card.css';

function Card(props) {
    const {data, handleClick} = props;

    return (
        <div className="card">
            <div className="advice-num">
                Advice #{data.id}
            </div>
            <div className="advice-text">
                "{data ? data.advice : "Loading..."}"
            </div>
            <button className="dice-button" onClick={handleClick}>
                <img src="src/assets/icon-dice.svg" alt="dice" />
            </button>
        </div>
    )
}

export default Card;