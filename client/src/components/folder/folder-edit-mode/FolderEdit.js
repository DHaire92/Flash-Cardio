import './FolderEdit.css'

const FolderEdit = ({children}) => {
    return (
        <div className="folder-edit-container">
            <div className="folder-edit-header">{children}</div>
            <div className="folder-edit-body">
                <div className="folder-edit-card-amount">0 items</div>
            </div>
        </div>
    );
};

export default FolderEdit;