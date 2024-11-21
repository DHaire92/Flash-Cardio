# FlashCardio

# Progress Report 
### Increment 2 
### Group #31

Team Members
Aiden Livingston	atl21g	lvngstn
Dustin Haire	dmh23a	DHaire92
McKenna Warrick	mlw21c	MLW21C
Maria Penalver	mbp22b	marypenalver
William Gomer	wjg21a	Eaglesridge
1.	Project Title and Description
FlashCardio is a flashcard application designed to provide an efficient, and customizable learning experience. Unlike other flashcard apps, FlashCardio emphasizes advanced organizational tools and intuitive study modes to help users grasp complex concepts and manage extensive knowledge bases with ease.
Key features include a hierarchical file structure allowing users to create and organize flashcards, decks, and folders, and a study mode powered by a spaced-repetition algorithm to optimize retention. Additional functionalities like user progress tracking, personalized databases, and (in the future) AI-generated flashcards aim to simplify the learning process and cater to diverse user needs.
1.	Accomplishments and overall project status during this increment
During this increment, we successfully implemented the hierarchical file structure, allowing users to organize flashcards, folders, and decks intuitively. The UI components for flashcards, folders, and pages have also been fully designed and developed. Additionally, we finalized the theme, fonts, and color scheme, providing the application with a cohesive and professional appearance.
On the backend, we developed basic API functionalities to perform CRUD operations for both flashcards and folders. These APIs enable the interactions necessary for managing content within the app. Progress indicated the project remains on track, with the core infrastructure in place to support the next stages of development.
1.	Challenges, changes in the plan and scope of the project and things that went wrong during this increment
One of the primary challenges during this increment was refactoring/ optimizing the foundational source code from the previous increment. During the initial creation of the logic and components, there were various unintended inefficiencies in the code that were ignored in favor of programming speed. Examples include:
•	Nested folders were stored as the actual folder data instead of links to the folder. This made folder data rendering slow and inefficient.
•	The folder/ flashcard CRUD operations were implemented in the react frontend, which is generally not preferred by basic code organization principles.
•	Folder state was inconsistent throughout each UI component. In the Editor component, there was just one ‘Folder’ variable, but when passed to other components, they fields in the composite ‘Folder’ variable were split in inconsistent ways. This made the state confusing to change/ track.
All unhealthy code points were refactored. After abstracting the CRUD login into the APIs, another challenge that emerged was the recursive folder rendering feature returning slower-than-desired API response times, which may impact the user experience when managing large or deeply nested folder structures. This bottleneck reflects a common issue in software development, where performance tuning becomes necessary after building out complex data hierarchies. To address this, we are exploring caching mechanisms and query optimizations for the next increment.
1.	Team Member Contribution for this increment
1.	The progress report:
1.	Aiden: Sections 1, 2, 3, 4, 5, 6, 7
2.	the requirements and design document:
1.	Aiden: Sections 1, 2, 3, 4, 5, 6, 7
3.	the implementation and testing document:
1.	Aiden: Sections 1, 2, 3, 4, 5
4.	the source code:
1.	Aiden
1.	Implemented recursive folder structure
2.	Created Folder – Edit Mode UI components
3.	Abstracted folder and flashcard CRUD operations into Express.js REST APIs
4.	Implemented dynamic URL paths for each folder/ deck
2.	Maria
1.	Finalized fonts and themes for the application design
3.	William
1.	Created basic study mode page
5.	the video or presentation
2.	Plans for the next increment
Functional:
Study Mode:
•	Implement a new page for users to select desired folders and flashcards to study them within the study mode.
Spaced Repetition:
•	Implement a spaced repetition algorithm to influence study sessions based on user familiarity with each flashcard.
•	Allow users to study specific folders or a mix of flashcards across multiple folders.
User Progress Tracking:
•	Display the user's progress on selected flashcards or folders, including familiarity ratings and mastery percentages.
•	Store data on each flashcard, such as familiarity levels, priority, and prerequisites.
Account Management:
•	Allow users to create and manage accounts tied to their flashcards and progress data.
Non-Functional/ Architectural:
Performance:
•	Load user flashcard data within 500ms on average.
•	Study mode should handle up to 500 flashcards without noticeable performance degradation.
Usability:
•	The system interface should be intuitive and require no more than 5 minutes for a new user to understand basic functionality.
•	Emphasize simplicity and clarity, minimizing configuration complexity for study sessions.
Scalability:
•	Support up to 1,000 users without significant performance issues.
•	The hierarchical file structure should efficiently manage flashcards and folders at various levels of nesting.
Security:
•	User accounts and associated data should be securely stored, with passwords hashed and encrypted.
•	Prevent unauthorized access to user data.
Data Integrity:
•	All user-created flashcards, folders, and progress data should be reliably stored and retrievable, even in the event of system crashes.
1.	Stakeholder Communication
Subject: Project Update: Progress and Next Steps
Dear Stakeholders,
We are happy to share an update on the progress of FlashCardio – gains for your brain! and outline our next steps as we move toward delivering a functional, efficient, and user-friendly flashcard application.
Progress Highlights:
The project has made significant strides. Our team has successfully implemented the hierarchical file structure that will allow users to organize flashcards and folders intuitively. Additionally, we have finalized the app's theme, fonts, and color scheme, giving it a polished, professional look.
On the development side, all core UI components for flashcards, folders, and pages have been completed. Basic API functionalities have been implemented to enable users to create, read, update, and delete (CRUD) both flashcards and folders. These features provide the foundation for a seamless user experience.
Current Focus Areas:
As we continue development, our primary objectives for the next phase include:
Study Mode: We are building a study viewer where users can select flashcards and study them using a spaced-repetition algorithm. This feature will optimize learning and retention and is central to the app's value proposition.
Deployment: We aim to deploy the application in its current form on the web, allowing users to explore and interact with the product. This milestone will also facilitate valuable feedback to refine the app further.
Personalized Data Storage: Each user will have a dedicated database instance to ensure that their flashcard data remains private and unique.
Performance Optimization: We are addressing API response times, particularly in recursive folder rendering. Our goal is to reduce response times to under 500ms, ensuring a fast and responsive experience.
Challenges and Resolution Plans:
One of the key challenges we've encountered is optimizing the recursive folder rendering, which is currently slower than desired. This type of performance bottleneck is common in hierarchical data systems and reflects the complexity of balancing functionality and efficiency in real-world software development. We are leveraging caching strategies and database query optimizations to address this issue.
Next Steps:
As we integrate these enhancements, we remain committed to delivering a reliable, high-quality product that meets the needs of our users. We are confident these efforts will strengthen FlashCardio’s functionality and user experience, moving us closer to our vision of a streamlined and effective learning tool.
Thank you for your continued support and interest in our project. Please don’t hesitate to reach out with any questions or feedback.
Best regards,
The FlashCardio Development Team
1.	Link to video
Paste here the link to your video.



# Software Implementation and Testing Document
### Increment 2
### Group 31

Authors:
Aiden Livingston
Dustin Haire
Maria Penalver
McKenna Warrick
Maria Penalver
Programming Languages (5 points)
•	JavaScript
•	CSS
•	HTML
Platforms, APIs, Databases, and other technologies used (5 points)
Technologies
•	React: JavaScript library for building user interfaces, particularly single-page applications
•	Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript on the server
o	react-router: A standard routing library for React, used to handle navigation in single-page applications
o	firebase admin: A server SDK that lets you interact with Firebase from environments for various administrative tasks
o	axios: A promise-based HTTP client for making requests to APIs from both the browser and Node.js
o	nodemon: A utility that starts a backend server and monitors changes in your source and automatically restarts your server
o	cors: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS (Cross-Origin Resource Sharing)
•	Express.js: A flexible Node.js web application/ backend framework
•	SCSS: Sassy CSS, a preprocessor scripting language that is interpreted or compiled into CSS
•	Firebase: A platform developed by Google for creating mobile and web applications
o	Firestore NoSQL Database: A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform
Execution-based Functional Testing (10 points)
At this stage of the project, we have not yet conducted functional testing. However, we plan to implement execution-based functional testing by the third increment of development. During this phase, we will validate the functional requirements specified in our RD Document by executing test cases for user and API interactions.
Execution-based Non-Functional Testing (10 points)
Performance Testing: Examined the functionality of the site to handle vast content in flashcards and folders. Created test scenarios where hundreds of flashcards were nested into folders to establish whether the application responds. The developers utilized the browser developer tools to find out how long it takes to load a web server’s critical pages (e.g., home, folder views and study mode). The large folder rendering was slow, with about 7.5 seconds at 400 flash cards (This is an issue we aim to tackle in the next increment).
Scalability Testing: Simulated multiple users interacting with the app simultaneously using Postman to stress test the Firebase backend for simultaneous read/write operations.
End Users Testing: Conducted usability testing with potential users to evaluate ease of navigation, clarity of UI, and the learning curve for new users. Legitimate feedback directed towards the minor adjustments spent on rearrangement of the screen with some including movement of button locations to all corners and taking of the equivalent screen shots for further categorization.
Compatibility Testing: Tested Flashcardio on multiple browsers (e.g., Chrome, Firefox, Edge) and devices (desktop and tablet) to ensure consistent functionality and responsiveness. Checked cross-browser compatibility and optimized mobile responsiveness using media queries in SCSS.
Non-Execution-based Testing (10 points)
Code Reviews: Conducted peer code reviews with team members for critical components such as Firestore utilities and SCSS styles. Focused on adherence to best practices, modularity, and avoiding redundant code patterns or styles. Improved code readability and identified opportunities to refactor complex logic (e.g., simplifying folder deletion logic).
Static Analysis: Used static analysis tool ESLint to identify coding errors, enforce consistent styling, and detect potential security violations. Resolved multiple warnings related to unused variables, potential null references, and formatting inconsistencies.
Walkthroughs: Conducted team walkthroughs of the project architecture, discussing the rationale behind key decisions like folder-path-based routing and Firestore query structure. Helped ensure alignment on design decisions and identified opportunities for optimization, such as caching frequently accessed folders.
Inspection of Requirements and Design Documents: Reviewed the Requirements Document (RD) to ensure the application aligns with the specified non-functional requirements. Checked that the current implementation meets outlined requirements and flagged areas for future improvement.

# Software Requirements and Design Document
### Increment 2
### Group 31

Authors:
Aiden Livingston
Dustin Haire
Maria Penalver
McKenna Warrick
William Gomer
Overview (5 points)
FlashCardio is a web-based flashcard and study application designed to improve the way users organize, create, and learn with flashcards. Unlike other flashcard apps, FlashCardio allows users to store and organize flashcards and decks within a flexible hierarchical folder structure. It integrates a spaced-repetition algorithm that customizes study sessions, helping focus on less familiar cards to optimize learning and retention. The application aims to provide an intuitive and simple experience for managing complex knowledge.
The system will support user accounts to enable the personalized storage of flashcards and progress tracking. Users will be able to create flashcards, organize them into folders, and study them in an efficient/ customizable manner. As the application evolves, additional features such as AI-generated flashcards and a repository of shared notes will be considered to further enhance the learning experience.
Functional Requirements (10 points)
Allow users to create flashcards: Flashcards are the core feature of the application, and users must be able to create them to begin using the app effectively. Priority: High
Allow users to organize flashcards into folders and decks: Organizing flashcards into folders is essential for the usability of the app, enabling users to manage large collections of cards in a structured manner. Priority: High
Allow users to create and delete folders and decks: Users need to manage their flashcards efficiently by creating and deleting folders and decks as necessary for their learning process. Priority: High
Implement a spaced-repetition algorithm to optimize the study of flashcards: The spaced-repetition algorithm will help users retain information over time by showing flashcards based on their familiarity with the content. Priority: High
Allow users to track their progress on specific sets of flashcards: Progress tracking is essential for users to understand which cards they need to focus on and to monitor their learning. Priority: High
Allow users to create an account and associate their flashcards with their user profile: Account creation enables personalized user experiences, including data storage and synchronization across multiple devices. Priority: Medium
Allow users to delete individual flashcards: Users must be able to remove cards that are no longer needed or relevant to their learning. Priority: Medium
Provide a study viewer that presents flashcards for review in study sessions: The study viewer is crucial to delivering the actual study experience, and it must be clear, easy to navigate, and effective in presenting flashcards. Priority: Medium
Allow users to adjust the learning algorithm and select specific folders or decks for study sessions: Providing flexibility to users by allowing them to customize study sessions enhances the UX, especially for those managing large flashcard collections. Priority: Medium
Non-functional Requirements (10 points)
Respond to user actions within 500ms: Quick response times provide a smooth UX, particularly when managing large flashcard and folder collections. Priority: High
Ensure data security for flashcards and personal information through encryption and authentication: Security is critical for user privacy and trust in the application. Encryption and secure login methods will safeguard sensitive data. Priority: High
Support scalability for many users and flashcards: Scalability ensures that the app can grow with the user base without performance degradation, especially as users create and manage large numbers of flashcards. Priority: High
Maintain 99.9% uptime, with minimal disruptions to user access: High availability is essential for a cloud-based application, ensuring users can access their data and study without interruptions. Priority: High
Compatible with major web browsers, including Chrome, Firefox, Edge, and Safari: Ensuring compatibility across multiple browsers increases user base and accessibility. Priority: Medium
Provide an intuitive and easy-to-navigate user interface with clear instructions: A user-friendly interface is critical for engagement, especially for users who may not be tech savvy. Priority: Medium
Use Case Diagram (10 points)
Actors:
1.	User (Primary Actor)
o	A person who interacts with the system, creating and studying flashcards.
2.	Admin (Secondary Actor)
o	An administrator who might manage users or oversee content
Use Cases:
1.	Sign In
o	Description: Users can sign in or sign up for an account to access and save their flashcard data.
o	Actor: User
o	Precondition: The user must have a valid account for sign-in or must create a new account to sign up.
2.	Create Flashcards
o	Description: Users can create new flashcards, adding questions and answers.
o	Actor: User
o	Precondition: User is logged in.
3.	Edit Flashcards
o	Description: Users can edit existing flashcards to modify the content.
o	Actor: User
o	Precondition: User has already created flashcards.
4.	Delete Flashcards
o	Description: Users can delete flashcards they no longer need.
o	Actor: User
o	Precondition: User has created flashcards.
5.	Create Folders
o	Description: Users can create folders to organize their flashcards into categories.
o	Actor: User
o	Precondition: User is logged in.
6.	View Folders and Flashcards
o	Description: Users can view their folders and flashcards.
o	Actor: User
o	Precondition: User has created or added flashcards to folders.
7.	Study Flashcards
o	Description: Users can study their flashcards by reviewing the questions and answers, possibly with a quiz mode or flashcard review system.
o	Actor: User
o	Precondition: User has flashcards created and organized.
8.	Delete Folders
o	Description: Users can delete folders they no longer need.
o	Actor: User
o	Precondition: User has created folders.
9.	Admin: Manage Users
o	Description: Admin can manage user accounts, such as adding, banning, or updating user information (optional).
o	Actor: Admin
o	Precondition: Admin has permission.
10.	Admin: Monitor Content
o	Description: Admin can review user-generated content for appropriateness or to enforce terms of use (optional).
o	Actor: Admin
o	Precondition: Admin has permission.
 
Class Diagram and/or Sequence Diagrams (15 points)
   
Operating Environment (5 points)
FlashCardio will operate as a web application, accessible through modern browsers such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. The application will be platform-agnostic, meaning it can run on any device with a browser, including desktop computers, laptops, tablets, and smartphones.
The backend will run on a Node.js server hosted in a cloud environment, with Firebase being used for database management and authentication. The system will require no additional software installations beyond a browser and will integrate with other browser-based applications.
Assumptions and Dependencies (5 points)
Assumptions:
•	The target users will have access to reliable internet connections and modern web browsers.
•	Firebase services will remain available and maintain compatibility with the technologies we are using.
•	The chosen cloud hosting platform for the backend will support Node.js without disruptions or significant performance issues.
•	Users will primarily interact with the app in environments where minimal processing and storage demands on their devices will suffice.
Dependencies:
•	The project relies on libraries and frameworks including React.js, Express.js, Firebase, and Node.js. Any major updates or deprecations in these technologies could impact development or maintenance.
•	The project depends on the continued availability and support of Firebase for real-time database functionality and user authentication.
•	Deployment will depend on a compatible cloud hosting provider to ensure scalability and reliable performance.
•	Performance optimizations will depend on the integration of caching strategies and query efficiencies to address current bottlenecks.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
