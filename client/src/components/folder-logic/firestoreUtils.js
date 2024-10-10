import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../pages/App";

export const addFolder = async (parentFolderPath, fData) => {
  try {
    const folderCollectionRef = collection(db, parentFolderPath);
    const docRef = await addDoc(folderCollectionRef, fData);
    
    fData.id = docRef.id;
    await updateFolderPath(fData, parentFolderPath);

    const folderSnapshot = await getDoc(docRef);
    return { id: folderSnapshot.id, ...fData };
  } catch (e) {
    console.error("Error adding folder: ", e);
    throw e;
  }
};

export const getFolder = async (folderPath) => {
  try {
    const docRef = doc(db, folderPath);
    const folderSnapshot = await getDoc(docRef);

    if (folderSnapshot.exists()) {
      return { id: folderSnapshot.id, ...folderSnapshot.data() };
    } else {
      console.log("No document found at the specified path.");
      return null;
    }
  } catch (e) {
    console.error("Error retrieving: ", e);
    throw e;
  }
}

export const updateFolder = async (updatedData) => {
  try {
    const folderPath = getParentPath(updatedData.path, 1);
    const folderDocRef = doc(db, folderPath, updatedData.id);
    
    await updateDoc(folderDocRef, updatedData);
    return folderDocRef;
  } catch (e) {
    console.error(`Error updating folder: ${updatedData.id}`, e);
    throw e;
  }
}

export const deleteFolder = async (folderPath) => {
  try {
    await deleteDoc(doc(db, folderPath));
  } catch (e) {
    console.error("Error deleting: ", e);
    throw e;
  }
};

export const getParentPath = (folderPath, n) => {
  if (!folderPath) { return 'flashcard-folders'; }
  const pathParts = folderPath.split('/');
  
  for (let i = 0; i < n && pathParts.length > 0; i++) {
    pathParts.pop();
  }

  const parentPath = pathParts.join('/');
  return parentPath;
};

const updateFolderPath = async (fData, parentFolderPath) => {
  try {
    fData.path = `${parentFolderPath}/${fData.id}`
    await updateFolder(fData);
    return fData.path;
  } catch (e) {
    console.error("Error updating path: ", e);
    throw e;
  }
};