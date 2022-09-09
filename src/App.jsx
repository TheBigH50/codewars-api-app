import { Component } from "react";

class App extends Component {
 constructor(props) {
  super(props);

  this.state = {
    user: {
      username: "Harry",
      name: "Harrison",
      rank: "7 kyu",
      score: "83",
    }
  }
 }
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Hello World!</h1>
          {/*Display name, username, rank, score */}
          <div>
            <h2>{this.state.user.username}</h2>
            <p>{this.state.user.name}</p>
            <p>{this.state.user.rank}</p>
            <p>{this.state.user.score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;