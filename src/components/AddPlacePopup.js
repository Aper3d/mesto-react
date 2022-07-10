import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    };
    function handleLinkChange(e) {
        setLink(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            name: name,
            link: link
        });
    };

    React.useEffect(() => {
        if (props.isOpen) {
            setName('');
            setLink('');
        }
    }, [props.isOpen]);

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
                minLength="2" maxLength="40" required onChange={handleNameChange} />
            <span className="popup__error place-name-error" />
            <input name="link" type="url" className="popup__input" id="place-link"
                placeholder="Ссылка на изображение" required onChange={handleLinkChange} />
            <span className="popup__error place-link-error" />
        </PopupWithForm>
    )
}
export default AddPlacePopup;