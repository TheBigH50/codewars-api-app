import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: true,
    };
  }

  getUser() {
    //fetching coderwars user data
    fetch("https://www.codewars.com/api/v1/users/TheBigH50")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
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
}

export default App;
