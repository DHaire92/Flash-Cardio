import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../global-styles/styles.css';
import './page-styles/Editor.css';
import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import FlashcardView from "../components/flashcard/flashcard-view-mode/Flashcard-view";
import { addFolder, updateFolder, deleteFolder } from "../components/folder-logic/firestoreUtils";

export default function Viewer() {
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


  return (
    <div className="App">
      <Header>Question Editor</Header>

      <p>{JSON.stringify(folderData, null, 2)}</p>
      
      <div className="folder-mode-info-header-container">
        <div className="page-header">Viewer Mode</div>

        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">Study List 1</u>
        </div>
      </div>

      <div className="edit-flashcard-container">
        {flashcards.map((flashcard) => (
          <FlashcardView
            key={flashcard.id} // Use the unique id as the key
            cardNumber={flashcard.cardNumber}
            cardContents={flashcard}
          />
        ))}
      </div>
    </div>
  );
}