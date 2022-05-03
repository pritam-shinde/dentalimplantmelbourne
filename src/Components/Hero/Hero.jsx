import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomButton, Paragraph } from '../Components'
import HomeBanner from './Images/home-banner.jpg';
import AboutBg from './Images/aboutbg.jpg';
import TncBg from './Images/tncbg.jpg';
import treatmentBg from './Images/dentalimplant.jpg';
import privayBg from './Images/privacy.jpg';
import blogBg from './Images/blog.jpg';

const useStyles = makeStyles(theme => ({
  hero: { height: "84vh", width: '100%', backgroundRepeat: "no-repeat", backgroundSize: "cover" },
  heroOther:{height: "50vh", width: '100%', backgroundRepeat: "no-repeat", backgroundSize: "cover"},
  bannerTextDesk: { backgroundColor: '#003782a1', maxWidth: "600px", backdropFilter: `blur(4px)` },
  bannerTeskMob: { backgroundColor: '#003782a1', maxWidth: "350px", backdropFilter: `blur(4px)` },
  headingDesk: { fontSize: "3.5rem !important", fontWeight: '500 !important' },
  headingMob: { fontSize: "2.2rem !important", fontWeight: 700 },
  pagePara: { fontSize: "1.5rem !important", letterSpacing: "1px" }
}))

const Hero = ({ subtitle, heading, body, btnTxt, pageHead }) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const location = useLocation()
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xxl" className={location.pathname === "/" ? classes.hero : classes.heroOther} style={{ backgroundImage: location.pathname === "/" ? `url(${HomeBanner})` : location.pathname === '/about/' ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${AboutBg})` : location.pathname === "/terms-&-conditions/" ? `url(${TncBg})` : location.pathname === "/treatment/" ? `url(${treatmentBg})` : location.pathname === "/privacy-policy/" ? `url(${privayBg})` : location.pathname === "/blog/" ? `url(${blogBg})` : null, backgroundPosition: 'center',  }}>
        <Box style={{ height: "inherit" }}>
          <Grid container={true} style={{ height: "inherit" }}>
            <Grid item={true} xs={12} sm={11} md={11} lg={10} className="mx-auto" style={{ height: "inherit" }} >
              <Box className="d-flex align-items-center justify-content-md-start justify-content-center" style={{ height: "inherit" }} >
                {
                  location.pathname === "/" ? <Box className={`${width < 576 ? classes.bannerTeskMob : classes.bannerTextDesk} shadow rounded animate__animated animate__slideInUp`} py={2} px={3}>
                    <Typography variant='subtitle1' className='text-white' >{subtitle}</Typography>
                    <Typography variant='h1' className={`text-white ${width < 576 ? classes.headingMob : classes.headingDesk} `} gutterBottom={true} >{heading}</Typography>
                    <Paragraph cls="text-white" para={body} />
                    <CustomButton btnText={btnTxt} size="large" />
                  </Box> : location.pathname !== "/" ? <Box>
                    <Typography variant="h1" align='center' className={` ${location.pathname === "/about" ? "text-white" : "text-dark"} ${width < 576 ? classes.headingMob : classes.headingDesk} ${location.pathname === "/privacy-policy" ? "text-white" : "text-dark"} `}>{pageHead}</Typography>
                    <Typography variant='subtitle1' align='center' className={`${classes.pagePara} ${location.pathname === "/about" ? "text-white" : "text-dark"}`}>{body}</Typography>
                  </Box> : null
                }
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Hero