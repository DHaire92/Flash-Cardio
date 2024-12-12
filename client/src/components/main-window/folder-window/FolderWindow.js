import React, { useEffect, useState } from 'react';
import './FolderWindow.scss';
import FolderWindowFolder from '../folder-window-folders/FolderWindowFolder';
import { fetchFoldersRecursively } from '../../../api/folderAPIs';

function FolderWindow() {
    const [folderStructure, setFolderStructure] = useState([]);

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
