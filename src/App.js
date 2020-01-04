import React from "react";
import Child from "./child";
import "./App.css";
import Items from "./components/items";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "ali", age: 21 },
      { id: 2, name: "noor", age: 18 },
      { id: 3, name: "omar", age: 11 }
    ]
  };

  change = () => {
    this.setState({
      name: "ali",
      age: 21
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.change}>change state</button>

        <p>{this.state.name}</p>
        <p>{this.state.age}</p>

        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
