import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { SectionalHeading } from "../../../../Components/Components";
import symImg from '../../Images/symptoms-img.png';
import './Sass/PreventionSec.css';

const PreventionSec = () => {
    return (
        <>
            <section className="mb-md-5 mb-3">
                <Container maxWidth="xxl" id="preventionSec">
                    <Grid container={true} spacing={5}>
                        <Grid item={true} xs={12} sm={12} md={6} lg={6} className="order-md-0 order-1">
                            <Box>
                                <SectionalHeading Span="Symptoms" Head="Corona Virus Symptoms" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse" />
                            </Box>
                            <Box px={2} mt={3}>
                                <Grid container={true} spacing={4}>
                                    {
                                        ["Headache", "Cough", "Sore Throat", "Fever", "Shortness of Breath", "Tired", "Vomiting", "Cold", "Diarrhea", "Muscle Pain"].map((item, index) => {
                                            return <Grid key={`sym-${index + 1}`} item={true} xs={12} sm={6} md={6} lg={6}>
                                                <Box p={3} className="d-flex align-items-center symCard">
                                                    <CheckIcon />
                                                    <Box className="ms-3">
                                                        <Typography variant="h6" className="symTitle">{item}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} sm={12} md={6} lg={6} className="d-lg-block d-md-none d-block order-md-1  order-0">
                            <Box className="d-flex justify-content-center align-items-center">
                                <img src={symImg} alt="" className="img-fluid" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default PreventionSec