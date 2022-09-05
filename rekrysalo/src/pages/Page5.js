//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page5 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","5");
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="SOPIMUS" current="5" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid">
            <p className="question" style={{"margin-bottom":"30px"}}>Työsopimus voi olla kirjallinen, suullinen tai sähköinen.<strong>Työsopimuksen laatiminen kirjallisesti on suositeltavaa, </strong>jotta sovitut asiat voidaan tarvittaessa tarkistaa.</p>
            <p className="question" style={{"margin-bottom":"30px"}}>Ota työsopimusta täytettäessä huomioon <strong>työsopimuslain, työaikalain ja vuosilomalain säännökset, sekä työehtosopimuksen määräykset.</strong></p>
            <p className="question" style={{"margin-bottom":"30px"}}>Mikäli allekirjoitetussa sopimuksessa on sovittu edellämainittujen vastaisia asioita, ne <strong> eivät </strong>ole päteviä.</p>
            <p className="question" style={{"margin-bottom":"30px"}}><strong>Työsopimuksen kesto on sovittava.</strong> Työsopimus voidaan laatia toistaiseksi voimassa olevaksi tai määräaikaiseksi.</p>
            <p className="question-subtext" style={{"margin-bottom":"30px"}}><strong>Palkattavan henkilön ollessa 14-vuotias, sopimuksen<br></br> laatii huoltaja. Jos palkattavan henkilön ikä ei täytä tätä vaatimusta, henkilö saa työskennellä vain<br></br> työsuojeluviranomaisen poikkeusluvalla.</strong></p>
            
            

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

export default Page5;