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
  if(localStorage.getItem("pagenumber") != null){
    console.log("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Kyllä. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Ei.");
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

          <div>
            <div className="circle" style={{"margin-left":"-11%"}}>
              <p className="circle-text">!</p>
            </div>
            <p className="question" style={{"display": "inline-block", "margin-left":"3%"}}>Aikatauluta rekrytointisi:</p>
          </div>

          <textarea className="answer" rows="10" cols="70" id="answer3" onChange={() => localStorage.setItem("p1a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p1a3")}></textarea>

          <div style={{"margin-bottom":"40px"}}>
            <input type={"checkbox"} id="cb1" name="Esimerkki" value="Esimerkki"></input>
            <label for="cb1" >Esimerkki</label>
          </div>

          <div>
            <div className="circle" style={{"margin-left":"-11%"}}>
              <p className="circle-text">!</p>
            </div>
            <p className="question" style={{"display": "inline-block", "margin-left":"3%"}}>Arvioi budjetti rekrytoinnille:</p>
          </div>
          
          <textarea className="answer" rows="10" cols="70" id="answer4" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p1a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p1a4")}></textarea>
          

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