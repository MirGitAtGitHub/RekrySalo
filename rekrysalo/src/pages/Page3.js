//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page3 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","3");
  sessionStorage.setItem("sessionongoing",(sessionStorage.getItem("sessionongoing") === null) ? "false" : "true");
  if(localStorage.length > 1 && sessionStorage.getItem("sessionongoing") === "false") {
    if(window.confirm("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Kyllä. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Ei.")) {
      console.log("Palautetaan aiempi istunto...");
    } else {
      localStorage.clear();
    }
  }
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="HAKEMUSTEN KÄSITTELY" current="3" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question">Miten ja milloin olet tavoitettavissa hakemuksiin liittyen?</p>
            <textarea className="answer" rows="1" cols="70" id="answer1" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p3a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p3a1")}></textarea>

            <p className="question">Aseta vastausaika hakemuksiin liittyviin kysymyksiin:</p>
            <textarea className="answer" rows="1" cols="70" id="answer2" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p3a2")}></textarea>

            <p className="bluetext"><strong>Muista! </strong>Soittaminen on paras tapa kutsua henkilö haastatteluun!</p>

            <p className="question">Luonnostele kutsu haastatteluun:</p>
            <textarea className="answer" rows="10" cols="70" id="answer3" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p3a3")}></textarea>

            <p className="question">Miten hylättyihin hakemuksiin vastataan? Luo vastauspohja.</p>
            <textarea className="answer" rows="10" cols="70" id="answer4" onChange={() => localStorage.setItem("p3a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p3a4")}></textarea>

            <div>
              <input type={"radio"} id="1" name="Valinta" value="A"></input>
              <label for="1">Esimerkki A</label>
              <input type={"radio"} id="2" name="Valinta" value="B" style={{"margin-bottom":"50px"}}></input>
              <label for="2" >Esimerkki B</label>
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
          <div></div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Page3;