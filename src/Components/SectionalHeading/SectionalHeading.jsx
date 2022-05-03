import { Box, Typography} from '@mui/material';
import './Sass/SectionalHeading.css'

const SectionalHeading = ({Span, Head, para, variant}) => {
    return (
        <>
            <Box className="sectionalHeading">
                <Typography className="secTop-title">{Span}</Typography>
                <Typography variant={variant ? variant : "h2"} className="secTitle" gutterBottom>{Head}</Typography>
                <Typography className="secPara">{para}</Typography>
            </Box>
        </>
    )
}

export default SectionalHeading