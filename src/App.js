import Routing from "./Routing";
import { Footer, Header, Topbar } from "./Components/Components";

const App = () => {

window.myInfo=()=>{
const developer = {
  Developer:"Aditya Nitin Burse (Jain)",
  Designation:"Front-End Developer",
  Employer:"Nonstop Corporation"
} 
console.log(developer)
}

  return (
    <>
      <Topbar />
      <Header />
      <Routing />
      <Footer />
    </>
  )
}

export default App