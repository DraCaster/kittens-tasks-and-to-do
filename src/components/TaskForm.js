import React, { Component } from "react"
import { TextField, Button, Box, Paper } from "@material-ui/core"
import createSpacing from "@material-ui/core/styles/createSpacing"

export default class addTodo extends Component {
  state = {
    title: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Paper> 
        <Box display={"flex"}>
          <Box margin={"auto"}>
            <TextField
              type="text"
              name="title"
              placeholder="Write a task"
              onChange={this.onChange}
              value={this.state.title}
              required
            ></TextField> <createSpacing/>
             <Button variant="contained" color="secondary" type="submit">
          Add To Do
        </Button>
          </Box>
        </Box>
        </Paper>
      </form>
    );
  }
}
