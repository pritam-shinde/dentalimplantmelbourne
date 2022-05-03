import Routing from "./Routing";
import { Footer, Header, Topbar } from "./Components/Components";

const App = () => {
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