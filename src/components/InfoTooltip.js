import React from 'react';
import error from '../images/icon/error.svg';
import success from '../images/icon/success.svg';

const InfoTooltip = ({ isOpen, onCloseClick, onClose, isSuccess }) => {

    const image = isSuccess ? success : error;
    function tooltip() {
        return isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."
    };

    return (
        <div className={`popup ${isOpen ? `popup_open` : ""}`}>
            <div className="popup__overlay"  onClick={onCloseClick}/>
            <div className="popup__container">
                <button className="popup__close-button hover" type="button" aria-label="Закрыть" onClick={onClose}></button>
                <img className="popup__tooltip-image" src={image} alt={tooltip()} />
                <p className="popup__tooltip-message">{tooltip()}</p>
            </div>
        </div>
    )


}

export default InfoTooltip;