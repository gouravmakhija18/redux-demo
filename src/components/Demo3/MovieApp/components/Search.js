import React, { Component } from "react";

import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
} from "react-bootstrap";

import { API_URL, API_KEY } from "../config";
import { movies } from "../actions";
import { connect } from "react-redux";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  async search() {
    let url = `${API_URL}?api_key=${API_KEY}&query=${this.state.query}`;
    await fetch(url, { 
      method: "GET"
    })
    .then((response) => response.json())
    .then((jsonObj) => {
      this.props.movies(jsonObj.results);
    });
  }

  render() {
    return (
      <div>
        <Form inline className="col-md-12 col-md-offset-4">
          <FormGroup>
            <ControlLabel>Search </ControlLabel>{" "}
            <FormControl
              type="text"
              placeholder="Search any movie"
              onChange={(event) => this.setState({ query: event.target.value })}
            />{" "}
            <Button bsStyle="success" onClick={() => this.search()}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { movies })(Search);
