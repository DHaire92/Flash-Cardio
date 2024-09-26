// src/hooks/useFolderUpdate.js
import { useState } from 'react';

const useFolderUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateFolderStructure = async (path, folderStructure) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/update-folder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path, folderStructure }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message); // Successfully updated
      } else {
        console.error(result.error);
        setError(result.error);
      }
    } catch (error) {
      console.error('Error updating folder structure:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { updateFolderStructure, loading, error };
};

export default useFolderUpdate;