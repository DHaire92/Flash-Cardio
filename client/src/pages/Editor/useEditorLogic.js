import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addFolder, getFolder, updateFolder, deleteFolder, getParentPath } from '../../api/folderAPIs';
import { blankFolder } from '../../models/blank_folder_object';

export default function useEditorLogic(navigate) {
  const [flashcards, setFlashcards] = useState([]);
  const [folders, setFolders] = useState([]);
  const [title, setTitle] = useState('');
  const [folderData, setFolderData] = useState([]);
  const { '*': folderPath } = useParams();

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const folderData = await getFolder(folderPath);
        setFolderData(folderData);
        setTitle(folderData.name || "");                     
        setFlashcards(folderData.flashcards || []);      

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
  };

  const handleDeleteFolder = async (folderPath, id) => {
    try {
      await deleteFolder(folderPath);
  
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
      cardNumber: flashcards.length + 1,
    };
    setFlashcards([...flashcards, newFlashcard]);
    setFolderData({
      ...folderData,
      flashcards: [...folderData.flashcards, newFlashcard]
    });
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    setFlashcards(updatedFlashcards);
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateFlashcardFront = (index, newFront) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].front = newFront;
    setFlashcards(updatedFlashcards);
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateFlashcardBack = (index, newBack) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].back = newBack;
    setFlashcards(updatedFlashcards);
    setFolderData({
      ...folderData,
      flashcards: updatedFlashcards
    });
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
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
    navigate('/Home');
  };

  const NavigateUpOneFolder = async (folderPath) => {
    const parentPath = await getParentPath(folderPath, 2);

    if (parentPath && parentPath != "flashcard-folders") {
      navigate(`/Editor/${parentPath}`);
    } else {
      navigate('/Home');
    }
  }

  return {
    title,
    flashcards,
    folders,
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
  };
}
