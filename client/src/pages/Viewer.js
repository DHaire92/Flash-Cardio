import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import '../global-styles/styles.scss';
import './page-styles/Viewer.scss';

import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import FlashcardStudy from "../components/flashcard/flashcard-study-mode/Flashcard-study";

import { getFolder } from "../api/folderAPIs";

export default function Viewer() {
  const { '*': folderPath } = useParams();  
  const [folderData, setFolderData] = useState(null); 
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

  const navigate = useNavigate();
  const location = useLocation();
  //let folderData = location.state?.folderEditData;

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
      <Header>Viewer Mode</Header>

      <p>{JSON.stringify(folderData, null, 2)}</p>
      
      <div className="folder-mode-info-header-container">
        <div className="page-header">Study Mode</div>
        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">{title}</u>
        </div>
      </div>

      <div className="flashcard-container">
        {flashcards.map((flashcard, index) => (
          <FlashcardStudy
            key={flashcard.id || index} // Use the unique id as the key
            cardNumber={index + 1}
            cardContents={flashcard}
          />
        ))}
      </div>
      <BackToHomeButton />
    </div>
  );
}