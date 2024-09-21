import './FolderWindowFolders.css'
import FolderWindowFiles from '../folder-window-files/FolderWindowFiles';
import React, { useState } from 'react';

function FolderWindowFolder({children}) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="file-item">
            <div className="file-header" onClick={toggleVisibility}>
                <span className="folder-name">{children}</span>
                <button className="dropdown-btn">▼</button>
            </div>

            {isVisible && (
                <div className="file-content">
                    <FolderWindowFiles>Flashcard 2.1</FolderWindowFiles>
                    <FolderWindowFiles>Flashcard 2.2</FolderWindowFiles>
                </div>
            )}
        </div>
    );
}

export default FolderWindowFolder;