import CategoryShowcase from "./CategoryShowCase"
import HomeCategory from "./HomeCategory"
import Register from "./Register"
import SearchInHome from "./SearchInHome"
import LocationSpread from "./LocationSpread"
import AboutUs from "./AboutUs"
import AppSection from "./AppSection"
// import Sponser from "./Sponser"
import Footer from "../components/Footer"



const Home = () => {
  return (
    <>
       <SearchInHome/>
       <HomeCategory/>
       <CategoryShowcase/>
       <Register/>
       <LocationSpread/>
       <AboutUs/>
       <div>
        <span><p></p></span>
       </div>
       {/* <Sponser/> */}
       {/* <AppSection/> */}
    </>
  )
}

export default Home