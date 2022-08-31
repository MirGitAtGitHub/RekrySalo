//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{Link} from "react-router-dom";
import {useEffect} from 'react';
const Home = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","0");
  return (
    <html>
      <body className="Body">
        <div className="home-grid">
          <div></div>

          <div className="home-mid">
            <p className="home-otsikko">Pienyrittäjän rekryopas</p>
            <p className="home-info">Tämä opas on suunnattu ensimmäistä työntekijäänsä rekrytoiville pien- ja mikroyrittäjille.</p>

            <p className="home-text">Täytä kohdat, jotka koet itsellesi hyödylliseksi.</p>
            <br></br>
            <p className="home-text">1. Millaisesta osaamisesta yrityksesi hyötyy?</p>
            <p className="home-text">2. Miten laadit kiinnostavan työpaikkailmoituksen?</p>
            <p className="home-text">3. Miten valitset sopivat ehdokkaat haastatteluun?</p>
            <p className="home-text">4. Kuinka valmistaudut työhaastattelun tekemiseen?</p>
            <p className="home-text">5. Mitä sisältyy työsopimukseen?</p>
            <p className="home-text">6. Mitä kuuluu onnistuneeseen perehdytykseen?</p>

            <div className="home-mid-grid">

              <Link to="/Page1">
                <div className="home-box">
                  <h1 className="home-hed">1</h1>
                </div>
                </Link>

                <Link to="/Page2">
                  <div className="home-box">
                    <h1 className="home-hed">2</h1>
                  </div>
                </Link>

                <Link to="/Page3">
                  <div className="home-box">
                    <h1 className="home-hed">3</h1>
                  </div>
                </Link>

                <Link to="/Page4">
                  <div className="home-box">
                    <h1 className="home-hed">4</h1>
                  </div>
                </Link>

                <Link to="/Page5">
                  <div className="home-box">
                    <h1 className="home-hed">5</h1>
                  </div>
                </Link>

                <Link to="/Page6">
                  <div className="home-box">
                    <h1 className="home-hed">6</h1>
                  </div>
                </Link>
            </div>

            <div className="green-box">
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

        <div className="home-footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Home;