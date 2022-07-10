import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `element__delete-button hover ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`

    );
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
      );

    function handleCardClick() {
        props.onCardClick(props.card)
    };
    function handleCardLike() {
        props.onCardLike(props.card)
    };
    function handleCardDelete() {
        props.onCardDelete(props.card)
    }

    return (
        <li className="element">
            <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleCardDelete}/>
            <img src={props.link} alt={props.name} className="element__photo" onClick={handleCardClick} />
            <div className="element__container">
                <h2 className="element__description">{props.name}</h2>
                <div className="element__like-container">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleCardLike} />
                    <p className="element__like-counter">{props.likes}</p>
                </div>
            </div>
        </li>
    )
};

export default Card;