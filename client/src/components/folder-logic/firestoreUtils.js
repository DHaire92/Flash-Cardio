import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../pages/App";

export const addFolder = async (fData) => {
  try {    
    const folderCollectionRef = collection(db, "flashcard-folders");
    const docRef = await addDoc(folderCollectionRef, fData);
    console.log("Folder added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding folder: ", e);
    throw e;
  }
};

export const updateFolder = async (folderId, updatedData) => {
  try {
    const folderDocRef = doc(db, "flashcard-folders", folderId);
    await updateDoc(folderDocRef, updatedData);
    console.log(`Folder with ID ${folderId} successfully updated.`);
    return folderDocRef;
  } catch (e) {
    console.error(`Error updating folder: ${folderId}`, e);
    throw e;
  }
};

export const deleteFolder = async (folderId) => {
  try {
    await deleteDoc(doc(db, 'flashcard-folders', folderId));
    console.log("Folder deleted");
  } catch (e) {
    console.error("Error deleting: ", e);
    throw e;
  }
};
