import React, {Component} from "react"
import { Typography, Box } from "@material-ui/core"

export default class Title extends Component{
    render(){
        return(
            <Box display={"flex"}>
            <Box margin={"auto"}>
              <Typography 
                        variant="h4"
                        color={this.props.color}>{this.props.title}</Typography>
            </Box>
          </Box>
        )
    }
}

