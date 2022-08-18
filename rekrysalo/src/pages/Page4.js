//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page4 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","4");
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="HAASTATTELU" current="4" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question">Haastattelutyyppi:</p>
            <select className="Dropdown" name="valinta" id="Työ">
              <option className="boxed">Ryhmähaastattelu</option>
              <option className="boxed">Etähaastattelu</option>
            </select>

            <p className="question">Suunnittele haastattelurunko:</p>
            <textarea className="answer" rows="10" cols="70"></textarea>

            <div>
              <input type={"checkbox"} id="1" name="Esimerkki" value="Esimerkki" style={{"margin-bottom":"50px"}}></input>
              <label for="1">Esimerkki kysymyksiä:</label>
            </div>

            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
              
          </div>
          <div></div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Page4;