import '../global-styles/styles.css'
import './page-styles/Editor.css'
import React, { useState } from "react";
import { BackToHomeButton } from "../components/button/NavigationButtons";
import QuestionManager from "../components/questions/QuestionManager";
import Header from "../components/header/Header"
import AddCard from "../components/flashcard/add-card/AddCard";
import FlashcardView from "../components/flashcard/flashcard-view-mode/Flashcard-view";
import Flashcard from "../components/flashcard/flashcard-edit-mode/Flashcard";

export default function Editor() {

    return (
      <div className="App">
        <Header>Question Editor</Header>

          <div>
            <QuestionManager />
            <BackToHomeButton />
          </div>
          <br/>

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
                  className='title-input'
                  placeholder='Add a title...'
                />
              </div>
              <BackToHomeButton />
            </div>
          </div>

          <Flashcard cardNumber={1} />
          <Flashcard cardNumber={2} />
          <Flashcard cardNumber={3} />
          <Flashcard cardNumber={4} />

          {/* <FlashcardView cardNumber={1} />
          <FlashcardView cardNumber={2} />
          <FlashcardView cardNumber={3} />
          <FlashcardView cardNumber={4} /> */}

          <AddCard />
      </div>
    );
  }
