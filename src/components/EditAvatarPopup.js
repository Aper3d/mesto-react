import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    function handleSubmit(e) {
        e.preventDefault()
    };

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            name={'avatar'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}>
            <input name="userAvatar" type="url" className="popup__input" id="user-avatar"
                placeholder="Ссылка на изображение" required />
            <span className="popup__error user-avatar-error" />
        </PopupWithForm>
    )
}
export default EditAvatarPopup;