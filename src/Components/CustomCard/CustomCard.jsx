import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Paragraph } from "../Components";

const useStyles = makeStyles(theme => ({
    Card_Title: { fontSize: "1.313rem !important", fontWeight: "700 !important" },
}))

const CustomCard = ({ image, title, align, para, btnText, link, date, cls }) => {
    const classes = useStyles();
    return (
        <>
            <Card className="shadow">
                <Link to={link}>
                    <CardActionArea>
                        <CardMedia component="img" className="img-fluid" image={image} alt={title} style={{ height: "258px" }} />
                        <CardContent>
                            <Typography color="primary" gutterBottom>{date}</Typography>
                            <Typography variant="h3" className={classes.Card_Title} align={align} gutterBottom>{title}</Typography>
                            <Paragraph align={align} para={para} />
                        </CardContent>
                        <CardActions className={cls}>
                            <Button className="custom-btn"><Link to={link} className="text-white">{btnText}</Link></Button>
                        </CardActions>
                    </CardActionArea>
                </Link>
            </Card>
        </>
    )
}

export default CustomCard