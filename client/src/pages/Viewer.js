import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import '../global-styles/styles.scss';
import './page-styles/Viewer.scss';

import { BackToHomeButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header";
import FlashcardView from "../components/flashcard/flashcard-view-mode/Flashcard-view";

import { getFolder } from "../api/folderAPIs";

export default function Viewer() {
  const { '*': folderPath } = useParams();  // Getting folder path from the URL
  const [folderData, setFolderData] = useState(null); // Folder data state
  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const folderData = await getFolder(folderPath); // Fetching data using folderPath
        setFolderData(folderData); // Setting fetched data to state
      } catch (error) {
        console.error("Error fetching folder data:", error);
      }
    };

    if (folderPath) {
      fetchFolderData();  // Only fetch if folderPath exists
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
      <Header>Study Flashcards</Header>

      <p>{JSON.stringify(folderData, null, 2)}</p>
      
      <div className="folder-mode-info-header-container">
        <div className="page-header">Viewer Mode</div>
        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">Study Set</u>
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
        <BackToHomeButton />
      </div>
    </div>
  );
}