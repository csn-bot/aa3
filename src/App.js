import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Nav, NoteCollection, UINewNote, NoteCreateForm, UIEditNote} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
//import NewNote from './NewNote'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Nav/><NoteCollection/></div>} />
<Route exact path='/new' element= {<UINewNote/>} />
<Route exact path='/create' element= {<NoteCreateForm/>} />
<Route exact path='/edit' element= {<UIEditNote/>} />
</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);