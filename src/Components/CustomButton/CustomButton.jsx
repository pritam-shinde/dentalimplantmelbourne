import { Button } from "@mui/material";
import {Link} from 'react-router-dom'
const CustomButton = ({btnText, size, link}) => {
  return (
    <>
    <Button variant="contained" size={size} className="custom-btn my-2" >{btnText}</Button>
    </>
  )
}

export default CustomButton