//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page6 = () => {
  function showInfo(element){
    var info = document.getElementById(element)
    var visibility = info.style.visibility;
    info.style.visibility = (visibility === "hidden") ? "" : "hidden";
  }
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","6");
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="PEREHDYTYS" current="6" />
        </div>

        <div className="mid-grid">
          <div>
            <div className="info-boxH" id="p6infobox1" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Lisää tietoa työturvallisuuslaista:</p>
              <a href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className="info-p"><strong>Työturvallisuus</strong></a>
            </div>

            <div className="info-boxH" id="p6infobox2" style={{visibility: "hidden"}}>
              <h2 className="info-header">Vinkki:</h2><br></br>
              <p className="info-p">Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle.</p>
              <p className="info-p">Perehdytyskansion löydät täältä:</p>
              <a href="https://www.perehdytysopas.fi" className="info-p"><strong>Perehdytyspohja</strong></a>
            </div>
          </div>

          <div className="mid">
            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}} onClick={() => showInfo("p6infobox1")}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}><strong>Perehdytys kannattaa aina.
                <br></br> Selkeä perehdytys varmistaa sujuvan työnaloituksen,</strong></p>
              
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p6infobox3")}>
                <p className="circle-text">?</p>
              </div>
            </div>
            <p className="question" style={{"margin-bottom":"60px", "margin-left":"1%"}}><strong>säästäen aikaasi ja rahaasi.</strong></p>
            <div className="circle-parent">
              <div className="circle" style={{"float":"right"}} onClick={() => showInfo("p6infobox4")}>
                <p className="circle-text">?</p>
              </div>
            </div>
            <p className="question" style={{"margin-bottom":"50px"}}>Perehdytykseen tulee kuulua ainakin seuraavat kohdat:
                <br></br>-Työvälineisiin, työympäristöön ja <br></br>sen toimintatapoihin perehtyminen,
                <br></br>-Pelastusopastuksen järjestäminen,
                <br></br>-Työterveyshuollon kartoitus ja
                <br></br>-Työturvallisuuden menetelmien läpikäynti.</p>
                
            <div>
              <div className="circle" style={{"margin-left":"-11%"}} onClick={() => showInfo("p6infobox2")}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"margin-bottom":"50px", "display":"inline-block", "margin-left":"2%"}}><strong>Säästät vaivaa tulevaisuudessa laatimalla perehdytyskansion sisällön jo ensimmäisen rekrytoinnin aikana.</strong></p>
            </div>
            
            
            

            <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
            <Link to="/Check"><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">VALMIS</h2></div></Link>
            
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
            <div className="info-boxK" id="p6infobox3" style={{visibility: "hidden"}}>
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Mieti kuka vastaa perehdytyksestä.</p>
            </div>

            <div className="info-boxK" id="p6infobox4" style={{visibility: "hidden"}}>
              <h2 className="info-header">Ohje:</h2><br></br>
              <p className="info-p">Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.</p>
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

export default Page6;