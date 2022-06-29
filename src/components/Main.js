import React from "react";
import Card from './Card';

function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={props.userAvatar} alt={props.userName} className="profile__avatar"/>
                    <button type="button" className="profile__avatar-button" title="Изменить аватар" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{props.userName}</h1>
                    <button className="profile__edit-button hover" type="button"
                        aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{props.userDescription}</p>
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
                        />)}
                </ul>
            </section>
        </main>
    )
}
export default Main