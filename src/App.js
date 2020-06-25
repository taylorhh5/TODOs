import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoHook from './TodoHook.js'

class App extends React.Component {
  //for class component
  constructor() {
    super();

    //state
    this.state = {
      item: "",
      items: [],
    };

    //binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

  //handlechange
  handleInputChange(event) {
    // let name = event.target.name;
    // let value = event.target.value;
    // //setting state to whats in form
    // this.setState({
    //   [name]: value,
    // });

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //add new item
  submitItem() {
    let banana1 = this.state.items;
    let banana2 = this.state.item;

    //pushing new item into items array
    banana1.push(banana2);

    //new state could just be banana1?
    this.setState({ banana1: banana1 });
  }

  //render for class component
  render() {
    return (
      <div className="App">
        <h1>TODO List App</h1>
        {/* <h1>{this.state.items}</h1> */}
        <input type="text" name="item" onChange={this.handleInputChange} />

        <button onClick={this.submitItem}>Submit</button>

        {this.state.items.map((item) => {
          return <p>{item}</p>;
        })}

        <TodoHook/>
      </div>
    );
  }
}

export default App;
