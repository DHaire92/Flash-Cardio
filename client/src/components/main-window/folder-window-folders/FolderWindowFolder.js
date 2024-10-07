import './FolderWindowFolders.scss';
import FolderWindowFiles from '../folder-window-flashcards/FolderWindowFiles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FolderWindowFolder({ folderData }) {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="file-item">
            <div className="file-header" onClick={toggleVisibility}>
                <div className="file-header-left">
                    <button className="dropdown-btn">{!isVisible ? '▼' : '►'}</button>
                    <span className="folder-name">{folderData.name}</span>
                </div>
                <div className="file-header-right">
                    <button
                        className='folder-edit-util'
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate('/Editor', { state: { folderEditData: folderData } });
                        }}
                        >...</button>
                    <button 
                        className="folder-add-util"
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log("test");
                        }}
                        >+</button>
                </div>
            </div>

            {!isVisible && (
                <div className="file-content">
                    <div className="window-flashcard-items">
                        {folderData.flashcards.map((file, index) => (
                            <FolderWindowFiles 
                                key={index}>
                                {file.front}
                            </FolderWindowFiles>
                        ))}
                    </div>
                    <div className="window-folder-items">
                        {folderData.nestedFolders.map((nestedFolder) => (
                            <FolderWindowFolder
                                key={nestedFolder.id}
                                folderData={nestedFolder}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FolderWindowFolder;
