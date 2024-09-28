import React from "react";
import { useNavigate } from "react-router-dom";
import './page-styles/Home.css'
import Header from "../components/header/Header";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import FolderWindow from '../components/main-window/folder-window/FolderWindow'
import { blankFolder } from "../models/blank_folder_object";
import { addFolder } from "../components/folder-logic/firestoreUtils";

function Home() {
  const navigate = useNavigate();
  
    return (
      <div className="App">
          <div className="site">
            <div className="site-container">
                <Header>Home</Header>
                <div className="site-body-container">
                  <div className="page-header">Your Library</div>
                  <div className="buttons-header-container">
                    <button onClick={ async (e) => {
                        e.stopPropagation();
                        let id = await addFolder(blankFolder);
                        blankFolder.id = id;
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
      </div>
    );
  }
  

  
  export default Home;
