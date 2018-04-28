# REACT REDUX ADMIN STARTER
Build for newbie and student to help, how to develop administrator protal for every site. how easily developer can ``` Learn about react redux``` and Implemented it to their site. This is not good starter kit who are looking for CMS(content management system). This Starter kit is good for who want to learn react redux from scratch.

# Table of Contents
- [Project Structure](#Project_structure)
- [Installation and Configure](#Installation_and_Configure)
- [New Module development](#New_Module_development)
- [Redux Implementation for New Module](#Redux_Implementation_for_New_Module)
- [Simple CRUD operation](#Simple_CRUD_operation)
- [Testing with jest](#Testing_with_jest)
- [Web deployment](#Web_deployment)
   - [Apache](#Apache)
   - [Nginx](#Nginx)
   - [Node Server](#Node_Server)
- [Docker Implementation](#Docker_Implementation)

## Project Structure
```
|--| build
|--| config
|--| public (static file to load in this starter kit)
|----| favicon.ico
|----| index.html
|----| mainfest.json
|--| script
|----| build.js
|----| start.js
|----| test.js
|--| src
|----| asset
|------| [cssfile.scss]
|------| [Static Image Files]
|----| component
|------| [Global Component Folder]
|------| [Global Component(.js)]
|----| container
|------| [Global Smart Component Folder]
|------| [Global Smart File(.js)]
|----| layout [Main Layouts of the projects]
|----| core
|------| initializeStore.js (Initilize the main store for redux)
|------| rootReducer.js (Main reducer class for root)
|------| withReducer.js (For Lazy loading the redux store)
|----| reducers
|----| router [Configure the router]
|------| [Global Reducer Folder for Redux]
|------| [Global Reducer File(.js)]
|----| routes
|------| [Module Folder]
|--------| asset
|----------| [modulecssfile.scss]
|----------| [Static Image Files]
|--------| component
|----------| [Module Component Folder]
|----------| [Module Component File(.js)]
|--------| container
|----------| [Module smart component Folder]
|----------| [Module smart component File (.js)]
|--------| reducer
|----------| [Module Reducer File for Redux]
|--------| index.js (connect all the container and component for module wise redux store Lazy loading)
|------| routeSplit.js (Appling the code spliting to Each Module)
|----| shared
|-------| [Global Shared Function File]
|----| test
|-------| [React Test file(.test.js)]
|--| .eslintrc
|--| .gitignore
|--| package-lock.json
|--| package.json
|--| postcss.config.js
```

## Installation and Configure

   1. You can just ```clone``` the git repository ```https://github.com/tariqulislam/react-redux-admin-starter.git```
   2. Then run the command for:

        For npm run ```npm run install```
        For Yarn run ```yarn install```
   3. Application will run at http://localhost:3000

  ## New Module development

  This starter kit mainly developed for modularized the project and provide the developer friendly architecture. To create the new module to go to  -> `routes` folder.  create the folder with ```index.js``` file first.

       Example:
       ```
            ----| routes
            ------| Contact
            --------| asset
            ----------| contact.scss
            --------| component
            ----------| Contact.js
            --------| container
            ----------| ContactContainer.js
            --------| reducer
            ----------| ContactReducer.js
            --------| index.js
        ````
