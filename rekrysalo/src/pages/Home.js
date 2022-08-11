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
                <p className="question">Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <div>
                  <input type={"radio"} id="1" name="Valinta" value="A"></input>
                  <label for="1">Esimerkki A</label>
                  <input type={"radio"} id="2" name="Valinta" value="B"></input>
                  <label for="2">Esimerkki B</label>
                  <input type={"radio"} id="3" name="Valinta" value="C"></input>
                  <label for="3">Esimerkki C</label>
                </div>
                <p className="question">Aikatauluta rekrytointisi:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <div>
                  <input type={"checkbox"} id="1" name="Esimerkki" value="Esimerkki"></input>
                  <label for="1">Esimerkki</label>
                </div>
                <p className="question">Arvioi budjetti rekrytoinnille:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <p></p>
                
            </div>
          </div>

          <div className="Header">
            <TopFooter text="OSAAMISEN TARVE" />
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