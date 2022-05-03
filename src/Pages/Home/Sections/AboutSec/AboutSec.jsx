import { Container, Box, Grid, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SectionalHeading, Paragraph, CustomButton } from '../../../../Components/Components';
import img1 from './Images/department2.jpg';
import img2 from './Images/home-eight-about2.jpg';
import bgImg from './Images/home-eight-about1.jpg';

const useStyles = makeStyles(theme => ({
    bg: { backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100%", width: "100%" }
}))

const AboutSec = () => {
    const classes = useStyles()
    return (
        <>
            <section className='mb-md-5 mb-3'>
                <Container maxWidth="xxl" >
                    <Box>
                        <Grid container={true} spacing={5}>
                            <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                                <Box>
                                    <SectionalHeading Span="About Us" Head="Hospital Doctors Examine Patients So That They Diagnose" />
                                </Box>
                                {
                                    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sit amet, consectetur."].map((item, index) => {
                                        return <Paragraph key={`aboutPara${index}`} cls="text-muted" para={item} />
                                    })
                                }
                                <CustomButton btnText="About Us" />
                            </Grid>
                            <Grid item={true} xs={12} sm={6} md={6} lg={6} className="d-lg-block d-none">
                                <Box>
                                    <Grid container={true} spacing={3}>
                                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                                            <Box className={classes.bg}>

                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                                            <Box>
                                                <Grid container={true} spacing={3}>
                                                    <Grid item={true} xs={12} >
                                                        <img src={img1} alt="" className='img-fluid' />
                                                    </Grid>
                                                    <Grid item={true} xs={12} >
                                                        <img src={img2} alt="" className='img-fluid' />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default AboutSec