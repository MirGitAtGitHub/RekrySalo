//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page3 = () => {
  function showInfo(element){
    var info = document.getElementById(element)
    var visibility = info.style.visibility;
    info.style.visibility = (visibility === "hidden") ? "" : "hidden";
  }
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","3");
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
    <div className="html" style={{paddingTop: "1%"}}>
      <body className="Body">
        <div className="Header">
          <TopFooter text="HAKEMUSTEN KÄSITTELY" current="3" />
        </div>

        <div className="mid-grid">
          <div className="empty-div">
            <div className="info-boxH" id="p3infobox1" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Yrityskuvan kannalta on hyvä vastata kaikille hakijoille.</p>
            </div>

            <div className="info-boxH" id="p3infobox2" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus:</p>
              <p className="info-p">- Ole täsmällinen.<br></br>
                                    - Arvosta hakemuskia.<br></br>
                                    - Ole kohtelias.</p>
            </div>
            
            
          </div>

          <div className="mid">
            
            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}} onClick={() => showInfo("p3infobox1")}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Miten ja milloin olet tavoitettavissa<br></br> hakemuksiin liittyen?</p>
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p3infobox3")}>
                  <p className="circle-text">?</p>
              </div>
            </div>
            <textarea className="answer" rows="1" cols="70" id="answer1" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p3a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p3a1")}></textarea>

            <p className="question" >Aseta vastausaika hakemuksiin liittyviin kysymyksiin:</p>
            <textarea className="answer" rows="1" cols="70" id="answer2" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p3a2")}></textarea>

            <p className="bluetext"><strong>Muista! </strong>Soittaminen on paras tapa kutsua henkilö haastatteluun!</p>

            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}} onClick={() => showInfo("p3infobox2")}>
                <p className="circle-text">!</p>
              </div>
              
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Luonnostele kutsu haastatteluun:</p>
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p3infobox4")}>
                <p className="circle-text">?</p>
              </div>
            </div>
            
            <textarea className="answer" rows="10" cols="70" id="answer3" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p3a3")}></textarea>
            
            <div className="circle-parent">
              <p className="question" style={{"display":"inline-block"}}>Miten hylättyihin hakemuksiin vastataan? Luo vastauspohja.</p>
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p3infobox5")}>
                <p className="circle-text">?</p>
              </div>
            </div>
            <textarea className="answer" rows="10" cols="70" id="answer4" onChange={() => localStorage.setItem("p3a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p3a4")}></textarea>

            <div onClick={() => (document.getElementById("1").checked === true) ? localStorage.setItem("p3rg1","r1checked") : (document.getElementById("2").checked === true) ? localStorage.setItem("p3rg1","r2checked") : ""}>
              <input type={"radio"} id="1" name="Valinta" value="A" defaultChecked={(localStorage.getItem("p3rg1") === "r1checked") ? true : false}></input>
              <label for="1">Esimerkki A</label>
              <input type={"radio"} id="2" name="Valinta" value="B" defaultChecked={(localStorage.getItem("p3rg1") === "r2checked") ? true : false} style={{"margin-bottom":"50px"}}></input>
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
          <div className="empty-div">
            <div className="info-boxK" id="p3infobox3" style={{visibility: "hidden"}}>
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Varmista, että sinulla on aikaa hakijoiden yhteydenotoille.</p>
              <p className="info-p">Anna mahdollisimman joustava aikahaarukka koska olet tavoitettavissa ja huolehdi, että pidät siitä kiinni.</p>
            </div>

            <div className="info-boxK" id="p3infobox4" style={{visibility: "hidden"}}>
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Kerro haastattelevalle kenet hän tapaa, missä ja milloin.</p>
              <p className="info-p">Kerro myös mitä hänen tulee ottaa mukaan haastatteluun.(esim. todistukset)</p>
              <p className="info-p">Voit kopioida esimerkkivastauksen itsellesi.</p>
            </div>

            <div className="info-boxK" id="p3infobox5" style={{visibility: "hidden"}}>
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Voit kopioida esimerkkivastauksen itsellesi.</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </div>
  )
}

export default Page3;