import { Container, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersonImg from './Images/doc1.png';
import './Sass/Hero.css'

const useStyles = makeStyles(theme => ({
    heading: { fontSize: "4rem !important", fontWeight: "700 !important" }
}))

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xxl" id="Hero">
                <Grid container={true} style={{height:"inherit"}}>
                    <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto" style={{height:"inherit"}}>
                        <Box style={{height:"inherit"}}>
                            <Grid container={true} style={{height:"inherit"}}>
                                <Grid item={true} xs={12} sm={6} md={6} lg={6} className="d-flex align-items-center" style={{height:"inherit"}}>
                                    <Box>
                                        <Typography variant="h1" className={`text-white ${classes.heading}`}>Prevention From Corona Virus Stay Home, Stay Safe</Typography>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} sm={6} md={6} lg={6} className="d-lg-flex justify-content-center align-items-end d-none">
                                    <img src={PersonImg} alt="" className="img-fluid animate__animated animate__slideInUp" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Hero