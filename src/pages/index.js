import * as React from "react"
import GlobalStyles from "../Components/GlobalStyles/global.js"
import { Helmet } from "react-helmet"
import { Header } from "../Components/Header/index"
import { Main } from "../Components/Main/index"
import { Footer } from "../Components/zFooter/index"


const IndexPage = () => {
  return (
   <div>
     <Helmet>
       <title>My Blog</title>
     </Helmet>
     <GlobalStyles/>
     <Header/>
     <Main/>
     <Footer/>
   </div>
  )
}

export default IndexPage
