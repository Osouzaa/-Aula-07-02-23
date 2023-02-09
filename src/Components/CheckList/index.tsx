import React, { ChangeEvent } from "react";

type State = {
  list: string;
};

class CheckList extends React.Component<{}, State> {
  state = {
    list: "",
  };
  render() {
    return (
      <>
        <label htmlFor="list">Digite sua tarefa aqui</label>
        <input
          type="text"
          id="list"
          value={this.state.list}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ list: event.target.value })
          }
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}

export default CheckList;
