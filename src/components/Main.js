import React from "react";
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    


    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar"/>
                    <button type="button" className="profile__avatar-button" title="Изменить аватар" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button hover" type="button"
                        aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__add-button hover" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__grid">
                    {props.cards.map((card, key) =>
                        <Card
                        key={key}
                        card={card}
                        likes={card.likes.length}
                        link={card.link}
                        name={card.link}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        />)}
                </ul>
            </section>
        </main>
    )
}
export default Main