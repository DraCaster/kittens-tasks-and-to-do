import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Typography, Box, Button} from '@material-ui/core'
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
            <Box display={'flex'}>
                <Box margin={'auto'}>
                <div style={this.StyleComplete()}>
                <Typography>{title}
                <Checkbox
                    onChange={this.props.checkDone.bind(this, id)}
                    value="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /></Typography>
                 <Button
                    startIcon={<DeleteIcon/>}
                    variant="contained"
                    color="secondary"
                    onClick={this.props.deleteTask.bind(this, id)}
                >
                Delete
                </Button>
            </div>

                </Box>
            </Box>
            
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