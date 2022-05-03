import { Container, Grid } from "@mui/material";
import { AboutCovid, PreventionSec, PreventSec } from './Sections/Sections';
import { Hero } from "./Components/Components";
const Covid = () => {
    return (
        <>
            <Hero />
            <main>
                <AboutCovid />
                <Container maxWidth="xxl">
                    <Grid container={true}>
                        <Grid item={true} xs={11} sm={11} md={11} lg={10} className="mx-auto">
                            <PreventionSec />
                        </Grid>
                    </Grid>
                </Container>
                <PreventSec />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Covid