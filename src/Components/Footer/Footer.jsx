import { NavLink, useLocation } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import './Sass/Footer.css'
const Footer = () => {
  const location = useLocation();
  return (
    <>
      <Container maxWidth="xxl" id="footer" style={{ backgroundColor: "#001430" }}>
        <Box py={3} >
          <Box className='d-flex justify-content-center'>
            <ul className='d-flex'>
              {
                [{ id: "footer-nav-1", title: "Home", path: "/" }, { id: "footer-nav-2", title: "Blog", path: "/blog" }, { id: "footer-nav-3", title: "Terms & Conditions", path: "/terms-&-conditions" }, { id: "footer-nav-4", title: "Privacy Policy", path: "/privacy-policy" }].map(item => {
                  return <li key={item.id} className="mx-2"><NavLink className={location.pathname === item.path ? "active" : "text-white"} to={item.path}>{item.title}</NavLink></li>
                })
              }
            </ul>
          </Box>
          <Box className='d-flex justify-content-center'>
            <Typography align='center' variant='body' className="text-white"><Copyright /> {new Date().getFullYear()} Dental Implant Melbourne. All Rights Reserved.</Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Footer