import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addFolder, getFolder, updateFolder, deleteFolder, getParentPath } from '../../api/folderAPIs';
import { blankFolder } from '../../models/blank_folder_object';

export default function useEditorLogic(navigate) {
  const [folderData, setFolderData] = useState([]);
  const { '*': folderPath } = useParams();

  useEffect(() => {
    const fetchFolderData = async () => {
      const folderData = await getFolder(folderPath);
      setFolderData(folderData);                  
    };
    fetchFolderData();
  }, [folderPath]);

  const handleAddFolder = async () => {
    const newFolder = await addFolder(`${folderData.path}/subfolders`, blankFolder);
    setFolderData({ ...folderData, nestedFolders: [...folderData.nestedFolders, newFolder.path]});
    await saveFolder();
  };

  const handleNavigateFolder = async (path) => {
    navigate(`/Editor/${path}`);
    await saveFolder();
  }

  const handleDeleteFolder = async (folderPath) => {
    await deleteFolder(folderPath);

    const updatedNestedFolders = folderData.nestedFolders.filter((path) => path !== folderPath);
    const updatedFolderData = {
      ...folderData,
      nestedFolders: updatedNestedFolders,
    };

    setFolderData(updatedFolderData);
    await updateFolder(updatedFolderData);
  };
  
  const handleAddCard = () => {
    const newFlashcard = {
      id: Date.now(),
      front: "",
      back: "",
      cardNumber: folderData.flashcards.length + 1,
    };
    setFolderData({ ...folderData, flashcards: [...folderData.flashcards, newFlashcard] });
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = folderData.flashcards.filter((card) => card.id !== id);
    setFolderData({ ...folderData, flashcards: updatedFlashcards });
  };

  const updateFlashcardFront = (index, newFront) => {
    const updatedFlashcards = [...folderData.flashcards];
    updatedFlashcards[index].front = newFront;
    setFolderData({ ...folderData, flashcards: updatedFlashcards });
  };

  const updateFlashcardBack = (index, newBack) => {
    const updatedFlashcards = [...folderData.flashcards];
    updatedFlashcards[index].back = newBack;
    setFolderData({ ...folderData, flashcards: updatedFlashcards });
  };

  const updateTitle = (newTitle) => {
    setFolderData({ ...folderData, name: newTitle });
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
    (parentPath) ? navigate(`/Editor/${parentPath}`) : navigate('/Home');
  }

  return {
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