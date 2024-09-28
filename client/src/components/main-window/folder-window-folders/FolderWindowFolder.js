import './FolderWindowFolders.css';
import FolderWindowFiles from '../folder-window-flashcards/FolderWindowFiles';
import React, { useState } from 'react';

function FolderWindowFolder({ children, nestedFolders = [], files = [] }) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="file-item">
            <div className="file-header" onClick={toggleVisibility}>
                <div className="file-header-left">
                    <button className="dropdown-btn">{isVisible ? '►' : '▼'}</button>
                    <span className="folder-name">{children}</span>
                </div>
                <div className="file-header-right">
                    <span className='folder-edit-util'>...</span>
                    <span>+</span>
                </div>
            </div>

            {!isVisible && (
                <div className="file-content">
                    <div className="window-flashcard-items">
                        {files.map((file, index) => (
                            <FolderWindowFiles key={index}>
                                {file}
                            </FolderWindowFiles>
                        ))}
                    </div>
                    <div className="window-folder-items">
                        {nestedFolders.map((nestedFolder, index) => (
                            <FolderWindowFolder
                                key={index}
                                nestedFolders={nestedFolder.nestedFolders}
                                files={nestedFolder.files}
                            >
                                {nestedFolder.name}
                            </FolderWindowFolder>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FolderWindowFolder;
