import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import '../global-styles/styles.scss';
import './page-styles/Viewer.scss';
import "../components/flashcard-study-mode/flashcard-study.scss";

import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import FlashcardStudy from "../components/flashcard-study-mode/Flashcard-study";



import { getFolder } from "../api/folderAPIs";

export default function Viewer() {
  const { '*': folderPath } = useParams();  
  const [folderData, setFolderData] = useState(null); 
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState('');

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const folderData = await getFolder(folderPath); 
        setFolderData(folderData); 
      } catch (error) {
        console.error("Error fetching folder data:", error);
      }
    };

    if (folderPath) {
      fetchFolderData();  
    }
  }, [folderPath]);

  const goToNextFlashcard = () => {
    if (currentFlashcardIndex < flashcards.length - 1) {
      setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    }
  };

  const goToPreviousFlashcard = () => {
    if (currentFlashcardIndex > 0) {
      setCurrentFlashcardIndex(currentFlashcardIndex - 1);
    }
  };

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
      <Header>Viewer Mode</Header>
      
      <div className="folder-mode-info-header-container">
        <div className="page-header">Study Mode</div>
        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">{title}</u>
          <BackToHomeButton />
        </div>
      </div>

      <div className="study-card-container">
         {flashcards.length > 0 && (
          <FlashcardStudy
            key={flashcards[currentFlashcardIndex].id || currentFlashcardIndex} // Use the unique id as the key
            cardNumber={currentFlashcardIndex + 1}
            cardContents={flashcards[currentFlashcardIndex]}
          />
        )}
      </div>

      <div className="flashcard-navigation">
        <button 
          className="main-button" 
          onClick={goToPreviousFlashcard} 
          disabled={currentFlashcardIndex === 0}
        >
          Previous
        </button>
        <button 
          className="main-button" 
          onClick={goToNextFlashcard} 
          disabled={currentFlashcardIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}