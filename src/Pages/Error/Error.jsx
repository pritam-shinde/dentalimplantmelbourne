import { Container, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {  Paragraph } from "../../Components/Components";
import './Sass/Error.css';
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

const useStyles = makeStyles(theme=>({
  root:{height:"84vh"}
}))

const Error = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  return (
    <>
    <Helmet>
      <title>404! Page Not Found.</title>
    </Helmet>
      <main>
        <section>
          <Container maxWidth="xxl" className={`d-flex justify-content-center align-items-center ${classes.root}`} id="error" style={{backgroundColor:"#d9eff5"}} >
            <Box className="d-flex flex-column align-items-center">
              <Typography variant="h1" align="center">404</Typography>
              <Typography variant="h2" align="center" gutterBottom>Oops! Page Not Found!</Typography>
              <Paragraph align="center" para="Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable"  />
              <Button className="custom-btn" onClick={()=> navigate('/')} >Back To Home</Button>
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Error