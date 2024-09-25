import React from "react";
import './page-styles/Home.css'
import Header from "../components/header/Header";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import FolderWindow from '../components/main-window/folder-window/FolderWindow'

function Home() {
  
    return (
      <div className="App">
          <div className="site">
            <div className="site-container">
                <Header>Home</Header>
                <div className="site-body-container">
                  <div className="page-header">Your Library</div>
                  <div className="buttons-header-container">
                      <EditorNavButton />
                      <BackToLoginButton />
                  </div>
                  <div className="folder-window-container">
                      <FolderWindow />
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  

  
  export default Home;
  