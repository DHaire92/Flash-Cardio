import axios from 'axios';

const apiUrl = "http://localhost:5000/api/folders";

export const addFolder = async (parentFolderPath, fData) => {
  try {
    const response = await axios.post(`${apiUrl}/addFolder`, { parentFolderPath, fData });
    return response.data;
  } catch (error) {
    console.error("Error adding folder:", error);
    throw error;
  }
};

export const getFolder = async (folderPath) => {
  try {
    const response = await axios.get(`${apiUrl}/getFolder/${encodeURIComponent(folderPath)}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving folder:", error);
    throw error;
  }
};

export const updateFolder = async (updatedData) => {
  try {
    const response = await axios.put(`${apiUrl}/updateFolder`, { updatedData });
    return response.data;
  } catch (error) {
    console.error("Error updating folder", error);
    throw error;
  }
};

export const deleteFolder = async (folderPath) => {
  try {
    const response = await axios.delete(`${apiUrl}/deleteFolder/${encodeURIComponent(folderPath)}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};

export const fetchFoldersRecursively = async (path) => {
  try {
    const response = await axios.get(`${apiUrl}/fetchFoldersRecursively/${encodeURIComponent(path)}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching folders recursively:", error);
    throw error;
  }
};

export const getParentPath = async (folderPath, n) => {
  try {
    const response = await axios.get(`${apiUrl}/getParentPath`, {
      params: { folderPath, n } // Use params to send query parameters
    });
    return response.data;
  } catch (error) {
    console.error("Error getting parent path:", error);
    throw error;
  }
};
