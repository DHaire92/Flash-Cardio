import './FolderWindowFolders.scss';
import FolderWindowFiles from '../folder-window-flashcards/FolderWindowFiles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFolder } from '../../../api/folderAPIs';

function FolderWindowFolder({ folderData }) {
    const [nestedData, setNestedData] = useState([]);
    const [expandedFolders, setExpandedFolders] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const navigate = useNavigate();

    const RenderNestedContent = async () => {
        const nestedData = await getFolder(folderData.path);
        setNestedData(nestedData);

        const folderPromises = nestedData.nestedFolders.map(async (nestedPath) => {
            const folder = await getFolder(nestedPath);
            return folder;
        });

        const expandedFolders = await Promise.all(folderPromises);
        setExpandedFolders(expandedFolders);
        setIsVisible(!isVisible);
    };

    return (
        <div className="file-item">
            <div className="file-header" onClick={RenderNestedContent}>
                <div className="file-header-left">
                    <button className="dropdown-btn">{!isVisible ? '▼' : '►'}</button>
                    <span className="folder-name">{folderData.name}</span>
                </div>
                <div className="file-header-right">
                    <button
                        className='folder-edit-util'
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/Editor/${folderData.path}`);
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
                        {nestedData.flashcards.map((file, index) => (
                            <FolderWindowFiles 
                                key={index}>
                                {file.front}
                            </FolderWindowFiles>
                        ))}
                    </div>
                    <div className="window-folder-items">
                        {expandedFolders.map((nestedFolder) => (
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
