import { Container, Grid, Box, Avatar } from "@mui/material";
import Helmet from "react-helmet";
import { SectionalHeading } from "../../../../Components/Components";
import preventImg from '../../Images/prevention-img.png';
import preventImgShape from '../../Images/prevention-shape-2.png';
import Data from "./Data/Data";
import './Sass/preventSec.css'

const PreventSec = () => {
    return (
        <>
        <Helmet>
            <title>Covid - Dental Implant Melbourne</title>
        </Helmet>
            <section>
                <Container maxWidth="xxl" id="preventSec">
                    <Grid container={true}>
                        <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
                            <Box className="py-md-5 py-3 text-center">
                                <SectionalHeading Span="Prevention" Head="How To Protect Yourself" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse" />
                            </Box>
                            <Box mt={3}>
                                <Grid container={true} spacing={4}>
                                    <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                                        <Box>
                                            <Grid container={true} spacing={3}>
                                                {
                                                    Data.map(item => {
                                                        return <Grid key={item.id} item={true} xs={12} sm={12} md={6} lg={6}>
                                                            <div className="media d-flex">
                                                                <div className="circle flex-shrink-0">
                                                                    <Avatar>{item.icon}</Avatar>
                                                                </div>
                                                                <div className="media-body flex-grow-1 ms-3">
                                                                    <h5>{item.title}</h5>
                                                                    <p>{item.descr}</p>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    })
                                                }
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item={true} xs={12} sm={12} md={6} lg={6} className="d-lg-block d-none">
                                        <Box className="imgContainer">
                                            <img src={preventImg} alt="" className="img-fluid" />

                                            <Box className="shape">
                                                <img src={preventImgShape} alt="" className="img-fluid" />
                                            </Box>
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

export default PreventSec