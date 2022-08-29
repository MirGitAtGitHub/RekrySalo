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
  if(localStorage.getItem("pagenumber") != null){
    console.log("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Kyllä. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Ei.");
  }
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
            <textarea className="answer" rows="1" cols="70" id="answer1"></textarea>

            <div>
              <input type={"radio"} id="r1" name="Valinta" value="E"></input>
              <label for="r1">Etätyö tai monta sijaintia</label>
              <input type={"radio"} id="r2" name="Valinta" value="F"></input>
              <label for="r2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>


            <p className="question">Yrityksen kuvaus:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}} id="answer2"></textarea>

            <p className="question">Työsopimuksen tyyppi</p>
            <select className="Dropdown" name="valinta" id="Työ1">
              <option className="boxed" id="Työ1o1">Määräaikainen</option>
              <option className="boxed" id="Työ1o2">Toistaiseksi voimassaolo</option>
              <option className="boxed" id="Työ1o3">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="Työ2">
              <option className="boxed" id="Työ2o1">Kokoaikainen</option>
              <option className="boxed" id="Työ2o2">Osa-aikainen</option>
            </select>
            
            <p className="question">Tehtävänimike:</p>
            <textarea className="answer" rows="1" cols="70" id="answer3"></textarea>
            
            <p className="question">Työn kuvaus:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}} id="answer4"></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea className="answer" rows="1" cols="70" id="answer5"></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea className="answer" rows="1" cols="70" id="answer6"></textarea>

            <p className="question">Hakemusten vastaanotto sähköpostiosoite:</p>
            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}} id="answer7"></textarea>

            <div>
              <label className="question">Ilmoituksen julkaisuaika:</label><br></br>
              <input type="date" id="julkaisuaika1" name="julkaisuaika" style={{"margin-right":"20px"}}></input>
              <input type="date" id="julkaisuaika2" name="to_julkaisuaika"></input>
            </div>

            <p className="question">Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}} id="answer8"></textarea>

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