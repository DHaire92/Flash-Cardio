import { collection, addDoc } from "firebase/firestore";
import { db } from "../../pages/App";

const AddTestFolder = () => {

  const addTestFolder = async () => {
    try {
      const folderCollectionRef = collection(db, "flashcard-folders");

      const testFolder = {
        name: 'Folder 1',
        files: ['Flashcard 1.1', 'Flashcard 1.2'],
      };

      const docRef = await addDoc(folderCollectionRef, testFolder);
      console.log("folder added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  };

  return (
    <div>
      <button className="main-button" onClick={addTestFolder}> Add Test Folder </button>
    </div>
  );
};

export default AddTestFolder;
