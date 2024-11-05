import '../global-styles/styles.scss';
import './page-styles/Editor.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header/Header';
import AddCard from '../components/flashcard/add-card/AddCard';
import Flashcard from '../components/flashcard/flashcard-edit-mode/Flashcard';
import FolderEdit from '../components/folder/folder-edit-mode/FolderEdit';
import TitleText from '../components/title-text/TitleText'

import { BackToHomeButton } from '../components/button/NavigationButtons';
import useEditorLogic from './Editor/useEditorLogic.js';

export default function Editor() {

  const navigate = useNavigate();

  const {
    folders,
    folderData,
    handleAddFolder,
    handleDeleteFolder,
    handleAddCard,
    handleDeleteCard,
    updateFlashcardFront,
    updateFlashcardBack,
    updateTitle,
    saveFolder,
    deleteCurrentFolder,
    NavigateUpOneFolder,
    handleNavigateFolder
  } = useEditorLogic(navigate);

  return (
    <div className="App">
      {console.log(JSON.stringify(folderData.nestedFolders, null, 2))}
      <Header>Question Editor</Header>
      
      <div className="page-header"><TitleText>Flashcards</TitleText></div>

      <div className="folder-mode-info-header-container">
        <div className="current-directory">
          <b>Directory: </b>
          <u className="current-directory-link">{folderData.path}</u>
        </div>

        <div className="folder-utils-container">
          <div className="edit-title">
            <input
              type="text"
              className="title-input"
              placeholder="Add a title..."
              value={folderData.name || ""}
              onChange={(e) => updateTitle(e.target.value)}
            />
          </div>

          <div className="folder-mode-button-container">
            <button className="main-button" onClick={() => NavigateUpOneFolder(folderData.path)}>Up 1 folder</button>
            <button className="main-button" onClick={() => saveFolder()}>Save</button>
            <button className="main-button" onClick={() => deleteCurrentFolder()}>Delete</button>
            <BackToHomeButton />
          </div>
        </div>
      </div>

      <div className="edit-container">
        <div className="edit-flashcard-container">
          {(folderData.flashcards || []).map((flashcard) => (
            <Flashcard
              key={flashcard.id}
              cardNumber={flashcard.cardNumber}
              cardContents={flashcard}
              onDelete={() => handleDeleteCard(flashcard.id)}
              onUpdateFront={(newFront) => updateFlashcardFront(folderData.flashcards.findIndex(card => card.id === flashcard.id), newFront)}
              onUpdateBack={(newBack) => updateFlashcardBack(folderData.flashcards.findIndex(card => card.id === flashcard.id), newBack)}
            />
          ))}
          <AddCard onClick={handleAddCard}>Card</AddCard>
        </div>

        <div className="edit-folder-container">
        <div className="page-header"><TitleText>Folders</TitleText></div>
          <div className="folder-edit-icon-container">
            {folders.map((folder) => (
              <FolderEdit
                key={folder.id}
                folderPath={folder.path}
                folderData={folder}
                handleNavigateFolder={handleNavigateFolder}
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