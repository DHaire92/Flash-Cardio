import './FolderEdit.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FolderEdit = ({onUpdateSubFolderTitle, folderPath, folderData, onDelete, children}) => {
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
                        onUpdateSubFolderTitle(folderData, e.target.value);
                    }}
                />   
                <div className="folder-edit-utils-container">
                    <button className="folder-edit-utils-nav" onClick={ async(e) => {
                        e.stopPropagation(e);
                        navigate('/Editor', {state: { folderEditData: folderData }})
                    }}><span>&#8658;</span> </button>
                    <button className="folder-edit-utils-delete" onClick={onDelete}>X</button>
                </div>
                </div>
            <div className="folder-edit-body">
                <div className="folder-edit-card-amount">0 items</div>
            </div>
        </div>
    );
};

export default FolderEdit;