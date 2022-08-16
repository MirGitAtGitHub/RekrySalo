import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Page3 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","3");
  return (
    <html>
      <body className="Body">
        <div className="Content">
            <HomeBackImage />

            <div className="mid">
                <p className="question">Mieti milloin olet tavoitettavissa:</p>
                <textarea className="answer" rows="1" cols="70">
                </textarea>

                <p className="question">Milloin vastaat hakijoille:</p>
                <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"50px"}}>
                </textarea>

                <p className="bluetext">Soittaminen on paras tapa kutsua henkilö haastatteluun!</p>


                <p className="question">Luonnostele kutsu haastatteluun:</p>
                <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}}>
                </textarea>

                <p className="question">Luonnostele vastaus hylätyille hakemuksille:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <div>
                    <input type={"radio"} id="1" name="Valinta" value="A"></input>
                    <label for="1">Esimerkki A</label>
                    <input type={"radio"} id="2" name="Valinta" value="B" style={{"margin-bottom":"50px"}}></input>
                    <label for="2" >Esimerkki B</label>
                </div>

                <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))-1)}><div class="navigation-button-arrow-left"><h2 class="navigation-button-arrow-text">EDELLINEN</h2></div></Link>
                <Link to={"/Page" + (parseInt(localStorage.getItem("pagenumber"))+1)}><div class="navigation-button-arrow-right"><h2 class="navigation-button-arrow-text">SEURAAVA</h2></div></Link>
                
            </div>
        </div>

        <div className="Header">
          <TopFooter text="HAKEMUSTEN KÄSITTELY" current="3" />
        </div>
        
        <div>
          {Array(36)
          .fill()
          .map((_, i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
        
        <div>
          <Footer />
        </div>
      </body>

    </html>
  )
}

export default Page3;