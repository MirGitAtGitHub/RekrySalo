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
            <textarea className="answer" rows="1" cols="70" id="answer1" onChange={() => localStorage.setItem("p2a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p2a1")}></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"radio"} id="1" name="Valinta" value="E"></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"radio"} id="2" name="Valinta" value="F"></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>


            <p className="question">Yrityksen kuvaus:</p>

            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"40px"}} id="answer2" onChange={() => localStorage.setItem("p2a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p2a2")}></textarea>

            <p className="question">Työsopimuksen tyyppi</p>
            <select className="Dropdown" name="valinta" id="Työ1" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s1",document.getElementById("Työ1").value)} defaultValue={localStorage.getItem("p2s1")}>
              <option className="boxed">Määräaikainen</option>
              <option className="boxed">Toistaiseksi voimassaolo</option>
              <option className="boxed">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="Työ2" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s2",document.getElementById("Työ2").value)} defaultValue={localStorage.getItem("p2s2")}>
              <option className="boxed">Kokoaikainen</option>
              <option className="boxed">Osa-aikainen</option>
            </select>
            
            <p className="question">Tehtävänimike:</p>
            <textarea className="answer" rows="1" cols="70" id="answer3" style={{"margin-bottom":"40px"}} onChange={() => localStorage.setItem("p2a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p2a3")}></textarea>

            
            <p className="question">Työn kuvaus:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}} id="answer4" onChange={() => localStorage.setItem("p2a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p2a4")}></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea className="answer" rows="1" cols="70" id="answer5" onChange={() => localStorage.setItem("p2a5",document.getElementById("answer5").value)} defaultValue={localStorage.getItem("p2a5")}></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea className="answer" rows="1" cols="70" id="answer6" onChange={() => localStorage.setItem("p2a6",document.getElementById("answer6").value)} defaultValue={localStorage.getItem("p2a6")}></textarea>

            <p className="question">Hakemusten vastaanotto sähköpostiosoite:</p>

            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}} id="answer7" onChange={() => localStorage.setItem("p2a7",document.getElementById("answer7").value)} defaultValue={localStorage.getItem("p2a7")}></textarea>


            <div style={{"margin-bottom":"40px"}}>
              <label className="question">Ilmoituksen julkaisuaika:</label><br></br>

              <input type="date" id="julkaisuaika1" name="julkaisuaika" style={{"margin-right":"20px"}} onChange={() => localStorage.setItem("p2d1",document.getElementById("julkaisuaika1").value)} defaultValue={localStorage.getItem("p2d1")}></input>
              <input type="date" id="julkaisuaika2" name="to_julkaisuaika" onChange={() => localStorage.setItem("p2d2",document.getElementById("julkaisuaika2").value)} defaultValue={localStorage.getItem("p2d2")}></input>
            </div>

            <p className="question">Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            <textarea className="answer" rows="1" cols="70" id="answer8" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p2a8",document.getElementById("answer8").value)} defaultValue={localStorage.getItem("p2a8")}> </textarea>


            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
          
            <br></br>
            <div className="green-box" style={{"margin-top":"50px"}}>
              <div className="circle">
                <p className="circle-text">!</p>
              </div>
              <div className="circle">
                <p className="circle-text">?</p>
              </div>
              <p className="green-info">Vinkki- ja ojhenappaimen takaa löydät vinkkejä ja <br></br> neuvoja, joita voit lisätä tulostettavalle muistilistalle.</p>
            </div>

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