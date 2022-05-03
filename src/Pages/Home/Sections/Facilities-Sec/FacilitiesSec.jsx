import { Box, Grid, Card, CardHeader, CardContent, CardActionArea, Avatar, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import facilitiesData from './Data/Data';
import './Sass/Facilities.css'

const useStyles = makeStyles(theme=>({
    cardTitle:{fontSize: "1.313rem !important", fontWeight: "700 !important"}
}))

const FacilitiesSec = () => {

    const classes = useStyles()

    return (
        <>
            <Box id="facilitiesSec">
                <Grid container={true}>
                    {
                        facilitiesData.map(item => {
                            return <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                                <Box className="mb-md-0 mb-3">
                                    <Card className="rounded-0" style={{boxShadow: "none"}}>
                                        <CardActionArea>
                                            <CardHeader
                                                avatar={
                                                    <Avatar >
                                                        {item.icon}
                                                    </Avatar>
                                                }
                                            />
                                            <CardContent>
                                                <Typography variant="h3" className={`card-title ${classes.cardTitle}`} gutterBottom={true}>{item.cardTitle}</Typography>
                                                <Typography variant='body1' className="card-text text-muted">{item.cardText}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default FacilitiesSec