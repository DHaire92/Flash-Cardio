import './page-styles/Home.scss'
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import FolderWindow from '../components/main-window/folder-window/FolderWindow'
import { addFolder } from "../api/folderAPIs";
import { blankFolder } from "../models/blank_folder_object";
import TitleText from '../components/title-text/TitleText';

function Home() {
  const navigate = useNavigate();
  
    return (
      <div className="App">
        <div className="site-container">
            <Header>Home</Header>
            <div className="site-body-container">
              <div className="page-header-container">
                <div className="page-header">
                  <TitleText>Your Library</TitleText>
                </div>
              </div>

              <div className="home-page-body">
                <div className="buttons-header-container">
                  <div className="buttons-container">
                    <button 
                    onClick={ async (e) => {
                        const newFolder = await addFolder('flashcard-folders', blankFolder);
                        navigate(`/Editor/${newFolder.path}`);
                    }} 
                    className='main-button'>Add New</button>
                    <BackToLoginButton />
                  </div>
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
