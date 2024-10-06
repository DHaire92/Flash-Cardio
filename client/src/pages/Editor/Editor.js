import '../../global-styles/styles.css';
import '../page-styles/Editor.css';

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../components/header/Header';
import AddCard from '../../components/flashcard/add-card/AddCard';
import Flashcard from '../../components/flashcard/flashcard-edit-mode/Flashcard';
import FolderEdit from '../../components/folder/folder-edit-mode/FolderEdit';

import { BackToHomeButton } from '../../components/button/NavigationButtons';
import useEditorLogic from './useEditorLogic';

export default function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  const folderData = location.state?.folderEditData;

  const {
    title,
    flashcards,
    folders,
    handleAddFolder,
    handleDeleteFolder,
    handleAddCard,
    handleDeleteCard,
    updateFlashcardFront,
    updateFlashcardBack,
    updateTitle,
    saveFolder,
    deleteCurrentFolder,
  } = useEditorLogic(folderData, navigate);

  return (
    <div className="App">
      <Header>Question Editor</Header>

      <p>{JSON.stringify(folderData, null, 2)}</p>
      
      <div className="folder-mode-info-header-container">
        <div className="page-header">Flashcards</div>
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
              onChange={(e) => updateTitle(e.target.value)}
            />
          </div>
          <div className="folder-mode-button-container">
            <button className="main-button" onClick={saveFolder}>Save</button>
            <button className="main-button" onClick={deleteCurrentFolder}>Delete</button>
            <BackToHomeButton />
          </div>
        </div>
      </div>

      <div className="edit-container">
        <div className="edit-flashcard-container">
          {flashcards.map((flashcard) => (
            <Flashcard
              key={flashcard.id}
              cardNumber={flashcard.cardNumber}
              cardContents={flashcard}
              onDelete={() => handleDeleteCard(flashcard.id)}
              onUpdateFront={(newFront) => updateFlashcardFront(flashcards.findIndex(card => card.id === flashcard.id), newFront)}
              onUpdateBack={(newBack) => updateFlashcardBack(flashcards.findIndex(card => card.id === flashcard.id), newBack)}
            />
          ))}
          <AddCard onClick={handleAddCard}>Card</AddCard>
        </div>

        <div className="edit-folder-container">
          <div className="page-header">Folders</div>
          <div className="folder-edit-icon-container">
            {folders.map((folder) => (
              <FolderEdit
                key={folder.id}
                folderPath={folder.path}
                folderData={folder}
                onDelete={() => handleDeleteFolder(folder.path, folder.id)}
              />
            ))}
          </div>
          <AddCard onClick={handleAddFolder}>Folder</AddCard>
        </div>
      </div>
    </div>
  );
}
