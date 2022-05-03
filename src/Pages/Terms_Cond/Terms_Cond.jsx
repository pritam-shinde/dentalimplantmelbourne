import { Container, Grid, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { makeStyles } from "@mui/styles";
import { Hero } from "../../Components/Components";
import Data from "./Data/Data";
import './Sass/Terms_Cond.css';
import { useEffect, useState } from "react";

const useStyles = makeStyles(theme => ({
  cardTitle: { fontSize: "1.8rem !important" },
  mobCardTitle: { fontSize: "1.3rem !important" }
}))

const Terms_Cond = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  })

  const classes = useStyles();

  return (
    <>
      <Hero pageHead="Terms & Condions" />
      <main id="terms">
        <section className="my-md-5 my-3">
          <Container maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} sm={10} md={10} lg={10} className="mx-auto">
                {
                  Data.map(item => {
                    return <Box mt={2}>
                      <Typography variant="h2" className={width < 576 ? classes.mobCardTitle : classes.cardTitle} >{item.title}</Typography>
                      <List>
                        {
                          item.tnc.map(item => {
                            return <ListItem>
                              <ListItemIcon><CheckIcon style={{ color: "#0cb8b6" }} /></ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          })
                        }
                      </List>
                    </Box>
                  })
                }
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Terms_Cond