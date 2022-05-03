import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom'
import { Container, Box, Grid, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckIcon from '@mui/icons-material/Check';
import { Paragraph, SectionalHeading } from '../../Components/Components';
import Data from "./Data/Data";
import './Sass/Cost.css'

const useStyles = makeStyles(theme=>({
  index0:{backgroundColor:"#61afd6", color:"#fff"},
  index1:{backgroundColor:"#0cb8b6", color:"#fff"},
  index2:{backgroundColor:"#8ac54d", color:"#fff"},
}))

const Cost = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Cost - Dental Implant Melbourne</title>
      </Helmet>
      <main>
        <section className="my-md-5 my-3" >
          <Container maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
                <Box className="text-center">
                  <SectionalHeading variant="h1" Span="Pricing" Head="Dental Implant Cost in Melbourne" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </Box>
                <Box py={5}>
                  <Grid container={true} spacing={3} justifyContent="center">
                    {
                      Data.map((item, index) => {
                        return <Grid key={item.id} item={true} xs={12} sm={6} md={3} lg={3}  >
                          <div className="card border-0 shadow">
                            <div className={`card-header  ${index === 0 ? classes.index0 : index === 1 ? classes.index1 : index === 2 ? classes.index2 : null}`}>
                              <h5 className="text-center offerTitle">{item.title}</h5>
                            </div>
                            <div className="card-body">
                              <ul className="ps-0">
                                {item.offers.map((item, index) => {
                                  return <li className="mb-md-3" key={`offer-${index + 1}`}>
                                    <div className="d-flex">
                                      <div>
                                        <CheckIcon style={{ color: "#0cb8b6" }} />
                                      </div>
                                      <div className="ms-3">
                                        <h6>{item}</h6>
                                      </div>
                                    </div>
                                  </li>
                                })}
                              </ul>
                            </div>
                          </div>
                        </Grid>
                      })
                    }
                  </Grid>
                  <Box mt={5}>
                    <Paragraph para={`Note:Any invasive or surgical procedures carry some risks. Before proceeding with such a procedure, it is best to first seek advice from a qualified health practitioner. The final cost of the procedure can only be provided after the post review of the patient's opg x-rays. A very small percentage of cases that are highly complex may be referred to a specialist surgeon.`} />

                    <h5><NavLink to="/terms-&-components">Terms & Conditions</NavLink></h5>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Cost