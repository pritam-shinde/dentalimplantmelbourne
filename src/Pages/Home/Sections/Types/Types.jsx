import { Container, Box, Grid } from "@mui/material"
import { SectionalHeading, CustomCard } from "../../../../Components/Components";
import data from "./Data/Data";

const Types = () => {
    return (
        <>
            <section className='mb-md-5 mb-3'>
                <Container maxWidth="xxl">
                    <Box className="text-center mb-md-5 mb-3">
                        <SectionalHeading Span="Dental Implant" Head="Types of Dental Implants" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus." />
                    </Box>
                    <Box>
                        <Grid container={true} justifyContent="center" spacing={3}>
                            {
                                data.map(item => {
                                    return <Grid key={item.id} item={true} xs={12} sm={6} md={6} lg={4}>
                                        <Box>
                                            <CustomCard cls="d-flex justify-content-center" image={item.image} title={item.title} align="center" para={item.para} btnText="Read More" link={'/treatment'} />
                                        </Box>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default Types