import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Jumbotron />
      </div>
      <div className="d-flex ">
        <h1>Photography</h1>
        </div>
      <div className="d-flex flex-row mt-4 mb-4">
        <Cards />
      </div>
      <Hero/>
      <Footer />
    </>

  )
}

export default App;