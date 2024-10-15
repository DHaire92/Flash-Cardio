import './FolderEdit.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateFolder } from '../../../api/folderAPIs';

const FolderEdit = ({folderData, onDelete}) => {
    const navigate = useNavigate();
    const [folderTitle, setFolderTitle] = useState(folderData.name);

    let updateFolderTimeout = null;

    const onUpdateNestedFolderTitle = (newTitle) => {
        folderData.name = newTitle;

        if (updateFolderTimeout) {
            clearTimeout(updateFolderTimeout);
        }

        updateFolderTimeout = setTimeout(async () => {
            console.log(folderData.path);
            await updateFolder(folderData);
            updateFolderTimeout = null;
        }, 3000);
    };

    return (
        <div className="folder-edit-container">
            <div className="folder-edit-header">
                <input 
                    className="folder-edit-name"
                    type= "text"
                    placeholder="Add a Title..."
                    value = {folderTitle} 
                    onChange={(e) => {
                        setFolderTitle(e.target.value);
                        onUpdateNestedFolderTitle(e.target.value);
                    }}
                />   
                <div className="folder-edit-utils-container">
                    <button className="folder-edit-utils-nav" onClick={ async(e) => {
                        navigate('/Editor', {state: { folderEditData: folderData }, replace: true})
                    }}>&#8658;</button>
                    <button className="folder-edit-utils-delete" onClick={onDelete}>X</button>
                </div>
                </div>
            <div className="folder-edit-body">
                <div className="folder-edit-card-amount">
                    {folderData.flashcards.length} {folderData.flashcards.length == 1 ? "item" : "items"}
                </div>
            </div>
        </div>
    );
};

export default FolderEdit;