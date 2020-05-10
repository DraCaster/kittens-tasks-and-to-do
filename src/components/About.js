import React from "react"
import { Typography, Box, Card, CardContent, Container, Button } from "@material-ui/core"
import Title from "../components/Title"
import LinkIcon from '@material-ui/icons/Link';
import Kittens from "../assets/kittens.png"
import { makeStyles } from '@material-ui/core/styles'
export default function About() {

  const useStyles = makeStyles(theme => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardContent: {
      margin: theme.spacing(5, 0, 3, 0)
    }
  }))
  return (
    <Container component="main" maxWidth="xs">
      <Card className={useStyles.paper}>
        <CardContent>
          <div className={useStyles.cardContent}>
            <Card>
              <CardContent>
                <Title title={"Kittens: Tasks and To Do"} color={"pink"} />
                <Box display={"flex"}>
                  <Box margin={"auto"}>
                    <img src={Kittens} width="170" height="150" />
                    <Typography variant="subtitle1">
                      Developer: Lujan Rojas.
              </Typography>
                    <Typography variant="subtitle2">Make with love. alt+3</Typography>
                    <Button
                      variant="contained"
                      target="_blank"
                      href="https://github.com/DraCaster"
                      size="small"
                      startIcon={<LinkIcon />}
                    >
                      GitHub
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card></div>
        </CardContent>
      </Card>
    </Container>

  );
}
