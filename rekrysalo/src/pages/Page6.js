//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page6 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","6");
  if(localStorage.getItem("pagenumber") != null){
    console.log("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Kyllä. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Ei.");
  }
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="PEREHDYTYS" current="6" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question" style={{"margin-bottom":"60px"}}><strong>Perehdytys on sinulle erittäin hyödyllinen.
                <br></br> Hyvä perehdytys varmistaa sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.</strong></p>
            <p className="question" style={{"margin-bottom":"50px"}}>perehdytykseen tulee kuulua ainakin:
                <br></br>-Työvälineisiin, työympäristöön ja <br></br>sen toimintatapoihin tutustuminen.
                <br></br>-Pelastusopastus
                <br></br>-Työterveyshuolto
                <br></br>-Työturvallisuus</p>
            <p className="question" style={{"margin-bottom":"50px"}}><strong>Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo ensimmäisen rekrytoinnin kohdalla.</strong></p>
            
            

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

export default Page6;