import { useState, useEffect } from 'react';
import { addFolder, updateFolder, deleteFolder, getFolder, getParentPath } from '../../components/folder-logic/firestoreUtils';
import { blankFolder } from '../../models/blank_folder_object';

export default function useEditorLogic(folderData, navigate) {
  const [flashcards, setFlashcards] = useState([]);
  const [folders, setFolders] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (folderData?.name) {
      setTitle(folderData.name);
    }
    if (folderData?.flashcards) {
      setFlashcards(folderData.flashcards);
    }
    if (folderData?.nestedFolders) {
      setFolders(folderData.nestedFolders);
    }
  }, [folderData]);

  const handleAddFolder = async () => {
    const newFolder = await addFolder(`${folderData.path}/subfolders`, blankFolder);
    setFolders([...folders, newFolder]);
    folderData.nestedFolders.push(newFolder);
  };

  const handleDeleteFolder = async (folderPath, id) => {
    await deleteFolder(folderPath);
    const updatedFolders = folders.filter((folder) => folder.id !== id);
    setFolders(updatedFolders);
    folderData.nestedFolders = updatedFolders;
  };

  const handleAddCard = () => {
    const newFlashcard = {
      id: Date.now(),
      front: "",
      back: "",
      cardNumber: flashcards.length + 1,
    };
    setFlashcards([...flashcards, newFlashcard]);
    folderData.flashcards.push(newFlashcard);
  };

  const handleDeleteCard = (id) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    setFlashcards(updatedFlashcards);
    folderData.flashcards = updatedFlashcards;
  };

  const updateFlashcardFront = (index, newFront) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].front = newFront;
    setFlashcards(updatedFlashcards);
    folderData.flashcards[index].front = newFront;
  };

  const updateFlashcardBack = (index, newBack) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].back = newBack;
    setFlashcards(updatedFlashcards);
    folderData.flashcards[index].back = newBack;
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
    folderData.name = newTitle;
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

    if (parentPath) {
      let parentData = await getFolder(parentPath);
      navigate('/Editor', { state: { folderEditData: parentData} });
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
