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
  sessionStorage.setItem("sessionongoing",(sessionStorage.getItem("sessionongoing") === null) ? "false" : "true");
  if(localStorage.length > 1 && sessionStorage.getItem("sessionongoing") === "false") {
    if(window.confirm("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Ok. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Peru.")) {
      console.log("Palautetaan aiempi istunto...");
    } else {
      localStorage.clear();
      sessionStorage.clear();
    }
  }
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="HAASTATTELU" current="4" />
        </div>

        <div className="mid-grid">
          <div>
            <div className="info-boxH">
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla.</p>
            </div>
          </div>

          <div className="mid">
            <p className="question">Miten työhön haastattelu toteutetaan?</p>
            <select className="Dropdown" name="valinta" id="Työ1" style={{"margin-bottom":"40px"}} onChange={() => localStorage.setItem("p4s1",document.getElementById("Työ1").value)} defaultValue={localStorage.getItem("p4s1")}>
              <option className="boxed">Valitse...</option>
              <option className="boxed">Ryhmähaastattelu</option>
              <option className="boxed">Etähaastattelu</option>
            </select>

            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Suunnittele haastattelurunko:</p>
              <div className="circle" style={{"float":"right"}}>
                <p className="circle-text">?</p>
              </div>
            </div>
            
            <textarea className="answer" rows="10" cols="70" id="answer1" onChange={() => localStorage.setItem("p4a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p4a1")}></textarea>

            <div>
              <input type={"checkbox"} id="1" name="Esimerkki" value="Esimerkki" style={{"margin-bottom":"50px"}}></input>
              <label for="1">Esimerkkikysymyksiä:</label>
            </div>

            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
              
            <br></br>
            <div className="green-box" style={{"margin-top":"30px"}}>
              <div className="circle">
                <p className="circle-text">!</p>
              </div>
              <div className="circle">
                <p className="circle-text">?</p>
              </div>
              <p className="green-info">Vinkki- ja ohjenäppäimen takaa löydät vinkkejä ja <br></br> neuvoja, joita voit lisätä tulostettavalle muistilistalle.</p>
            </div>

          </div>
          <div>
            <div className="info-boxK">
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Kehitä kysymykset, jotka luovat keskustelua.(Vältä kyllä ja ei vastauksia)</p>
              <p className="info-p">Voit kopioida esimerkkivastauksen itsellesi</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Page4;