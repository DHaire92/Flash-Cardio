import './page-styles/Home.scss'
import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/header/Header";
import FolderWindow from '../components/main-window/folder-window/FolderWindow'
import { BackToLoginButton } from "../components/button/NavigationButtons";
import { addFolder } from "../api/folderAPIs";
import { blankFolder } from "../models/blank_folder_object";

function Home() {
  const navigate = useNavigate();

  const handleAddNewFolder = async () => {
    const newFolder = await addFolder('flashcard-folders', blankFolder);
    navigate(`/Editor/${newFolder.path}`)
  };
  
  return (
    <div className="App">
      <div className="site-container">
          <Header>Home</Header>
          <div className="site-body-container">
            <div className="page-header-container">
              <div className="page-header">Your Library</div>
            </div>

            <div className="home-page-body">
              <div className="buttons-container">
                <button onClick={handleAddNewFolder} className='main-button'>
                  Add New
                </button>
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