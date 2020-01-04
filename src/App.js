import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Components
import Tasks from "./components/Tasks"
import Navbar from "./components/Navbar"
import TaskForm from "./components/TaskForm"
import About from "./components/About"

// data
import tasks from "./sample/tasks.json"
import kitten from "./assets/kitten.png"

//UI
import { Typography, Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { pink } from "@material-ui/core/colors"

const styles = theme => ({
  Typography: {
    color: pink[500]
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    };
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  addTask = title => {
    const newTask = {
      id: this.state.tasks.length,
      title,
      done: false
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div style={{ backgroundColor: "#02d4ad", width:"100%", height:"100vh" }}>
          <Navbar />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Box display={"flex"}>
                  <Box margin={"auto"}>
                    <Typography component="div" className={classes.Typography}>
                      <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                        Add Task or To Do
                      </Box>
                    </Typography>
                  </Box>
                  <img src={kitten} width="150" height="130" />
                </Box>
                <TaskForm addTask={this.addTask} />
                <Tasks
                  tasks={this.state.tasks}
                  checkDone={this.checkDone}
                  deleteTask={this.deleteTask}
                />
              </React.Fragment>
            )}
          ></Route>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
