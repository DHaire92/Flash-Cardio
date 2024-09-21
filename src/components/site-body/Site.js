import './Site.css'
import Header from '../header/Header';
import { EditorNavButton, BackToLoginButton } from '../button/NavigationButtons';
import FolderWindow from '../main-window/folder-window/FolderWindow';

function Site() {
    return (
        <div className="site">
            <div className="site-container">
                <Header>Home</Header>
                <div className="buttons-header-container">
                    <EditorNavButton />
                    <BackToLoginButton />
                </div>
                <div className="folder-window-container">
                    <FolderWindow />
                </div>
            </div>
        </div>
    );
}

export default Site;