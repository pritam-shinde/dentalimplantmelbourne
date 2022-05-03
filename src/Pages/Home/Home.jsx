import Helmet from "react-helmet";
import { Container, Grid } from "@mui/material";
import { Hero } from "../../Components/Components";
import { FacilitiesSec, AboutSec, Types, PaymentOpt, AddressSec } from "./Sections/Sections";
import Blogs from "./Sections/Blogs/Blogs";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - dentalimplant.melbourne</title>
      </Helmet>
      <Hero subtitle="Welcome To Corf" heading="Our Smiles Speak Themselves" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis in harum veniam consequuntur? Quia iure illo laudantium consectetur." btnTxt="book an appointment" />
      <Container maxWidth="xxl" className="p-0">
        <Grid container={true}>
          <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
            <FacilitiesSec />
            <AboutSec />
            <Types />
          </Grid>
        </Grid>
        <PaymentOpt />
      </Container>
      <Container maxWidth="xxl" className="p-0">
        <Grid container={true}>
          <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
            <Blogs />
          </Grid>
        </Grid>
      </Container>
      <AddressSec />
    </>
  )
}

export default Home
