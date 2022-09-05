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
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="PEREHDYTYS" current="6" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question" style={{"margin-bottom":"60px"}}><strong>Perehdytys kannattaa aina.
                <br></br> Selkeä perehdytys varmistaa sujuvan työnaloituksen, säästäen aikaasi ja rahaasi.</strong></p>
            <p className="question" style={{"margin-bottom":"50px"}}>Perehdytykseen tulee kuulua ainakin seuraavat kohdat:
                <br></br>-Työvälineisiin, työympäristöön ja <br></br>sen toimintatapoihin perehtyminen,
                <br></br>-Pelastusopastuksen järjestäminen,
                <br></br>-Työterveyshuollon kartoitus ja
                <br></br>-Työturvallisuuden menetelmien läpikäynti.</p>
            <p className="question" style={{"margin-bottom":"50px"}}><strong>Säästät vaivaa tulevaisuudessa laatimalla perehdytyskansion sisällön jo ensimmäisen rekrytoinnin aikana.</strong></p>
            
            

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