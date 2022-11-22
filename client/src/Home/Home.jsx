import { Navbar,Welcome,Loader,Services,Transactions,Footer } from "../components"

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