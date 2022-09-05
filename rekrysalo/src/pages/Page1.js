//import {HomeBackImage} from "../modules/HomeBackImage";

import {Footer} from "../modules/Footer";

import{TopFooter} from "../modules/TopFooter";

import{Link} from "react-router-dom";

import {useEffect} from 'react';

const Page1 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","1");
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
            <TopFooter text="OSAAMISEN TARVE" current="1" />
          </div>
          
          <div className="mid-grid">
    
            <div className="empty-div"></div>
    
            <div className="mid">
    
              <div>
    
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
    
                <p className="question" style={{"display": "inline-block", "margin-left":"3%"}}>Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</p>
    
              </div>
    
              <textarea className="answer" rows="10" cols="70" id="answer1" style={{"margin-bottom":"40px"}} onChange={() => localStorage.setItem("p1a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p1a1")}></textarea>
    
              <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
    
              <textarea className="answer" rows="10" cols="70" id="answer2" onChange={() => localStorage.setItem("p1a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p1a2")}></textarea>
    
              <div style={{"margin-bottom":"40px", "display": "inline-block"}}>
                <input type={"radio"} id="r1" name="Valinta" value="A"></input>
                <label for="r1">Esimerkki A</label>
                <input type={"radio"} id="r2" name="Valinta" value="B"></input>
                <label for="r2">Esimerkki B</label>
                <input type={"radio"} id="r3" name="Valinta" value="C"></input>
                <label for="r3">Esimerkki C</label>
              </div>
              
              <p className="question">Aseta rekrytoinnin ajankohta:</p>
              
              <input type="datetime-local" id="rekryaika1" name="rekryaika" style={{"margin-right":"20px"}} onChange={() => localStorage.setItem("p1d1",document.getElementById("rekryaika1").value)} defaultValue={localStorage.getItem("p1d1")}></input>
              
              <input type="datetime-local" id="rekryaika2" name="to_rekryaika" onChange={() => localStorage.setItem("p1d2",document.getElementById("rekryaika2").value)} defaultValue={localStorage.getItem("p1d2")}></input>
    
              <div>
    
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
    
                <p className="question" style={{"display": "inline-block", "margin-left":"3%"}}>Arvioi budjetti rekrytoinnille:</p>
    
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
    
                <div className="circle">
                  <p className="circle-text">!</p>
                </div>
    
                <div className="circle">
                  <p className="circle-text">?</p>
                </div>
    
                <p className="green-info">Vinkki- ja ohjenäppäimen takaa löydät vinkkejä ja <br></br> neuvoja, joita voit lisätä tulostettavalle muistilistalle.</p>
    
              </div>
    
            </div>
    
            <div className="empty-div"></div>
    
          </div>
    
          <div className="footer">
            <Footer />
          </div>
    
        </body>
    
      </html>
      
      )
  }

export default Page1;