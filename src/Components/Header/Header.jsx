import { NavLink } from "react-router-dom";
import { Grid, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Logo from './Images/Logo.png';
import './scss/Header.css'

const useStyles = makeStyles(theme => ({
  header: { backgroundColor: "#001430" },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <header className={`${classes.header} px-md-0 px-2`}>
        <Grid container={true}>
          <Grid item={true} xs={12} sm={11} md={11} lg={10} className="mx-auto">
            <Box>
              <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink to="/" className="navbar-brand">
                  <img src={Logo} alt="Logo" />
                </NavLink>
                <Button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                  <i className="navbar-toggler-icon"></i>
                </Button>
                <Box className="collapse navbar-collapse" id="menu">
                  <ul className="navbar-nav ms-auto">
                    {
                      [{ id: "nav-home-page", title: "Home", path: "/" }, { id: "nav-treatment-page", title: "Treatment", path: "/treatment/" }, { id: "nav-cost-page", title: "Cost", path: "/cost/" }, { id: "nav-payment-page", title: "Payment Option", path: "/payment-option/" }, { id: "nav-about-page", title: "About", path: "/about/" }, { id: "nav-blog-page", title: "Blog", path: "/blog/" }, { id: "nav-covid-page", title: "Covid", path: "/covid-19/" }].map(item => {
                        return <li key={item.id} className="nav-item">
                          <NavLink activeclassname={classes.active} to={item.path} className="nav-link">
                            {item.title}
                          </NavLink>
                        </li>
                      })
                    }
                  </ul>
                </Box>
              </nav>
            </Box>
          </Grid>
        </Grid>
      </header>
    </>
  )
}

export default Header