import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    };
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            userName: name,
            userDescription: description
        });
    };

    React.useEffect(() => {
        if (props.isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [props.isOpen, currentUser]);

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
                placeholder="Имя пользователя" minLength="2" maxLength="40" required onChange={handleNameChange} value={name} />
            <span className="popup__error user-name-error" />
            <input name="userDescription" type="text" className="popup__input" id="user-description"
                placeholder="Описание" minLength="2" maxLength="200" required onChange={handleDescriptionChange} value={description}/>
            <span className="popup__error user-description-error" />
        </PopupWithForm>
    )
}
export default EditProfilePopup;