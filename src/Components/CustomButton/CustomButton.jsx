import { Button } from "@mui/material"
const CustomButton = ({btnText, size}) => {
  return (
    <>
    <Button variant="contained" size={size} className="custom-btn my-2" >{btnText}</Button>
    </>
  )
}

export default CustomButton