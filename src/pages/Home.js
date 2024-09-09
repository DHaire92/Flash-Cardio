import React from "react";
import QuestionList from "../models/QuestionList";
import { EditorNavButton, BackToLoginButton } from "../components/NavigationButtons";

function Home() {
  
    return (
      <div className="App">
        <h1 className="header">Home</h1>
          <EditorNavButton />
          <div>
            <BackToLoginButton />
          </div>
      </div>
    );
  }
  

  
  export default Home;
  