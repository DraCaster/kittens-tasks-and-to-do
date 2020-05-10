import React, { Component } from "react"
import { TextField, Button, Box, Grid, Card, CardContent, Typography, CardActions } from "@material-ui/core"
import kitten from "../assets/kitten.png"
import { withStyles } from "@material-ui/core/styles"
import { pink } from "@material-ui/core/colors"
import AddIcon from '@material-ui/icons/PostAddTwoTone';
import createSpacing from "@material-ui/core/styles/createSpacing"

const styles = theme => ({
  Typography: {
    color: pink[500]
  },
  ButtonAdd:{
    margin: theme.spacing(3)
  }
});
class TaskForm extends Component {
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
    const { classes } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <Card>
          <Grid container direction="row"
            justify="center"
            alignItems="center">
              <CardContent>
            <Grid item sm="6">
              
                <img src={kitten} width="150" height="130" />
                <Typography className={classes.Typography}>
                  <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                    Add Task or To Do
                    </Box>
                </Typography>
             
            </Grid>
            </CardContent>
            <CardActions>
            <Grid item sm="6">
              <TextField
                type="text"
                name="title"
                label="Task"
                placeholder="Write a task"
                onChange={this.onChange}
                value={this.state.title}
                variant='outlined'
                required
              ></TextField>
              <Button className={classes.ButtonAdd} variant="contained" color="secondary" type="submit" startIcon={<AddIcon />}>
                Add To Do
              </Button>
            </Grid>
            </CardActions>
          </Grid>
        </Card>
      </form>
    );
  }
}

export default withStyles(styles)(TaskForm)