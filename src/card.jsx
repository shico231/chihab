import Cards from './cards_data.jsx';
import React from 'react';

const Card = ({searchfield}) => {

    const filtered_cards = Cards.filter(card => card.title.toLowerCase().includes(searchfield.toLowerCase()));

    return (
        <div className="card-container">
        {filtered_cards.map(card=>
            <div className="bg-red dib br3 ma2 grow shadow-5 " key={card.title} id='card'>
                <img src = {card.img_source} ></img>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
            </div>
        )}
        </div>
    ) 
}


export default Card ;