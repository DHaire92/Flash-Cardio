import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addFolder, getFolder, updateFolder, deleteFolder, getParentPath } from '../../api/folderAPIs';
import { blankFolder } from '../../models/blank_folder_object';
import { getAuth } from "firebase/auth";

export default function useEditorLogic(navigate) {
  const [folders, setFolders] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const { '*': folderPath } = useParams();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const folderData = await getFolder(folderPath);
        setFolderData(folderData);                         

        const expandedFolders = await Promise.all(
          (folderData.nestedFolders || []).map(async (folderLink) => {
            try {
              return await getFolder(folderLink);
            } catch (error) {
              console.error(`Error fetching nested folder at ${folderLink}:`, error);
              return null;
            }
          })
        );
        setFolders(expandedFolders.filter((folder) => folder !== null));
      } catch (error) {
        console.error("Error fetching folder data:", error);
      }
    };

    if (folderPath) {
      fetchFolderData();
    }
  }, [folderPath]);

  const handleAddFolder = async () => {
    const newFolder = await addFolder(`${folderData.path}/subfolders`, blankFolder);
    setFolders([...folders, newFolder]);
    setFolderData({
      ...folderData,
      nestedFolders: [...folderData.nestedFolders, newFolder.path]
    });
    await saveFolder();
  };

  const handleNavigateFolder = async (path) => {
    navigate(`/Editor/${path}`);
    await saveFolder();
  }

  const handleDeleteFolder = async (folderPath, id) => {
    try {
      await deleteFolder(folderPath);
      await saveFolder();
  
      const updatedFolders = folders.filter((folder) => folder.path !== folderPath);
      setFolders(updatedFolders);
  
      // Deep clone `folderData` to prevent mutation of the existing object reference
      const updatedFolderData = {
        ...folderData,
        nestedFolders: updatedFolders.map((folder) => folder.path),
      };
  
      setFolderData(updatedFolderData);
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };
  

  const handleAddCard = () => {
    const newFlashcard = {
      id: Date.now(),
      front: "",
      back: "",
      cardNumber: folderData.flashcards.length + 1,
    };
    setFolderData({
      ...folderData,
      flashcards: [...folderData.flashcards, newFlashcard]
    });
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = folderData.flashcards.filter((card) => card.id !== id);
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateFlashcardFront = (index, newFront) => {
    const updatedFlashcards = [...folderData.flashcards];
    updatedFlashcards[index].front = newFront;
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateFlashcardBack = (index, newBack) => {
    const updatedFlashcards = [...folderData.flashcards];
    updatedFlashcards[index].back = newBack;
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateTitle = (newTitle) => {
    setFolderData({
      ...folderData,
      name: newTitle
    });
  };

  const saveFolder = async () => {
    await updateFolder(folderData);
  };

  const deleteCurrentFolder = async () => {
    await deleteFolder(folderData.path);
    const parentPath = await getParentPath(folderPath, 2);
    (parentPath) ? navigate(`/Editor/${parentPath}`) : navigate(`/Home/${user.uid}`);
  };

  const NavigateUpOneFolder = async (folderPath) => {
    const parentPath = await getParentPath(folderPath, 2);
    (parentPath) ? navigate(`/Editor/${parentPath}`) : navigate(`/Home/${user.uid}`);
  }

  return {
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
    handleNavigateFolder,
  };
}