# Note App

This is a simple Note App that allows users to view and manage their completed tasks. The app is built using React with the Context API for state management and styled with Tailwind CSS for an efficient and responsive UI.

## Features

- **Task Management**: The app filters and displays completed tasks.
- **Search Functionality**: Users can search through the tasks, and only the relevant results are shown.
- **Responsive Design**: The app is fully responsive, utilizing Tailwind CSS for flexible layouts.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Context API**: Used for managing and sharing global state between components.
- **Tailwind CSS**: A utility-first CSS framework used for styling the components.
- **Vite**: A fast build tool that provides a better development experience.  
## Project Structure

```plaintext
/src
  ├── contexts
  │   └── useData.js      # Contains the logic for global state management (using Context API)
  ├── components
  │   ├── Cart.js         # Component that displays individual tasks (completed notes)
  │   └── Navigation.js   # Component for the app's navigation
  └── Completed.js        # Main component that displays the list of completed tasks   
  ``` 
 
## Completed.js
 This component displays the list of completed tasks by accessing the shared data via the useData hook. It conditionally renders a list of Cart components based on the completed status of each task. If there are no search results, it hides the content.
## useData.js 
This file manages the global state using the React Context API. It provides the searchResult and show values, which are used in the Completed component to conditionally render the list of tasks. 
## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/note-app.git
``` 
Navigate to the project directory:
```bash
cd note-app
``` 
Install the dependencies:
```bash
npm install
``` 
Start the development server:
```bash
npm run dev 
```
### Usage 
Once the project is running, you can add tasks and filter them to see the completed ones. The search functionality is built into the app, allowing you to quickly find specific tasks.

### License
This project is licensed under the MIT License.





