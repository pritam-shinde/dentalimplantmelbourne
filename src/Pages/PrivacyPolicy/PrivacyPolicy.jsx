import { Container, Grid, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Hero } from "../../Components/Components";
import Data from "./Data/Data";
import CheckIcon from '@mui/icons-material/Check';
import './style/Privacy.css'


const PrivacyPolicy = () => {
    return (
        <>
            <Hero pageHead="Privacy Policy" />
            <main id="terms">
                <section className="my-md-5 my-3">
                    <Container maxWidth="xxl">
                        <Grid container={true}>
                            <Grid item={true} xs={11} sm={10} md={10} lg={10} className="mx-auto">
                                {
                                    Data.map(item => {
                                        return (<>
                                            <Box key={item.id} mt={3}>
                                                {
                                                    item.title.length > 1 ? <><h2>{item.title[0]}</h2> <h3>{item.title[0]}</h3></> : <h2>{item.title}</h2>
                                                }
                                                {
                                                    item.para.length > 0 ? item.para.map((item, index) => {
                                                        return <p key={`priavacyPolicyPara${index}.${index}`}>{item}</p>
                                                    }) : null
                                                }
                                                {
                                                    item.list !== null ? <List className="pl-md-4 pl-2" >
                                                        {
                                                            item.list.map((item, index) => {
                                                                return <ListItem key={`privacyParaList${index}`}>
                                                                    <ListItemIcon>
                                                                        <CheckIcon style={{ color: "#0cb8b6" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                            })
                                                        }
                                                    </List> : null
                                                }
                                            </Box>
                                        </>)
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default PrivacyPolicy