import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: true,
      username: "TheBigH50",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getUser() {
    //fetching coderwars user data
    fetch(`https://www.codewars.com/api/v1/users/${this.state.username}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch((error) => console.error(error));
  }

  handleSearch(event) {
    event.preventDefault();

    this.getUser();
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
            {/*Form field for codewars username search*/}
            <form onSubmit={this.handleSearch}>
              <label htmlFor="username">Codewars Username:</label>
              <input type="text"
              value={this.state.username}
              onChange={(event) =>
              this.setState({username: event.target.value})
              } />
              <button type="submit">Search</button>
              </form>
            {/*Display name, username, rank, score */}
            <div>
              <h2>{this.state.user.username}</h2>
              <p>{this.state.user.name}</p>
              <p>{this.state.user.honor}</p>
              <p>{this.state.user.ranks.overall.name}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
