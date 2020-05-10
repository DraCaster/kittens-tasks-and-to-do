import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Components
import Tasks from "./components/Tasks"
import Navbar from "./components/Navbar"
import TaskAdd from "./components/TaskAdd"
import About from "./components/About"

// data
import tasks from "./sample/tasks.json"

//UI
import {Card} from "@material-ui/core"

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
    
    return (
      <Router>
        <div style={{ backgroundColor: "#02d4ad", width: "100%", height: "100vh" }}>
          <Navbar />
          <Route
            exact
            path="/"
            render={props => (
              <Card>
                <TaskAdd addTask={this.addTask} />
                <Tasks
                  tasks={this.state.tasks}
                  checkDone={this.checkDone}
                  deleteTask={this.deleteTask}
                />
              </Card>
            )}
          ></Route>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
