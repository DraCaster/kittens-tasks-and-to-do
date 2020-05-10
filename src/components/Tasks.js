import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task=> (
            <Paper elevation={5} key={task.id}>
                <Task
                    task={task}
                    key={task.id}
                    checkDone={this.props.checkDone}
                    deleteTask={this.props.deleteTask}
                />
            </Paper>
        ));
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;