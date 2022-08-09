import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Middle} from "../modules/Middle";
const Home = () => {
  return (
      <>
        {<HomeBackImage />}
        <Footer />
        <Middle />
        <TopFooter text="Testiteksti" />
        
      </>
  )
}

export default Home