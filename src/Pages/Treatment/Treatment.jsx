import { Hero } from '../../Components/Components'
import { Helmet } from "react-helmet";
import Data from './Data/Data'
import { Container, Grid, Box } from "@mui/material";
import './sass/treatment.css'


const Treatment = () => {
  return (
    <>
      <Helmet>
        <title>Treatment - Dental Implant Melbourne</title>
      </Helmet>
      <Hero pageHead="Dental Implant" />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} sm={11} md={10} lg={10} className="mx-auto">
                <Box my={5}>
                  <Grid container={true}>
                    {
                      Data.map(itemMain => {
                        return <Box>
                          <Grid container={true} spacing={3}>
                          {
                            itemMain.image !== null ? <Grid item={true} xs={12} sm={6} md={6} lg={6} className={itemMain.side === "right" ? 'order-md-1 order-0': "order-md-0 order-1"} >
                              <Box>
                                <img src={itemMain.image} alt="" className='img-fluid' />
                              </Box>
                            </Grid> : null
                          }
                          <Grid item={true} xs={12} sm={itemMain.image === null ? 12 : 6} md={itemMain.image === null ? 12 : 6} lg={itemMain.image === null ? 12 : 6} className={itemMain.side === "right" ? 'order-md-0 order-1' : "order-md-1 order-0" }>
                            <Box>
                              <h2>{itemMain.title}</h2>
                              {
                                itemMain.para.map((item, index) => {
                                  return <p key={`${itemMain.id}.${index}`}>{item}</p>
                                })
                              }
                            </Box>
                          </Grid>
                        </Grid>
                        </Box>
                      })
                    }
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main >
    </>
  )
}

export default Treatment