import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Typography, Button, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
export default class Task extends Component {

    StyleComplete() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.task;
        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <Typography style={this.StyleComplete()}>{title}
                        <Checkbox
                            onChange={this.props.checkDone.bind(this, id)}
                            value="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={this.props.deleteTask.bind(this, id)}
                    >
                        Delete
                </Button>
                </Grid>
            </Grid>
        )
    }
}


Task.propType = {
    task: PropTypes.object.isRequired
}

const btnDeleteStyle = {
    fontSize: '18px',
    background: '#EA2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}