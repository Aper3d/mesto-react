import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    function handleSubmit(e) {
        e.preventDefault()
    };

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            name={'addPlace'}
            title={'Новое место'}
            buttonText={'Создать'}
            onSubmit={handleSubmit}>
            <input name="name" type="text" className="popup__input" id="place-name" placeholder="Название"
                minLength="2" maxLength="40" required />
            <span className="popup__error place-name-error" />
            <input name="link" type="url" className="popup__input" id="place-link"
                placeholder="Ссылка на изображение" required />
            <span className="popup__error place-link-error" />
        </PopupWithForm>
    )
}
export default AddPlacePopup;