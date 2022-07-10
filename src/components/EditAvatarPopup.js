import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const ref = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            userAvatar: ref.current.value
        });
    };

    React.useEffect(() => {
        ref.current.value = '';
    }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            name={'avatar'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}>
            <input ref={ref} name="userAvatar" type="url" className="popup__input" id="user-avatar"
                placeholder="Ссылка на изображение" required />
            <span className="popup__error user-avatar-error" />
        </PopupWithForm>
    )
}
export default EditAvatarPopup;