import React, { useEffect, useState } from 'react';
import './FolderWindow.css';
import FolderWindowFolder from '../folder-window-folders/FolderWindowFolder';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../../pages/App';

function FolderWindow() {
    const [folderStructure, setFolderStructure] = useState([]);

    useEffect(() => {
        const folderCollectionRef = collection(db, 'flashcard-folders');

        const unsubscribe = onSnapshot(folderCollectionRef, (snapshot) => {
            const folders = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setFolderStructure(folders);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="folder-window">
            <div className="folder-window-header"></div>
            <div className="folder-window-body">
                {folderStructure.map((folder) => (
                    <FolderWindowFolder
                        key={folder.id}
                        nestedFolders={folder.nestedFolders}
                        files={folder.files}
                    >
                        {folder.name}
                    </FolderWindowFolder>
                ))}
            </div>
        </div>
    );
}

export default FolderWindow;
