import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="">
      <Jumbotron/>
    </div>
    
    <Cards/>
    <Footer/>
    </>
    
  )
}

export default App;