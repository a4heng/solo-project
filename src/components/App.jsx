import React, { Component } from 'react';
import Messages from './Messages.jsx';
import {Provider} from 'react-redux'
import {store} from '../actions/store'


class App extends Component{
    render(){
       return( 
       <Provider store = {store}>
            <div className='title'>
                <h1 className="msg-board"> Message Board </h1>
            </div>
           <div className="message Container">
            <Messages/>
            </div>
         </Provider>
       )}
}

export default App;