import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
const Home = () => {
  return (
      <html>
        <body className="Body">
          
          <div className="Content">
            <HomeBackImage />
            <div className="mid">
                <p className="question">Hello im just a test text space thingy,</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p className="question">Toinen kysymys, oletko koditon?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p className="question">Kolmas kysymys, oletko ihminen?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p className="question">Neljäs kysymys, oletko iloinen?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p></p>
                
            </div>
          </div>

          <div className="Header">
            <TopFooter text="Testiteksti" />
          </div>
          
          <div>
            {Array(40)
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