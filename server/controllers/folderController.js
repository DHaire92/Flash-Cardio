const { db } = require("../config");
const { collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc } = require("firebase/firestore");

exports.addFolder = async (req, res) => {
  const { parentFolderPath, fData } = req.body;
  try {
    const folderCollectionRef = collection(db, parentFolderPath);
    const docRef = await addDoc(folderCollectionRef, fData);

    fData.id = docRef.id;
    fData.path = `${parentFolderPath}/${fData.id}`;

    await updateDoc(doc(db, parentFolderPath, fData.id), { path: fData.path });
    
    res.status(201).json({ id: docRef.id, ...fData });
  } catch (error) {
    console.error("Error adding folder:", error);
    res.status(500).json({ error: "Error adding folder" });
  }
};

exports.getFolder = async (req, res) => {
  const { folderPath } = req.params;
  try {
    const docRef = doc(db, folderPath);
    const folderSnapshot = await getDoc(docRef);

    if (folderSnapshot.exists()) {
      res.json({ id: folderSnapshot.id, ...folderSnapshot.data() });
    } else {
      res.status(404).json({ message: "Folder not found" });
    }
  } catch (error) {
    console.error("Error retrieving folder:", error);
    res.status(500).json({ error: "Error retrieving folder" });
  }
};

exports.updateFolder = async (req, res) => {
  const updatedData = req.body.updatedData;

  try {
    const folderPath = await this.getParentPathHelper(updatedData.path, 1);
    const folderDocRef = doc(db, folderPath, updatedData.id);

    await updateDoc(folderDocRef, updatedData);
    res.json({ message: "Folder updated successfully" });
  } catch (error) {
    console.error("Error updating folder:", error);
    res.status(500).json({ error: "Error updating folder" });
  }
};

exports.deleteFolder = async (req, res) => {
  const { folderPath } = req.params;
  try {
    await deleteDoc(doc(db, folderPath));
    res.json({ message: "Folder deleted successfully" });
  } catch (error) {
    console.error("Error deleting folder:", error);
    res.status(500).json({ error: "Error deleting folder" });
  }
};

exports.getCollection = async (req, res) => {
  const { path } = req.params;

  if (!path) {
    return res.status(400).json({ error: "Path parameter is required" });
  }

  try {
    const folderCollectionRef = collection(db, path);
    const snapshot = await getDocs(folderCollectionRef);

    const collectionsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(collectionsData)
  } catch (error) {
    console.error("Error retrieving collection:", error);
    res.status(500).json({ error: "Error retrieving collection" });
  }
};

exports.fetchFoldersRecursively = async (req, res) => {
  const path = 'flashcard-folders';
  
  const fetchRecursively = async (path) => {
      try {
          const folderCollectionRef = collection(db, path);
          const snapshot = await getDocs(folderCollectionRef);

          const folders = await Promise.all(snapshot.docs.map(async (doc) => {
              const folderData = { id: doc.id, ...doc.data() }; 

              const nestedFolders = await fetchRecursively(`${path}/${doc.id}/subfolders`);
              return { ...folderData, nestedFolders };
          }));

          return folders;
      } catch (fetchError) {
          console.error(`Error fetching path: ${path}`, fetchError);
          throw fetchError;
      }
  };

  try {
      const folders = await fetchRecursively(path);
      res.json(folders);
  } catch (error) {
      console.error("Error fetching folders recursively:", error);
      res.status(500).json({ error: "Error fetching folders recursively" });
  }
};
  
exports.getParentPathHelper = (folderPath, n) => {
  folderPath = folderPath || "flashcard-folders";

  const pathParts = folderPath.split('/');
  for (let i = 0; i < n && pathParts.length > 0; i++) {
    pathParts.pop();
  }
  
  return pathParts.join('/');
};

// Original API route
exports.getParentPath = async (req, res) => {
  const { folderPath, n } = req.query
  const parentPath = exports.getParentPathHelper(folderPath, Number(n));
  res.json(parentPath);
};