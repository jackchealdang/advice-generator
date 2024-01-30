import React from 'react';
import './card.css';

function Card(props) {
    const {input} = props;

    return (
        <div className="card">
            {input}
        </div>
    )
}

export default Card;