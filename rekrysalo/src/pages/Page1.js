//import {HomeBackImage} from "../modules/HomeBackImage";

import {Footer} from "../modules/Footer";

import{TopFooter} from "../modules/TopFooter";

import{Link} from "react-router-dom";

import {useEffect} from 'react';

const Page1 = () => {
  function showInfo(element){
    var info = document.getElementById(element)
    var visibility = info.style.visibility;
    info.style.visibility = (visibility === "hidden") ? "" : "hidden";
  }
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","1");
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
            <TopFooter text="OSAAMISEN TARVE" current="1" />
          </div>
          <div className="mid-grid">

          <div className="empty-div">
            <div className="info-boxH" id="p1infobox1" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Tekijän löytäminen on helpompaa kun tiedät, mitä tarvitset.</p>
              <p className="info-p">Virherekrytointi on suurin vältettävissä oleva menoerä.</p>
            </div>

            <div className="info-boxH" id="p1infobox2" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Vastavalmistunut tai vastaava on aluksi halvempi palkattava, toisin perehdytys vie alkuun siivun tuottavuudesta.</p>
              <p className="info-p">Kokenut osaaja taas voi tuoda yritykselle suurempia tuloja nopeammin, mutta on kalliimpi palkattava.</p>
            </div>
          </div>

          <div className="mid">
            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}} onClick={() => showInfo("p1infobox1")}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display": "inline-block", "margin-left":"2%"}}>Mieti, millaista osaamista yrityksesi tarvitsee nyt ja<br></br> tulevaisuudessa:</p>
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p1infobox3")}>
                <p className="circle-text">?</p>
              </div>
            </div>
              
            <textarea className="answer" rows="10" cols="70" id="answer1" style={{"margin-bottom":"40px"}} onChange={() => localStorage.setItem("p1a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p1a1")}></textarea>
    
            <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
    
            <textarea className="answer" rows="10" cols="70" id="answer2" onChange={() => localStorage.setItem("p1a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p1a2")}></textarea>
    
            <div id="p1rg1" style={{"margin-bottom":"40px", "display": "inline-block"}} onClick={() => (document.getElementById("r1").checked === true) ? localStorage.setItem("p1rg1","r1checked") : (document.getElementById("r2").checked === true) ? localStorage.setItem("p1rg1","r2checked") : (document.getElementById("r3").checked === true) ? localStorage.setItem("p1rg1","r3checked") : ""}>
              <input type={"radio"} id="r1" name="Valinta" value="A" defaultChecked={(localStorage.getItem("p1rg1") === "r1checked") ? true : false}></input>
              <label for="r1">Esimerkki A</label>
              <input type={"radio"} id="r2" name="Valinta" value="B" defaultChecked={(localStorage.getItem("p1rg1") === "r2checked") ? true : false}></input>
              <label for="r2">Esimerkki B</label>
              <input type={"radio"} id="r3" name="Valinta" value="C" defaultChecked={(localStorage.getItem("p1rg1") === "r3checked") ? true : false}></input>
              <label for="r3">Esimerkki C</label>
            </div>
              
            <p className="question">Aseta rekrytoinnin ajankohta:</p>
            
            <input type="datetime-local" id="rekryaika1" name="rekryaika" style={{"margin-right":"20px"}} onChange={() => localStorage.setItem("p1d1",document.getElementById("rekryaika1").value)} defaultValue={localStorage.getItem("p1d1")}></input>
            
            <input type="datetime-local" id="rekryaika2" name="to_rekryaika" onChange={() => localStorage.setItem("p1d2",document.getElementById("rekryaika2").value)} defaultValue={localStorage.getItem("p1d2")}></input>
  
            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}} onClick={() => showInfo("p1infobox2")}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display": "inline-block", "margin-left":"2%"}}>Arvioi budjetti rekrytoinnille:</p>
              <div className="circle" style={{"float":"right"}}  onClick={() => showInfo("p1infobox4")}>
                <p className="circle-text">?</p>
              </div>
            </div>
              
            <input className="number-input" type="text" id="budjetti" name="budjetti" defaultValue={localStorage.getItem("p1n1")} onBlur={(e) => {var a = [];
            var k = e.which;
        
            for (var i = 48; i < 58; i++)
                a.push(i);
        
            if (!(a.indexOf(k)>=0))
                e.preventDefault();if (parseInt(document.getElementById("budjetti").value) > 20000) {document.getElementById("budjetti").value = 20000;alert("Maksimibudjetti on 20 000 euroa.");localStorage.setItem("p1n1",document.getElementById("budjetti").value);} if (parseInt(document.getElementById("budjetti").value) < 2000) {document.getElementById("budjetti").value = 2000;alert("Minimibudjetti on 2000 euroa.");localStorage.setItem("p1n1",document.getElementById("budjetti").value)};if (parseInt(document.getElementById("budjetti").value) >= 2000 && parseInt(document.getElementById("budjetti").value) <= 20000) {document.getElementById("budjetti").value = document.getElementById("budjetti").value;localStorage.setItem("p1n1",document.getElementById("budjetti").value)}}} onKeyPress={(e) => {var a = [];
                var k = e.which;
              
            for (var i = 48; i < 58; i++)
                a.push(i);
              
            if (!(a.indexOf(k)>=0))
                e.preventDefault();}}></input>
            <p className="question" style={{"display": "inline-block"}}>€</p>
            <div></div>
              
            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
  
            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
          
            <br></br>
  
            <div className="green-box" style={{"margin-top":"50px"}}>
  
              <div className="circle" onClick={() => showInfo("infobox")}>
                <p className="circle-text">!</p>
              </div>
  
              
                <div className="circle" onClick={() => showInfo("infobox")}>
                  <p className="circle-text">?</p>
                </div>
              
              <p className="green-info">Vinkki- ja ohjenäppäimen takaa löydät vinkkejä ja <br></br> neuvoja, joita voit lisätä tulostettavalle muistilistalle.</p>
              
            </div>
    
          </div>
    
            <div className="empty-div">
              <div className="info-boxK" id="p1infobox3" style={{visibility: "hidden"}}>
                <h2 className="info-header">Ohje:</h2>
                <p className="info-p">Onko täytettävä tehtävä kokonaan uusi tai jo olemassa oleva?</p>
              </div>

              <div className="info-boxK" id="p1infobox4" style={{visibility: "hidden"}}>
                <h2 className="info-header">Ohje:</h2>
                <p className="info-p">Linkin takaa löydät palkkalaskurin, jolla pystyt arvioimaan palkkakuluja.</p>
                <a href="https://www.palkka.fi/palkkalaskuri/index.htm" className="info-p"><strong>Palkkalaskuri</strong></a>
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

export default Page1;