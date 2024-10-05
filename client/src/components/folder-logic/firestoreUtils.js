import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../pages/App";

const generateFolderPath = (parentFolderPath, docId) => {
  return parentFolderPath 
    ? `${parentFolderPath}/${docId}` 
    : `flashcard-folders/${docId}`;
};

export const addRootFolder = async (fData) => {
  try {    
    const folderCollectionRef = collection(db, "flashcard-folders");
    const docRef = await addDoc(folderCollectionRef, fData);
    fData = await updateID(fData, docRef.id);
    await updateFolderPath(fData, docRef.id, "");
    console.log("Root Folder added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding folder: ", e);
    throw e;
  }
}

export const addSubFolder = async (parentFolderPath, fData) => {
  try {
    const folderCollectionRef = collection(db, parentFolderPath);
    const docRef = await addDoc(folderCollectionRef, fData);
    fData = await updateID(fData, docRef.id);
    await updateFolderPath(fData, docRef.id, parentFolderPath);

    console.log("Sub Folder added with ID: ", docRef.id);

    const folderSnapshot = await getDoc(docRef);
    return { id: folderSnapshot.id, ...fData };
  } catch (e) {
    console.error("Error adding folder: ", e);
    throw e;
  }
};

export const updateFolder = async (folderId, updatedData, parentFolderPath) => {
  try {
    const folderPath = parentFolderPath ? parentFolderPath : "flashcard-folders";
    const folderDocRef = doc(db, folderPath, folderId);
    await updateDoc(folderDocRef, updatedData);
    console.log(`Folder with ID ${folderId} successfully updated.`);
    return folderDocRef;
  } catch (e) {
    console.error(`Error updating folder: ${folderId}`, e);
    throw e;
  }
}

export const updateFolderPath = async (fData, docId, parentFolderPath) => {
  // parentFolderPath: where the document should go
  // fData.path: the path to the document
  try {
    fData.path = generateFolderPath(parentFolderPath, docId);
    
    await updateFolder(docId, fData, parentFolderPath);
    console.log("Folder path updated.");
    return fData.path;
  } catch (e) {
    console.error("Error updating path: ", e);
    throw e;
  }
};

export const updateID = async (fData, id) => {
  try {
    fData.id = id;
    return fData;
  } catch (e) {
    throw e;
  }
}

export const deleteFolder = async (folderPath) => {
  try {
    await deleteDoc(doc(db, folderPath));
    console.log("Folder deleted");
  } catch (e) {
    console.error("Error deleting: ", e);
    throw e;
  }
};

export const getFolderData = async (folderPath) => {
  try {
    const folderDocRef = doc(db, folderPath);
  } catch (e) {
    console.error("Error getting folder:", e);
    throw e;
  }
};