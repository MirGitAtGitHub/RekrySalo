import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
const Page1 = () => {
  localStorage.setItem("pagenumber","1");
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
                <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
                <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
                
            </div>
          </div>

          <div className="Header">
            <TopFooter text="OSAAMISEN TARVE" current="1" />
          </div>
          
          <div>
            {Array(39)
            .fill()
            .map((_, i) => (
              <p key={i}>{i}</p>
            ))}
          </div>
         
          <div>
            <Footer />
          </div>
        </body>

      </html>
  )
}

export default Page1;