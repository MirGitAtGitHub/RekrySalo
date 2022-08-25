//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const page1formitemsfetched = [JSON.parse(localStorage.getItem("page1formitems"))];
var page1formitemssend = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
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
            <textarea className="answer" rows="10" cols="70" id="answer1" defaultValue={page1formitemsfetched[0][0]} onChange={() => {page1formitemssend[0] = document.getElementById("answer1").value;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></textarea>

            <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
            <textarea className="answer" rows="10" cols="70" id="answer2" defaultValue={page1formitemsfetched[0][1]} onChange={() => {page1formitemssend[1] = document.getElementById("answer2").value;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></textarea>

            <div>
              <input type={"radio"} id="r1" name="Valinta" value="A" checked={page1formitemsfetched[0][2]} onChange={() => {page1formitemssend[2] = document.getElementById("r1").checked;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></input>
              <label for="r1">Esimerkki A</label>
              <input type={"radio"} id="r2" name="Valinta" value="B" checked={page1formitemsfetched[0][3]} onChange={() => {page1formitemssend[3] = document.getElementById("r2").checked;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></input>
              <label for="r2">Esimerkki B</label>
              <input type={"radio"} id="r3" name="Valinta" value="C" checked={page1formitemsfetched[0][4]} onChange={() => {page1formitemssend[4] = document.getElementById("r3").checked;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></input>
              <label for="r3">Esimerkki C</label>
            </div>

            <p className="question">Aikatauluta rekrytointisi:</p>
            <textarea className="answer" rows="10" cols="70" id="answer3" defaultValue={page1formitemsfetched[0][5]} onChange={() => {page1formitemssend[5] = document.getElementById("answer3").value;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></textarea>
            
            <div>
              <input type={"checkbox"} id="cb1" name="Esimerkki" value="Esimerkki" checked={page1formitemsfetched[0][6]} onChange={() => {page1formitemssend[6] = document.getElementById("cb1").checked;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}></input>
              <label for="cb1">Esimerkki</label>
            </div>

            <p className="question">Arvioi budjetti rekrytoinnille:</p>
            <textarea className="answer" rows="10" cols="70" id="answer4" defaultValue={page1formitemsfetched[0][7]} onChange={() => {page1formitemssend[7] = document.getElementById("answer4").value;localStorage.setItem("page1formitems",JSON.stringify(page1formitemssend))}}>

            </textarea>
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