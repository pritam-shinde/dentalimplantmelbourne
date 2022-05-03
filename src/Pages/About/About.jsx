import { Helmet } from "react-helmet";
import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { Hero, SectionalHeading } from "../../Components/Components";
import { ContentWithHead } from "./Components/Components";
import data from './Data/Data';
import Doctor from './Images/Doctor.jpg';
import './Sass/About.css';



const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Dental Implant Melbourne</title>
      </Helmet>
      <Hero pageHead="About Us" body="Our Dentist are expert in Dental Implants." />
      <main>
        <section className="my-md-5 my-3">
          <Container maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
                <Box class="mb-md-5 mb-4 text-center" className="text-center">
                  <SectionalHeading Span="About Us" Head="Why Choose Us?" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus." />
                </Box>
                <Box>
                  <Grid container={true} spacing={3}>
                    <Grid item={true} xs={12} sm={6} md={6} lg={6} >
                      <Box p={3} className="imgContainer">
                        <Box id="borderBox"></Box>
                        <img src={Doctor} alt="doctor" className="img-fluid rounded" />
                      </Box>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={6} lg={6} >
                      <Box>
                        <ContentWithHead title="Experts in Dental Implant" text="Our Dentist is an experienced dentist with a special interest in Oral Surgery and is an expert in Wisdom Teeth extraction and Dental Implants. Our Dentist’s approach is gentle, caring and want to make sure the experience is still pleasant for the patients. This can be seen from our reviews on Google and Facebook. Our Dentist are also has the following membership." marginBotton={0} />
                        <List>
                          {
                            ["Australian Dental Association (ADA - Victoria)", "Australian Dental Council (ADC - General Dentist)", "Australian Society of Implant Dentistry"].map((item, index) => {
                              return <ListItem key={`org-${index + 1}`}>
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
               {
                 data.map(item=>{
                   return <ContentWithHead key={item.id} title={item.title} text={item.para} marginBotton={2} />
                 })
               }
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default About