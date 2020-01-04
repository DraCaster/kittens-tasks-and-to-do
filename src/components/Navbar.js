import React from "react"
import { Link } from "react-router-dom"
import { Typography, Toolbar, Avatar, Box, Button } from "@material-ui/core"
import kitten from "../assets/kitten.png"

export default () => {
  return (
    <Toolbar>
      <Box display={"flex"}>
        <Box margin={"auto"}>
          <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
              Kittens: Tasks and To Do
            </Box>
          </Typography>
        </Box>
      </Box>
      <Avatar src={kitten} variant="rounded"></Avatar>
      <Box m={0.5}>
        <Button variant="contained" color="secondary">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </Button>
      </Box>
      <Box m={0.5}>
        <Button variant="contained" color="secondary">
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>{" "}
        </Button>{" "}
      </Box>
    </Toolbar>
  );
};
