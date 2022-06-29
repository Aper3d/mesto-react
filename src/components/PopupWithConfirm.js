import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirm(props) {

    function handleSubmit(e) {
        e.preventDefault()
    };

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            name={'confirm'}
            title={'Вы уверены?'}
            buttonText={'Да'}
            onSubmit={handleSubmit}>
        </PopupWithForm>
    )
}
export default PopupWithConfirm;