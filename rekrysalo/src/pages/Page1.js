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
          <div></div>

          <div className="mid">
            <p className="question">Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</p>

            <textarea className="answer" rows="10" cols="70" id="answer1" style={{"margin-bottom":"40px"}}></textarea>

            <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
            <textarea className="answer" rows="10" cols="70" id="answer2" ></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"radio"} id="r1" name="Valinta" value="A"></input>
              <label for="r1">Esimerkki A</label>
              <input type={"radio"} id="r2" name="Valinta" value="B"></input>
              <label for="r2">Esimerkki B</label>
              <input type={"radio"} id="r3" name="Valinta" value="C"></input>
              <label for="r3">Esimerkki C</label>
            </div>

            <p className="question">Aikatauluta rekrytointisi:</p>
            <textarea className="answer" rows="10" cols="70" id="answer3"></textarea>

            <div style={{"margin-bottom":"50px"}}>
              <input type={"checkbox"} id="cb1" name="Esimerkki" value="Esimerkki"></input>
              <label for="cb1" >Esimerkki</label>
            </div>


            <p className="question">Arvioi budjetti rekrytoinnille:</p>
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}}></textarea>

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

export default Page1;