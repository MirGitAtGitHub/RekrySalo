//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import{useEffect} from "react";
const Page2 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","2");
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="TYÖPAIKKAILMOITUS" current="2" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question">Yrityksen sijainti:</p>
            <textarea className="answer" rows="1" cols="70"></textarea>

            <div>
              <input type={"radio"} id="1" name="Valinta" value="E"></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"radio"} id="2" name="Valinta" value="F"></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>


            <p className="question">Yrityksen kuvaus:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}}></textarea>

            <p className="question">Työsopimuksen tyyppi</p>
            <select className="Dropdown" name="valinta" id="Työ">
              <option className="boxed">Määräaikainen</option>
              <option className="boxed">Toistaiseksi voimassaolo</option>
              <option className="boxed">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="Työ">
              <option className="boxed">Kokoaikainen</option>
              <option className="boxed">Osa-aikainen</option>
            </select>
            
            <p className="question">Tehtävänimike:</p>
            <textarea className="answer" rows="1" cols="70"></textarea>
            
            <p className="question">Työn kuvaus:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}}></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea className="answer" rows="1" cols="70"></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea className="answer" rows="1" cols="70"></textarea>

            <p className="question">Hakemusten vastaanotto sähköpostiosoite:</p>
            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}}></textarea>

            <div>
              <label className="question">Ilmoituksen julkaisuaika:</label><br></br>
              <input type="date" id="julkaisuaika" name="julkaisuaika" style={{"margin-right":"20px"}}></input>
              <input type="date" id="julkaisuaika" name="to_julkaisuaika"></input>
            </div>

            <p className="question">Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}}> </textarea>

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

export default Page2;