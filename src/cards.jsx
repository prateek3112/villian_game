import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import "./App.css";

export default class CardBlock extends Component {
  render() {
    const { id, name , catchPhrase , cName} = this.props;

    return (
      <div>
        <Card key={id} border="danger" style={{ width: "18rem" }}>
          <Card.Header>{cName}</Card.Header>
          <Card.Body>
    <Card.Title>{name}</Card.Title>
            <Card.Text>
              {catchPhrase}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
