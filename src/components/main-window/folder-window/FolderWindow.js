import './FolderWindow.css'
import FolderWindowFolder from '../folder-window-folders/FolderWindowFolder';

function FolderWindow() {
    return (
        <div className="folder-window">    
            <div className="folder-window-header"></div>
            <div class="folder-window-body">
                <FolderWindowFolder>Folder 1</FolderWindowFolder>
            </div> 
        </div>
    );
}

export default FolderWindow;