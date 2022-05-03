import { Container, Box, Grid, Avatar } from "@mui/material";
import { Call, AccessTime, Send, Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import './Styles/Topbar.css'

const Topbar = () => {
    return (
        <>
            <Container maxWidth="xxl" className="d-lg-block d-none" id="topBar">
                <Grid container={true}>
                    <Grid item={true} xs={12} sm={11} md={11} lg={10} className="mx-auto" >
                        <Box>
                            <Grid container={true}>
                                <Grid item={true} xs={12} sm={9} md={9} lg={9} className="pt-2">
                                    <ul className="list-unstyled d-flex">
                                        {
                                            [{ id: "topBarLeft1", icon: <Call />, text: "Call Us: +821-456-241", link: "tel:+821-456-241" }, { id: "topBarLeft2", icon: <AccessTime />, text: "Mon-Fri 9am-5pm", link: "#" }, { id: "topBarLeft3", icon: <Send />, text: "Email: hello@info.com", link: "mailto:hello@info.com" }].map(item => {
                                                return <li key={item.id} className="mx-2">
                                                    <a href={item.link} className="text-dark">
                                                        <Avatar>{item.icon}</Avatar>
                                                        {item.text}
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </Grid>
                                <Grid item={true} xs={12} sm={3} md={3} lg={3} className="d-flex justify-content-end pt-2">
                                    <Box>
                                        <ul className="d-flex">
                                            {
                                                [{ id: "tobarRight1", icon: <Facebook />, link: "#" }, { id: "tobarRight2", icon: <Instagram />, link: "#" }, { id: "tobarRight3", icon: <Pinterest />, link: "#" }, { id: "tobarRight4", icon: <Twitter />, link: "#" }].map(item => {
                                                    return <li key={item.id}>
                                                        <a href={item.link}>
                                                            <Avatar>{item.icon}</Avatar>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Topbar