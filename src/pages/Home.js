import React from "react";
import QuestionList from "../models/QuestionList";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header"
import Flashcard from "../components/flashcard/flashcard-edit-mode/Flashcard";

function Home() {
  
    return (
      <div className="App">
        <Header>Home</Header>
          <EditorNavButton />
          <div>
            <BackToLoginButton />
          </div>
      </div>
    );
  }
  

  
  export default Home;
  