import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import HookCounter from './components/HookCounter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
         {/* <Hello name="redouane"/> */}
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <br />
        <br />
        /******************************************************************* */
        <br />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <br />
        <br />
        /******************************************************************* */
        <br />
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <Counter />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <FunctionClick />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <ClassClick />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <EventBind />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <ParentComponent/>
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <UserGreeting />
        <br/>
        <br/>
        /******************************************************************* */
        <br/>
        <br/>
        <NameList />
        <br/>
        <br/>
        /******************************************************************* */
        <HookCounter/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default App
