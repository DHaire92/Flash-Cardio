import './FolderEdit.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FolderEdit = ({folderData, onDelete, onUpdateNestedFolderTitle,}) => {
    const navigate = useNavigate();
    const [folderTitle, setFolderTitle] = useState(folderData.name);

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
                        onUpdateNestedFolderTitle(folderData, e.target.value);
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