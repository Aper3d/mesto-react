import React from "react";

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card)
    };
    return (
        <li className="element">
                <button className="element__delete-button hover" type="button" aria-label="Удалить"/>
                <img src={props.link} alt={props.name} className="element__photo" onClick={handleCardClick}/>
                <div className="element__container">
                    <h2 className="element__description">{props.name}</h2>
                    <div className="element__like-container">
                        <button className="element__like-button" type="button" aria-label="Лайк" />
                         <p className="element__like-counter">{props.likes}</p>
                    </div>
                </div>
            </li>
    )
};

export default Card;