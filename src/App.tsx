import * as React from "react";

interface IcountState {
  count: number;
}

class App extends React.Component<{}, IcountState> {
  public state = {
    count: 0
  };
  public increment: () => void = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  public Decrement: () => void = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  public Reset: () => void = () => {
    this.setState({
      count: 0
    });
  };
  public render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.increment} className="full-width">
          Increment
        </button>
        <button onClick={this.Decrement} className="full-width">
          Decrement
        </button>
        <button onClick={this.Reset} className="full-width">
          Reset
        </button>
      </section>
    );
  }
}

export default App;
