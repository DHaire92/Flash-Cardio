import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../pages/App';

function DeleteFolder() {
  const [folderStructure, setFolderStructure] = useState([]);

  useEffect(() => {
    const folderCollectionRef = collection(db, 'flashcard-folders');

    const unsubscribe = onSnapshot(folderCollectionRef, (snapshot) => {
      const folders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFolderStructure(folders);
    });

    return () => unsubscribe();
  }, []);

  const deleteFolder = async (folderId) => {
    try {
      await deleteDoc(doc(db, 'flashcard-folders', folderId));
      console.log("Folder deleted");
    } catch (error) {
      console.error("Error deleting: ", error);
    }
  };

  return (
    <div className="delete-folder">
        {folderStructure.map((folder) => (
            <button className="main-button" onClick={() => deleteFolder(folder.id)}>
              Delete {folder.name}
            </button>
        ))}
    </div>
  );
}

export default DeleteFolder;
