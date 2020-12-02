import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import CardBlock from "./cards";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    monsters: [],
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    await this.setState({ monsters: users });
    console.log(this.state.monsters);
  }
  render() {
    const { monsters } = this.state;

    return (
      <div>
        <h2>Here is the list of Users</h2>
        {monsters.length === 0 ? (
          <Spinner className="spinner" animation="grow" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          monsters.map((monster) => {
            return <CardBlock id={monster.id} name={monster.name} catchPhrase={monster.company.catchPhrase} cName={monster.company.name} />;
          })
        )}
      </div>
    );
  }
}
