import './FolderEdit.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { updateFolder } from '../../../api/folderAPIs';

const FolderEdit = ({ folderData, onDelete }) => {
    const navigate = useNavigate();
    const [folderTitle, setFolderTitle] = useState(folderData.name);
    const updateFolderTimeout = useRef(null);

    useEffect(() => {
        if (updateFolderTimeout.current) {
            clearTimeout(updateFolderTimeout.current);
        }

        updateFolderTimeout.current = setTimeout(async () => {
            if (folderData.name !== folderTitle) {
                folderData.name = folderTitle;
                await updateFolder(folderData);
            }
        }, 10);

        return () => clearTimeout(updateFolderTimeout.current);
    }, [folderTitle]);

    return (
        <div className="folder-edit-container">
            <div className="folder-edit-header">
                <input
                    className="folder-edit-name"
                    type="text"
                    placeholder="Add a Title..."
                    value={folderTitle}
                    onChange={(e) => setFolderTitle(e.target.value)}
                />
                <div className="folder-edit-utils-container">
                    <button
                        className="folder-edit-utils-nav"
                        onClick={() => navigate(`/Editor/${folderData.path}`)}
                    >
                        &#8658;
                    </button>
                    <button className="folder-edit-utils-delete" onClick={onDelete}>X</button>
                </div>
            </div>
            <div className="folder-edit-body">
                <div className="folder-edit-card-amount">
                    {folderData.flashcards.length} {folderData.flashcards.length === 1 ? "item" : "items"}
                </div>
            </div>
        </div>
    );
};

export default FolderEdit;