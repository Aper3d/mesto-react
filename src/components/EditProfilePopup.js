import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

    function handleSubmit(e) {
        e.preventDefault()
    };

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            name={'profile'}
            title={'Редактировать профиль'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}>
            <input name="userName" type="text" className="popup__input" id="user-name"
                placeholder="Имя пользователя" minLength="2" maxLength="40" required />
            <span className="popup__error user-name-error" />
            <input name="userDescription" type="text" className="popup__input" id="user-description"
                placeholder="Описание пользователя" minLength="2" maxLength="200" required />
            <span className="popup__error user-description-error" />
        </PopupWithForm>
    )
}
export default EditProfilePopup;