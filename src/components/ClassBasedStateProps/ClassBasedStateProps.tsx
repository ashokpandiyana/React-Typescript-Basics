import { Component } from "react";
import { props, State } from "./interface";

class ClassBasedStateProps extends Component<props, State> {
  state = {
    name: "ClassBased Component",
    age: 43,
  };

  render() {
    return (
      <>
        <h1>I am From Class Based Component</h1>
        <p>
          {this.state.name} - {this.state.age}
        </p>
        {this.props.name && (
          <h1>
            {this.props.name} - {this.props.value}
          </h1>
        )}
      </>
    );
  }
}

export default ClassBasedStateProps;
