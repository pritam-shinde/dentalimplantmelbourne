import { Helmet } from "react-helmet";
import { Container, Box, Grid, Card, Typography, CardContent } from "@mui/material";
import { SectionalHeading, Paragraph } from '../../Components/Components';
import Data from './Data/Data';
import './Sass/PayentOpt.css'
const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Payment Options - Dental Implant Melbourne</title>
      </Helmet>
      <main>
        <section className="my-md-5 my-3">
          <Container maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
                <Box className="text-center">
                  <SectionalHeading Span="Payment Options" Head="Payment Plans for your dental treatment" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus." variant="h1" />
                </Box>
                <Box mt={7}>
                  <Grid container={true} spacing={3} >
                    {
                      Data.map(item => {
                        return <>
                          <Grid key={item.id} item={true} xs={12} sm={6} md={4} lg={4} >
                            <Box mb={6} px={2} id="paymentOptBox">
                              <Box className="text-center rounded-pill" id="logoBox">
                                <img src={item.image} alt={item.title} className="img-fluid" />
                              </Box>
                              <Box className="text-center" id="description">
                                <h5>{item.title}</h5>
                                <p>{item.descr}</p>
                              </Box>
                            </Box>
                          </Grid>
                        </>
                      })
                    }
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Payment