import { Navbar,Welcome,Loader,Services,Transactions,Footer } from "../components"
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { getPosts } from "../actions/posts";

const Home = () => {
  


  return (
    <div className="max-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Home