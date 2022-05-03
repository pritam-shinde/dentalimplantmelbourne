import { Container, Grid, Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { SectionalHeading } from '../../../../Components/Components';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import covidImg from '../../Images/cov img.png';
import shape2 from '../../Images/cov shape.png'
import './Sass/AboutCovid.css';

const AboutCovid = () => {
    return (
        <>
            <section className="mb-md-5 mb-3">
                <Container maxWidth="xxl" id="aboutCovid">
                    <Grid container={true}>
                        <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto py-md-5 py-3">
                            <Box>
                                <Grid container={true} spacing={3}>
                                    <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                                        <Box className="covidImg">
                                            <img src={covidImg} alt="girl with mask" className="img-fluid" />
                                            <Box className="shape">
                                                <img src={shape2} alt="shape2" />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                                        <Box>
                                            <SectionalHeading Span="About Covid" Head="How COV-19 Spreads" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis." />
                                        </Box>
                                        <Box mt={1}>
                                            <Typography className="font-weight-bold" style={{ fontSize: "1.1rem" }}>The best way to prevent illness is to avoid being exposed to this virus.</Typography>
                                            <List>
                                                {
                                                    ["Clean and disinfect frequently touched surfaces", "Avoid touching your eyes, nose, and mouth", "Clean your hands with a hand sanitizer", "Cover coughs and sneezes", "Stay home if you’re sick", "Wear a facemask if sick", "Cover your mouth and nose"].map((item, index) => {
                                                        return <ListItem>
                                                            <ListItemIcon>
                                                                <LibraryAddCheckIcon style={{ color: "#0cb8b6", }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    })
                                                }
                                            </List>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default AboutCovid