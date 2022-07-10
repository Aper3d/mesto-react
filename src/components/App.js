import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithConfirm from "./PopupWithConfirm";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])
  const [selectedCard, setSelectedCard] = React.useState({})

  useEffect(() => {
    api.getAll()
      .then(([allCards, userData]) => {
        setCards(allCards)
        setCurrentUser(userData)
      })
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    if (isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen || isImagePopupOpen|| isConfirmPopupOpen || selectedCard) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isEditProfilePopupOpen, isEditAvatarPopupOpen, isAddPlacePopupOpen, isImagePopupOpen, isConfirmPopupOpen, selectedCard]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };
  function handleConfirmDelete() {
    setIsConfirmPopupOpen(true)
  };

  function onCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsConfirmPopupOpen(false)
    setIsImagePopupOpen(false)
  };
  function handlePopupCloseClick(e) {
    if (e.target.classList.contains('popup__overlay')) {
      closeAllPopups()
    }
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if(!isLiked) {
      api.like(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));  
    }  else {
      api.dislike(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
    }
  };

  function handleCardDelete(card) {
    api.delete(card._id)
    .then(() => {
      setCards((items) => items.filter((c) => c._id !== card._id && c));
    })
    .catch((err) => console.error(err));
  };

  function handleUpdateUser(data) {
    api.handleUserInfo(data)
    .then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    })
    .catch((err) => console.error(err));
  };

  function handleUpdateAvatar(data) {
    api.handleUserAvatar(data)
    .then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    })
    .catch((err) => console.error(err));
  };

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.error(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onCloseClick={handlePopupCloseClick}
            onSubmit={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onCloseClick={handlePopupCloseClick}
            onSubmit={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseClick={handlePopupCloseClick}
            onSubmit={handleUpdateUser}
          />
          <PopupWithConfirm
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onCloseClick={handlePopupCloseClick}
          />
          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            onCloseClick={handlePopupCloseClick}
            card={selectedCard}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
