function ImagePopup(props) {
    return (
        <div className={`popup popup_view ${props.isOpen ? `popup_open` : ""}`}>
            <div className="popup__overlay" onClick={props.onCloseClick} />
            <figure className="popup__figure">
                <button className="popup__close-button hover" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <img className="popup__image"
                    src={props.card.link}
                    alt={props.card.name}></img>
                <figcaption className="popup__caption">{props.card.name}</figcaption>
            </figure>
        </div>
    )
}
export default ImagePopup