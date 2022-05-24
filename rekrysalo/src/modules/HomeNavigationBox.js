import {CircleButton} from "./CircleButton";
import {SquareButton} from "./SquareButton";
export const HomeNavigationBox = () => {
  return (
      <div className="home-navigation-box">
          <h2 className="home-navigation-box-header">Pienyrittäjän rekryopas</h2>
          <h3 className="home-navigation-box-subheader">Tämä opas on suunnattu ensimmäistä työntekijäänsä rekrytoivalle pien- tai mikroyrittäjälle.</h3>
          <p className="home-navigation-box-text">Täytä kohdat, jotka koet itsellesi hyödylliseksi.<br></br><br></br>1. Millaisesta osaamisesta yrityksesi hyötyy?<br></br>2. Miten laadit kiinnostavan työpaikkailmoituksen?<br></br>3. Miten valitset sopivat ehdokkaat haastatteluun?<br></br>4. Kuinka valmistaudun työhaastattelun tekemiseen?<br></br>5. Mitä sisältyy työsopimukseen?<br></br>6. Mitä kuuluu onnistuneeseen perehdytykseen?</p>

          <div className="home-navigation-box-navigation">
              <SquareButton number="1" address="" />
              <SquareButton number="2" address="" />
              <SquareButton number="3" address="" />
              <SquareButton number="4" address="" />
              <SquareButton number="5" address="" />
              <SquareButton number="6" address="" />
          </div>
          <div className="home-navigation-box-tipbar">
              <CircleButton text="!" pointerevents="none" />
              <CircleButton text="?" pointerevents="none" />
          </div>
      </div>
  );
}
