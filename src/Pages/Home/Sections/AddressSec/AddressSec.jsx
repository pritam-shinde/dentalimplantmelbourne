import { Container, Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import './Sass/AddressSec.css';
import data from "./Data/Data";

const AddressSec = () => {
    return (
        <>
            <section >
                <Container maxWidth="xxl" id="addressSec">
                    <Grid container={true}>
                        <Grid item={true} xs={12} sm={11} md={11} lg={10} className="mx-auto" >
                            <Box>
                                <Grid container={true} justifyContent="center" spacing={3}>
                                    {
                                        data.map(item => {
                                            return <Grid key={item.id} item={true} xs={12} sm={6} md={6} lg={4}>
                                                <Box px={3} py={4}>
                                                    <Typography align="center" style={{ color: "#0cb8b6", fontSize: "1.313rem", fontWeight: "700" }} >{item.hosName}</Typography>
                                                    <List>
                                                        {
                                                            item.details.map((item, index) => {
                                                                return <ListItem key={`details${index + 1}`}>
                                                                    <ListItemIcon style={{ color: "#0cb8b6" }}>
                                                                        {item.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item.text} className="text-white" />
                                                                </ListItem>
                                                            })
                                                        }
                                                    </List>
                                                    <Typography className="text-center" style={{ color: "#0cb8b6" }} >{item.note}</Typography>
                                                </Box>
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default AddressSec