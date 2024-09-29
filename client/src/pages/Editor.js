import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../global-styles/styles.css';
import './page-styles/Editor.css';
import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import AddCard from "../components/flashcard/add-card/AddCard";
import Flashcard from "../components/flashcard/flashcard-edit-mode/Flashcard";
import { addFolder, updateFolder, deleteFolder } from "../components/folder-logic/firestoreUtils";

export default function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  let folderData = location.state?.folderEditData;

  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (folderData?.name) {
      setTitle(folderData.name);
    }
    if (folderData?.flashcards) {
      setFlashcards(folderData.flashcards);
    }
  }, [folderData]);

  const handleAddCard = () => {
    const newFlashcard = {
      id: Date.now(),
      front: "",
      back: "",
      cardNumber: flashcards.length + 1,
    };

    setFlashcards([...flashcards, newFlashcard]);
    folderData.flashcards.push(newFlashcard);
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    const reorderedFlashcards = updatedFlashcards.map((card, index) => ({
      ...card,
      cardNumber: index + 1,
    }));
    setFlashcards(reorderedFlashcards);
    
    folderData.flashcards = reorderedFlashcards;
  };

  const updateFlashcardFront = (index, newFront) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].front = newFront;
    setFlashcards(updatedFlashcards);
    
    folderData.flashcards[index].front = newFront;
  };
  
  const updateFlashcardBack = (index, newBack) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].back = newBack;
    setFlashcards(updatedFlashcards);
    
    folderData.flashcards[index].back = newBack;
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
    folderData.name = newTitle;
  };

  return (
    <div className="App">
      <Header>Question Editor</Header>

      <p>{JSON.stringify(folderData, null, 2)}</p>
      
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
              value={title}
              onChange={(e) => {
                updateTitle(e.target.value);
              }}
            />
          </div>
          <div className="folder-mode-button-container">              
              <button className="main-button" onClick={(e) => {
              e.stopPropagation();
              updateFolder(folderData.id, folderData)}}>Save</button>

              <button className="main-button" onClick={(e) => {
              e.stopPropagation();
              deleteFolder(folderData.id);
              navigate('/Home');
              }}>Delete</button>

            <BackToHomeButton />
          </div>
        </div>
      </div>

      <div className="edit-flashcard-container">
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id} // Use the unique id as the key
            cardNumber={flashcard.cardNumber}
            cardContents={flashcard}
            onDelete={() => handleDeleteCard(flashcard.id)}
            onUpdateFront={(newFront) => updateFlashcardFront(flashcards.findIndex(card => card.id === flashcard.id), newFront)}
            onUpdateBack={(newBack) => updateFlashcardBack(flashcards.findIndex(card => card.id === flashcard.id), newBack)}
          />
        ))}
        <AddCard onClick={handleAddCard} />
      </div>
    </div>
  );
}