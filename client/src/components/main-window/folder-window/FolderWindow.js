import React, { useEffect, useState } from 'react';
import './FolderWindow.scss';
import FolderWindowFolder from '../folder-window-folders/FolderWindowFolder';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../pages/App';

function FolderWindow() {
    const [folderStructure, setFolderStructure] = useState([]);

    const fetchFoldersRecursively = async (path) => {
        const folderCollectionRef = collection(db, path);
        const snapshot = await getDocs(folderCollectionRef);
        
        const folders = await Promise.all(snapshot.docs.map(async (doc) => {
            const folderData = doc.data();
            const nestedFolders = await fetchFoldersRecursively(`${path}/${doc.id}/subfolders`);
            return { id: doc.id, ...folderData, nestedFolders };
        }));
        
        return folders;
    };

    useEffect(() => {
        const fetchData = async () => {
            const folders = await fetchFoldersRecursively('flashcard-folders');
            setFolderStructure(folders);
        };
        
        fetchData();
    }, []);

    return (
        <div className="folder-window">
            <div className="folder-window-header"></div>
            <div className="folder-window-body">
                {folderStructure.map((folder) => (
                    <FolderWindowFolder
                        key={folder.id}
                        folderData={folder}
                    >
                        {folder.name}
                    </FolderWindowFolder>
                ))}
            </div>
        </div>
    );
}

export default FolderWindow;
