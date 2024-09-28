import React, { useState } from "react";
import '../global-styles/styles.css';
import './page-styles/Editor.css';
import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import AddCard from "../components/flashcard/add-card/AddCard";
import Flashcard from "../components/flashcard/flashcard-edit-mode/Flashcard";

export default function Editor() {
  const [flashcards, setFlashcards] = useState([{ id: 1, cardNumber: 1 }, { id: 2, cardNumber: 2 }]);

  const handleAddCard = () => {
    const newCardNumber = flashcards.length + 1;
    setFlashcards([...flashcards, { id: Date.now(), cardNumber: newCardNumber }]);
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    const reorderedFlashcards = updatedFlashcards.map((card, index) => ({
      ...card,
      cardNumber: index + 1,
    }));
    setFlashcards(reorderedFlashcards);
  };

  return (
    <div className="App">
      <Header>Question Editor</Header>

      <div className="folder-mode-info-header-container">
        <div className="page-header">Folder Mode</div>

        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">Folder 1 / Folder 2</u>
        </div>

        <div className="folder-utils-container">
          <div className="edit-title">
            <input
              type="text"
              className="title-input"
              placeholder="Add a title..."
            />
          </div>
          <BackToHomeButton />
        </div>
      </div>

      <div className="edit-flashcard-container">
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            cardNumber={flashcard.cardNumber}
            onDelete={() => handleDeleteCard(flashcard.id)}
          />
        ))}
        <AddCard onClick={handleAddCard} />
      </div>
    </div>
  );
}
