# REACT REDUX WEB STARTER
Build for support large application development,developer can  easily develop website, management system by this starter kit. This is not good starter kit who are looking for CMS(content management system). This Starter kit is good for who want to learn and develop with react redux from scratch.

# Table of Contents
- [Project Structure](#project-structure)
- [Special Notes](#special-notes)
- [Installation and Configure](#installation-and-configure)
- [New Module Development](#new-module-development)
- [Redux Implementation for New Module](#redux-implementation-for-new-module)
- [Handle Ajax Request](#handle-ajax-request)
- [Testing with jest](#testing-with-jest)
- [Web deployment](#Web_deployment)
   - [Apache](#Apache)
   - [Nginx](#Nginx)
   - [Node Server](#Node_Server)
- [Docker Implementation](#Docker_Implementation)

# Project Structure
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
# Special Notes
  This starter kit support two important feature for mordern javascript development

        1. Lazy loading for Redux Store
        2. Module wise Code Spliting

For Lazy loading of Redux Store, I have introduced a function called  ```withReducer()``` which will load the redux on demand at runtime. for spliting the redux store we can just add the code below at every module at ```index.js```:

  ```javascript 
  export default withReducer('homeReducer'/** key for reducer to split **/, 
  homeReducer/** reducer name for module **/)
  (HomeContainer/** container or samrt component which create connection between redux and component)
  ```
For Module wise Code Spliting, I have introduced ```React Loadable``` package, which will split the code at production and runtime also
  
```javascript
Loadable({
   loader: () => import('./About' /** component name or module which will be split by webpack*/),
   loading: <LoadingComponent />, /** custom loading component which will be shows when component will be delay to load */
   delay: 300 /** Milisecond to wait for component to load */
})
```
# Installation and Configure

   1. You can just ```clone``` the git repository [react-admin-starter-kit](https://github.com/tariqulislam/react-redux-admin-starter.git)
   2. Then run the command for:

        1. For npm : ```npm run install```
        2. For Yarn run : ```yarn install```

   3. Application will run at [local development server with port](http://localhost:3000)

## New Module Development

The main feature of this starter kit is modularization. Which will provide friendly architecture for developer. To create the new module:

       1. to go to  -> ```routes``` folder.  
       2. create other necessary folders with ```index.js``` file.
    
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
## Create the Component for design the page named ```Contact.js```:

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
        
# Redux Implementation for New Module 

### Add the redux store code to ContactReducer.js:

### Create the  action constraint

#### Example:

```javascript
export const GET_CONTACT_INFO = 'GET_CONTACT_INFO'
export const SET_CONTACT_INFO = 'SET_CONTACT_INFO'
```        
### Create the initial state for redux store

```javascript
const initialState = {
   contactTitle: null,
   contactDetails: null
}
```
### Create the actions for handle the payload and reducer

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
### Create object structure which has defination for handling reducer

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
### Conditional statement for handle the contact reducer

#### Example:

```javascript
export default function contactReducer (state = initialState, action) {
  const handler = CONTACT_ACTION_HANDLER[action.type]
  return handler? handler(state, action): state
}
```

### Add the code to smart component ```ContactContainer.js``` for connect the redux to react component:

#### import main component (Contact.js) and ```connect``` function which will create connection between React component and redux reducer, And then import the ```ContactReducer.js``` reducer to smart component ```ContactContainer.js```

```javascript
import {connect}  from 'react-redux'
import {
  getContactInfo,
  setContactInfo
} from '../reducer/ContactReducer'

import Contact from '../component/Contact'
```
#### Create function which will dispatch the reducer 

```javascript
const loadRenderContactInfo = (dispatch) => {
  dispatch(getContactInfo())
  dispatch(setContactInfo({
          contactTitle: "This is new contact title",
          contactDetails: "This is new contact details"
      }))
}
```
#### Create the `mapStateToProps()` (default function for redux) which will maintain all the state for the ```Contact.js``` component.

```javascript
const mapStateToProps = (state) => ({
  contactTitle: state.contactReducer.contactTitle,
  contactDetails: state.contactReducer.contactDetails
})
````
#### Create the `mapActionCreators()` (default function for redux) which will maintain all the functions from redux and those function are related to react component ```Contact.js```

```javascript
const mapActionCreator = (dispatch) => ({
 renderContactInfo: loadRenderContactInfo(dispatch)
})
```
#### Connect the redux with react component ```Contact.js```

```javascript
export default connect(
  mapStateToProps,
  mapActionCreator
)(Contact)
```
#### Apply lazy loading to (Contact -> index.js) file for Split Redux store for ```Contact``` module

```javascript
import ContactContainer from './container/ContactContainer'
import contactReducer from './reducer/ContactReducer'
import {withReducer} from 'core/withReducer'
export default withReducer('contactReducer', contactReducer)(ContactContainer)
```
#### Add the code spliting functionality  for ```Contact``` module by appling ```react loadable``` to ( routes -> routeSplit.js) file 

```javascript
const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: Loading,
  delay: delay
})
export { Home, About, Contact }
```


#### To Add the ```Contact``` module at Menu Bar, we should add following below object at (shared -> AppHelper.js -> getNavigationItem -> TopNav)

```{id: "3", path: "/contact", label: "Contacts", withAuth: true}```


#### For the Routing purpose of ```Contact``` module at the following code below (router -> WithAuthRoute.js)
There are two file include for handling the routing...
   
   1. WithAuthRoute.js : Using the Route after authentication and authorization
   2. WithoutAuthRoute.js : Using Before authentication and authorization
   

```<Route exact path="/contact" component={Contact} />```


#### Change the ```Contact.js``` page with following below code 
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

# Handle Ajax Request

Handling Ajax is a important part of the for any api based application. I have introduced ```axios``` package to handle
the Ajax request with this starter kit. which i have discuss below

## Following code  gose to ```ContactReducer.js``` file:

#### Import the axios package in sample:
```javascript
import axios from 'axios'
import RequestHeaderHelper from 'shared/RequestHeaderHelper'
```
#### Add the Action constraint for handling the ajax request
```javascript
export const GET_POST_INFO = 'GET_POST_INFO'
export const SET_POST_INFO = 'SET_POST_INFO'
```
#### Add the Actions for handling the ajax request
```javascript
export function getPostInfo () {
    return {
        type: GET_POST_INFO,
        payload: {}
    }
}
```
```javascript
export function setPostInfo (data) {
    return {
        type: SET_POST_INFO,
        payload: {data}
    }
}
```
#### Create the function which will get the data from api by using ```axios```
```javascript
export const getPostInfoFromApi = (data) => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${data.id}`
    const request = axios.get(url, RequestHeaderHelper.jsonHeaderWithAuth())
    return {type: 'GET_POST_INFO', payload: request}
}
```
#### Add the reducer control flow to handle redux store change
```javascript
[GET_POST_INFO]: (state, action) => {
        return ({...state, posts: null })
},
[SET_POST_INFO]: (state, action) => {
        return ({...state, posts: action.payload.data })
}
```
#### Add the function to ```dispatch getPostInfoFromApi() function``` to smart component ```ContactContainer.js```
```javascript
const loadGetPostsInfo = (data,dispatch) => {
    dispatch(getPostInfoFromApi(data))
    .then(resonse => {
        dispatch(setPostInfo(resonse.payload.data))
    })   
}
```
#### Add state ```posts``` to ```mapStateToProps()``` function passing the state from redux to react component
```javascript
 const mapStateToProps = (state) => ({
   contactTitle: state.contactReducer.contactTitle,
   contactDetails: state.contactReducer.contactDetails,
   `posts: state.contactReducer.posts`
})
```
#### For ```getPostsInfo``` function accessible to react component we can add that function to ```mapActionCreators()``` at  ```ContactContainer.js``` file
```javascript
const mapActionCreator = (dispatch) => ({
   renderContactInfo: loadRenderContactInfo(dispatch),
   `getPostsInfo: (data) => loadGetPostsInfo(data,dispatch)`
})
```
#### Change the code of react component ```Contact.js``` for rendering the ```data``` consume from api
```javascript
import React from 'react'
import map from 'lodash/map'

class Contact extends React.Component {
    
    componentDidMount() {
       const {renderContactInfo, getPostsInfo} = this.props
       renderContactInfo()
       getPostsInfo({id: 1})
    }

    render() {
        const {posts, contactTitle, contactDetails} = this.props
        console.log(this.props)
        return (
            <div>
                <h1>{contactTitle}</h1>
                <p>{contactDetails}</p>
                <ul>
                {
                    map(posts, post =>
                      <li>{post.name}</li>
                    )
                }
                </ul>
            </div>
        )
    }
}

export default Contact
```
# Test with Jest

####  In Progress Stage ####









     


