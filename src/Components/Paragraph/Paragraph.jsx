import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme=>({
    paraDesk:{fontSize: "1rem !important", marginBottom: "1.2rem !important"}
}))

const Paragraph = ({para, cls, align}) => {
    const classes = useStyles();
  return (
    <><Typography variant="body1" className={` ${classes.paraDesk} text-secondary ${cls}`} align={align} >{para}</Typography></>
  )
}

export default Paragraph