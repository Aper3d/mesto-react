function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_open` : ""}`}>
            <div className="popup__overlay"  onClick={props.onCloseClick}/>
            <div className="popup__container">
                <button className="popup__close-button hover" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__forms form_type_${props.name}`} onSubmit={props.onSubmit}>
                    {props.children}
                    <button className="popup__submit-button" type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm