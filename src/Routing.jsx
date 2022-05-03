import { Routes, Route } from "react-router-dom";
import { Home, About, Cost, Payment, Treatment, Blog, Covid, Error, Terms_Cond, PrivacyPolicy, SingleBlog } from './Pages/Pages'

const Routing = () => {
  return (
    <>
    <Routes>
        {
          [{ id: "home-page", component: <Home />, path: "/" }, { id: "about-page", component: <About />, path: "/about/" }, { id: "payment-page", component: <Payment />, path: "/payment-option/" }, { id: "cost-page", component: <Cost />, path: "/cost/" }, { id: "treatment-page", component: <Treatment />, path: "/treatment/" }, { id: "blog-page", component: <Blog />, path: "/blog/" }, { id: "single-blog", component: <SingleBlog />, path: "/blog/:slug/" },{ id: "covid-page", component: <Covid />, path: "/covid-19/" }, { id: "tnc-page", component: <Terms_Cond />, path: "/terms-&-conditions/" }, { id: "privacy-page", component: <PrivacyPolicy />, path: "/privacy-policy/" },{ id: "error-page", component: <Error />, path: "*" }].map(item => {
            return <Route key={item.id} path={item.path} element={item.component} />
          })
        }
      </Routes>
    </>
  )
}

export default Routing