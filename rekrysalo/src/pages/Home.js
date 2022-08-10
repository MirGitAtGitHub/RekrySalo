import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Middle} from "../modules/Middle";
const Home = () => {
  return (
      <html>
        <body className="Body">
          
          <div className="Content">
            <HomeBackImage />
            <Middle />
          </div>

          <div className="Header">
            <TopFooter text="Testiteksti" />
          </div>
          
          <div>
            {Array(39)
            .fill()
            .map((_, i) => (
              <p key={i}>{i}</p>
            ))}
          </div>
         
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "green"
            }}
          >
            <Footer />
          </div>
        </body>

      </html>
  )
}

export default Home