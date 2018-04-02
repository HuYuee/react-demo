import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const {Provider,Consumer} = React.createContext({name:'aaa'});

const GrandPa = ()=> {
  return (
    <Consumer>
      {obj=>{
        return (
          <button onClick={obj.onChange}>{obj.name}</button>
        )
      }}
    </Consumer>
  )
}

const Dad = ()=> {
  return <GrandPa/>
}

class Son extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'huyue'
    }
  }
  changeName = ()=> {
    this.setState({
      name:'xxxx'
    })
  }
  render(){
    return (
      <div>
      {/* // <Provider value={{name:this.state.name,onChange:this.changeName}}> */}
        <button onClick={()=>{this.setState({name:'ggg'})}}>change name</button>
        <Dad />
      {/* // </Provider> */}
      </div>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Son/>
      </div>
    );
  }
}

export default App;
