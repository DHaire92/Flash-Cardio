import './page-styles/Home.scss'
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import FolderWindow from '../components/main-window/folder-window/FolderWindow'
import { addFolder } from "../components/folder-logic/firestoreUtils";
import { blankFolder } from "../models/blank_folder_object";

function Home() {
  const navigate = useNavigate();
  
    return (
      <div className="App">
        <div className="site-container">
            <Header>Home</Header>
            <div className="site-body-container">
              <div className="page-header">Your Library</div>

              <div className="buttons-header-container">
                <button 
                onClick={ async (e) => {
                    await addFolder('flashcard-folders', blankFolder);
                    navigate('/Editor', { state: { folderEditData: blankFolder} });
                }} 
                className='main-button'>Add New</button>
                <BackToLoginButton />
              </div>

              <div className="folder-window-container">
                <FolderWindow />
              </div>
            </div>
        </div>
      </div>
    );
  }
  

  
  export default Home;
