import './FolderWindow.css';
import FolderWindowFolder from '../folder-window-folders/FolderWindowFolder';

function FolderWindow() {
    const folderStructure = [
        {
            name: 'Folder 1',
            files: ['Flashcard 1.1', 'Flashcard 1.2'],
            nestedFolders: [
                {
                    name: 'Folder 1.1',
                    files: ['Flashcard 1.1.1'],
                    nestedFolders: [
                        { name: 'Folder 1.1.1', files: ['Flashcard 1.1.1.1'], nestedFolders: [] },
                        { name: 'Folder 1.1.2', files: ['Flashcard 1.1.2.1'], nestedFolders: [] },
                    ],
                },
                { name: 'Folder 1.2', files: ['Flashcard 1.2.1'], nestedFolders: [] },
            ],
        },
        {
            name: 'Folder 2',
            files: ['Flashcard 2.1', 'Flashcard 2.2'],
            nestedFolders: [
                { name: 'Folder 2.1', files: ['Flashcard 2.1.1'], nestedFolders: [] },
                { name: 'Folder 2.2', files: ['Flashcard 2.2.1'], nestedFolders: [] },
            ],
        },
    ];

    return (
        <div className="folder-window">
            <div className="folder-window-header"></div>
            <div className="folder-window-body">
                {folderStructure.map((folder, index) => (
                    <FolderWindowFolder
                        key={index}
                        nestedFolders={folder.nestedFolders}
                        files={folder.files}
                    >
                        {folder.name}
                    </FolderWindowFolder>
                ))}
            </div>
        </div>
    );
}

export default FolderWindow;