import { Box, Typography, } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Paragraph, } from "../../../../Components/Components";

const useStyles = makeStyles(theme => ({
    contentHead: { fontSize: "1.5rem !important" }
}))

const ContentWithHead = ({ title, text, marginBottom }) => {
    const classes = useStyles();
    return (
        <>
            <Box mb={marginBottom}>
                <Typography variant="h3" className={classes.contentHead} gutterBottom>{title}</Typography>
                <Paragraph para={text} />
            </Box>
        </>
    )
}

export default ContentWithHead