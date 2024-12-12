// src/Home.js
import './page-styles/Home.scss';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import Header from "../components/header/Header";
import { EditorNavButton, BackToLoginButton } from "../components/button/NavigationButtons";
import FolderWindow from '../components/main-window/folder-window/FolderWindow';
import { addFolder } from "../api/folderAPIs";
import { blankFolder } from "../models/blank_folder_object";
import TitleText from '../components/title-text/TitleText';
import { db } from './App';

function Home() {
  const { userId } = useParams(); // Get userId from route
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchUserFolders = async () => {
      try {
        const response = await fetch(`/api/folders?userId=${userId}`); // Pass userId in query params
        if (!response.ok) {
          throw new Error("Failed to fetch folders");
        }
        const folders = await response.json();
        setFolders(folders); // Update state with user-specific folders
      } catch (error) {
        console.error("Error fetching user folders:", error);
      }
    };
  
    fetchUserFolders();
  }, [userId]);

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
                  onClick={async (e) => {
                    const newFolder = await addFolder('flashcard-folders', { ...blankFolder, userId }); // Add userId to folder
                    navigate(`/Editor/${newFolder.path}`);
                  }} 
                  className="main-button">Add New</button>
                <BackToLoginButton />
              </div>
            </div>

            <div className="folder-window-container">
              <FolderWindow userId={userId} /> {/* Pass folders to FolderWindow */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
