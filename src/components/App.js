import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithConfirm from "./PopupWithConfirm";
import PopupWithImage from "./PopupWithImage";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [user, setUser] = React.useState({})
  const [cards, setCards] = React.useState([])
  const [selectedCard, setSelectedCard] = React.useState({})

  useEffect(() => {
    api.getAll()
    .then(([allCards, userData]) => {
      setCards(allCards)
      setUser(userData)
    })
      .catch((err) => console.log(err)) 
  }, []);



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
  
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          userName={user.name}
          userDescription={user.about}
          userAvatar={user.avatar}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={onCardClick}
        />
        <Footer />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseClick={handlePopupCloseClick}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCloseClick={handlePopupCloseClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseClick={handlePopupCloseClick}
        />
        <PopupWithConfirm
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onCloseClick={handlePopupCloseClick}
        />
        <PopupWithImage
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          onCloseClick={handlePopupCloseClick}
          card={selectedCard}
        />
      </div>
    </div>

  )
}

export default App;
