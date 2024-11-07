import './FolderEdit.scss';
import { useState, useEffect } from 'react';
import { updateFolder, getFolder } from '../../../api/folderAPIs';

const FolderEdit = ({ folderPath, onDelete, handleNavigateFolder }) => {
    const [folderData, setFolder] = useState({});

    useEffect(() => {
        const fetchFolderData = async () => {
            const folder = await getFolder(folderPath);
            setFolder(folder);
        };
        fetchFolderData();
    }, [folderPath]);

    const editTitle = async (title) => {
        setFolder({ ...folderData, name: title });
        await updateFolder(folderData);
    }

    return (
        <div className="folder-edit-container">
            <div className="folder-edit-header">
                <input
                    className="folder-edit-name"
                    type="text"
                    placeholder="Add a Title..."
                    value={folderData.name || ""}
                    onChange={async (e) => editTitle(e.target.value)}
                />
                <div className="folder-edit-utils-container">
                    <button
                        className="folder-edit-utils-nav"
                        onClick={() => handleNavigateFolder(folderData.path)}
                    >
                        &#8658;
                    </button>
                    <button className="folder-edit-utils-delete" onClick={onDelete}>X</button>
                </div>
            </div>
            <div className="folder-edit-body">
                <div className="folder-edit-card-amount">
                    {folderData.flashcards?.length || 0} {folderData.flashcards?.length === 1 ? "item" : "items"}
                </div>
            </div>
        </div>
    );
};

export default FolderEdit;