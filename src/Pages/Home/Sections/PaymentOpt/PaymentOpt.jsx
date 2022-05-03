import { Container, Box, Grid, Paper} from "@mui/material"
import { SectionalHeading } from "../../../../Components/Components";
import './Sass/PaymentOpt.css';
import data from "./Data/Data";
const PaymentOpt = () => {
    return (
        <>
            <section className="mb-md-5 mb-3">
                <Container maxWidth="xxl" className="py-md-5 py-3" id="paymentOptSec">
                    <Grid container={true}>
                        <Grid item={true} xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box className="text-center mb-md-5 mb-3">
                                <SectionalHeading Span="Payment Options" Head="Payment Plans for your dental treatment" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus." />
                            </Box>
                            <Box>
                                <Grid container={true} spacing={3} justifyContent="center">
                                    {
                                        data.map(item => {
                                            return <Grid key={item.id} item={true} xs={6} sm={4} md={4} lg={2}>
                                                <Box  p={2} className="bg-transparent shadow-0">
                                                        <img  className="img-fluid" src={item.image} alt={item.title}  />
                                                </Box>
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default PaymentOpt