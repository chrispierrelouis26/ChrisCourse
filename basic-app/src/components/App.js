import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { bake_cookie, delete_cookie, read_cookie } from "sfcookies";
import { PrimaryButton } from '@fluentui/react';
import Note from "./Note";

const cookie_key = "NOTES";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      notes: [],
    };
  }
  componentDidMount() {
    const notes = read_cookie(cookie_key);

    this.setState({ notes: read_cookie(cookie_key) });
  }

  submit() {
    // create notes variable set the the note state
    const { notes, text } = this.state;

    // push new notes to notes array
    notes.push({ text });

    // update state
    this.setState({ notes });

    bake_cookie(cookie_key, this.state.notes);
  }

  clear() {
    delete_cookie(cookie_key);
    
    this.setState({notes: []});
  }
  render() {
    return (
      <div>
        <h2>Note to self</h2>
        <Form inline>
          <FormControl
            onChange={(event) => this.setState({ text: event.target.value })}
          />{" "}
          <Button onClick={() => this.submit()}> Submit </Button>
        </Form>
        {this.state.notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
        <hr/>
        <Button onClick={() => this.clear()}> Clear Notes </Button>
      </div>
    );
  }
}

export default App;
