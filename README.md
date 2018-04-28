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
## Special Notes
  This starter kit support, i have include the two most important production feature

        1. Lazy loading for Redux Store
        2. Module wise Code Spliting

For Lazy loading of Redux Store, I have create function  withReducer() which will split the reducer and loading the redux on demand at runtime of react application. we can split the code with following code below:

  ```javascript 
  export default withReducer('homeReducer'/** key for reducer to split **/, 
  homeReducer/** reducer name for module **/)
  (HomeContainer/** container or samrt component which create connection between redux and component)
  ```
For Module wise Code Spliting, I have to use ```React Loadable``` package, so we can split the code with using folowing that code below
  
```javascript
Loadable({
   loader: () => import('./About' /** component name or module which will be split by webpack*/),
   loading: <LoadingComponent />, /** custom loading component which will be shows when component will be delay to load */
   delay: 300 /** Milisecond to wait for component to load */
})
```
## Installation and Configure

   1. You can just clone the git repository [react-admin-starter-kit](https://github.com/tariqulislam/react-redux-admin-starter.git)
   2. Then run the command for:

        1. For npm run 
            npm run install
        2. For Yarn run 
            yarn install

   3. Application will run at [local server with port](http://localhost:3000)

## New Module development

  This starter kit mainly developed for modularized the project and provide the developer friendly architecture. To create the new module to go to  -> ```routes``` folder.  create the folder with ```index.js``` file first.
    
       Example:
        ```
            |----| routes
            |------| Contact
            |--------| asset
            |----------| contact.scss
            |--------| component
            |----------| Contact.js
            |--------| container
            |----------| ContactContainer.js
            |--------| reducer
            |----------| ContactReducer.js
            |--------| index.js
        ```
## Design the Component with React.js component design:

### Example:

```javascript
import React from 'react'

export const Contact = (props) => {
   return (
     <div> This is contact page </div>
   )
}

export default Contact
```
        
## Redux Implementation for New Module and Add the redux store code to ContactReducer.js:

### Create the  action constraint

#### Example:

```javascript
export const GET_CONTACT_INFO = 'GET_CONTACT_INFO'
export const SET_CONTACT_INFO = 'SET_CONTACT_INFO'
```        
### create the initial state for redux store

```javascript
const initialState = {
   contactTitle: null,
   contactDetails: null
}
```
### create the actions for handle the payload

#### Example: 

```javascript
export function getContactInfo () {
   return { 
       type: GET_CONTACT_INFO,
       payload: {}
   }
}
```
```javascript
export function setContactInfo (data) {
   return {
       type: SET_CONTACT_INFO,
       payload: {data}
   }
}
```
### Create object which has defination for handling reducer

#### Example:

```javascript
const CONTACT_ACTION_HANDLER = {
  [GET_CONTACT_INFO]: (state, action) => {
      return ({...state, contactTitle: null, contactDetails: null})
  },
  [SET_CONTACT_INFO]: (state, action) => {
      return ({...state, contactTitle: action.payload.data.contactTitle, contactDetails: action.payload.data.contactDetails})
  }
}
```
### Statement for handle the contact reducer

#### Example:

```javascript
export default function contactReducer (state = initialState, action) {
  const handler = CONTACT_ACTION_HANDLER[action.type]
  return handler? handler(state, action): state
}
```

### Add the code to smart component ContactContainer.js for connect the redux to react component:

#### import main component and other library for redux and import the reducer to smart component

```javascript
import {connect}  from 'react-redux'
import {
  getContactInfo,
  setContactInfo
} from '../reducer/ContactReducer'

import Contact from '../component/Contact'
```
#### create function which will dispatch the reducer 

```javascript
const loadRenderContactInfo = (dispatch) => {
  dispatch(getContactInfo())
  dispatch(setContactInfo({
          contactTitle: "This is new contact title",
          contactDetails: "This is new contact details"
      }))
}
```
#### create the `mapStateToProps()` default function for redux to mapping the state for reducer using in connect function

```javascript
const mapStateToProps = (state) => ({
  contactTitle: state.contactReducer.contactTitle,
  contactDetails: state.contactReducer.contactDetails
})
````
#### create the `mapActionCreators()` default function for redux to mapping the action for reducer using in connect function

```javascript
const mapActionCreator = (dispatch) => ({
 renderContactInfo: loadRenderContactInfo(dispatch)
})
```
#### connect the redux with react component

```javascript
export default connect(
  mapStateToProps,
  mapActionCreator
)(Contact)
```
#### Apply the lazy loading to (Contact -> index.js) file for Redux store for contact module

```javascript
import ContactContainer from './container/ContactContainer'
import contactReducer from './reducer/ContactReducer'
import {withReducer} from '../../core/withReducer'
export default withReducer('contactReducer', contactReducer)(ContactContainer)
```
#### Add the code spliting functionality at runtime by appling ```react loadable``` to ```routeSplit.js``` file

```javascript
const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: Loading,
  delay: delay
})
export { Home, About, Contact }
```


#### To show the ```Contact``` component in menu we should add the mapping to (shared -> AppHelper.js -> getNavigationItem -> TopNav)

```{id: "3", path: "/contact", label: "Contacts", withAuth: true}```


#### Add the ```Contact``` to react router for route, we can add below code to (router -> WithAuthRoute.js)

```<Route exact path="/contact" component={Contact} />```


#### Change the contact page with this code 
```javascript
import React from 'react'

export const Contact = (props) => {
 return (
  <div>
     <h1>{props.contactTitle}</h1>
     <p>{props.contactDetails}</p>
  </div>
 )
}

export default Contact
```







     


