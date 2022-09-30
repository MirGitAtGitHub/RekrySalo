//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import {useEffect} from 'react';
const Check = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","7");
  return (
  <div className="html" style={{paddingTop: "1%"}}>
    <body className="Body">
      <div className="Header">
        <TopFooter text="LOPPUTULOSTE" current="7" />
      </div>
      
      <div className="mid-grid">
        <div className="empty-div"></div>
        <div className="mid">
          
           {/*Page 1*/}

          <p className="question">Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</p>
          
          <textarea readOnly className="answer" rows="10" cols="70" id="p1a1" style={{"margin-bottom":"40px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1a1")}></textarea>

          <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
          <textarea readOnly className="answer" rows="10" cols="70" id="p1a2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1a2")}></textarea>
            
          <p className="question">Aseta rekrytoinnin ajankohta:</p>
          
          <input readOnly type="datetime-local" id="rekryaika1" name="rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1d1")}></input>
          <input readOnly type="datetime-local" id="rekryaika2" name="to_rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1d2")}></input>

          
          <p className="question" style={{"margin-top":"40px"}}>Arvioi budjetti rekrytoinnille:</p>
          
          
          <input readOnly className="number-input" type="text" id="budjetti" name="budjetti" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1n1")}></input>
          <p className="question" style={{"display": "inline-block"}}>€</p>
          <div></div>



          {/*Page2*/}

          <p className="question" style={{"margin-top":"60px"}}>Yrityksen sijainti:</p>
            <textarea readOnly className="answer" rows="1" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} id="p2a1" defaultValue={localStorage.getItem("p2a1")}></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"checkbox"} id="1" name="Valinta" value="1" defaultChecked={(localStorage.getItem("p2cb1") === "true") ? true : false} disabled></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"checkbox"} id="2" name="Valinta" value="2" defaultChecked={(localStorage.getItem("p2cb2") === "true") ? true : false} disabled></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>

            <div id="etatiedottaisijainnit" style={{display:(localStorage.getItem("p2cb1") === "true") ? "" : "none"}}>
              <p className="question" id="tpsijaintip">Etätyön tiedot tai työpaikan sijainnit:</p>
              <textarea readOnly className="answer" rows="1" cols="70" id="optionalanswer1" defaultValue={localStorage.getItem("p2oa1")}></textarea>
            </div>

            <div id="tyopaikansijainti" style={{display:(localStorage.getItem("p2cb2") === "true") ? "" : "none"}}>
              <p className="question" id="tpsijaintip">Työpaikan sijainti:</p>
              <textarea readOnly className="answer" rows="1" cols="70" id="optionalanswer2" defaultValue={localStorage.getItem("p2oa2")}></textarea>
            </div>



            <p className="question">Miten kuvailisit yrityksen toimintaa?</p>

            <textarea readOnly className="answer" rows="10" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} id="p2a2" defaultValue={localStorage.getItem("p2a2")}></textarea>

            <p className="question">Työsopimuksen tyyppi:</p>
            <select className="Dropdown" name="valinta" id="P2Työ1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} defaultValue={localStorage.getItem("p2s1")}>
              <option disabled className="boxed">Määräaikainen</option>
              <option disabled className="boxed">Toistaiseksi voimassa oleva</option>
              <option disabled className="boxed">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="P2Työ2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} defaultValue={localStorage.getItem("p2s2")}>
              <option disabled className="boxed">Kokoaikainen</option>
              <option disabled className="boxed">Osa-aikainen</option>
            </select>
            
            <p className="question">Tehtävänimike:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p2a3" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} defaultValue={localStorage.getItem("p2a3")}></textarea>

            
            <p className="question">Työn kuvaus:</p>
            <textarea readOnly className="answer" rows="10" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} id="p2a4" defaultValue={localStorage.getItem("p2a4")}></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p2a5" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p2a5")}></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p2a6" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p2a6")}></textarea>

            <p className="question">Ilmoita sähköpostiosoite johon hakemukset vastaanotetaan:</p>

            <textarea readOnly className="answer" rows="1" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"20px"}} id="p2a7" defaultValue={localStorage.getItem("p2a7")}></textarea>


            <div style={{"margin-bottom":"40px"}}>
              <label className="question">Ilmoituksen julkaisuaika:</label><br></br>

              <input readOnly type="datetime-local" id="julkaisuaika1" name="julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-right":"20px"}} defaultValue={localStorage.getItem("p2d1")}></input>
              <input readOnly type="datetime-local" id="julkaisuaika2" name="to_julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p2d2")}></input>
            </div>

            <p className="question">Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p2a8" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}}>{localStorage.getItem("p2a8")}</textarea>
          
          

            {/*Page 3*/}

            <p className="question" style={{"margin-top": "60px"}}>Miten ja milloin olet tavoitettavissa hakemuksiin liittyen?</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p3a1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} defaultValue={localStorage.getItem("p3a1")}></textarea>

            <p className="question">Aseta vastausaika hakemuksiin liittyviin kysymyksiin:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="p3a2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} defaultValue={localStorage.getItem("p3a2")}></textarea>

            <p className="question">Luonnostele kutsu haastatteluun:</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="p3a3" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} defaultValue={localStorage.getItem("p3a3")}></textarea>

            <p className="question">Miten hylättyihin hakemuksiin vastataan? Luo vastauspohja.</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="p3a4" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p3a4")}></textarea>

            {/*Page 4*/}

            <p className="question" style={{"margin-top": "60px"}}>Miten työhön haastattelu toteutetaan?</p>
            <select className="Dropdown" name="valinta" id="P4Työ1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} defaultValue={localStorage.getItem("p4s1")}>
              <option disabled className="boxed">Ryhmähaastattelu</option>
              <option disabled className="boxed">Etähaastattelu</option>
            </select>

            <p className="question">Suunnittele haastattelurunko:</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="p4a1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p4a1")}></textarea>

            <div className="savebtn">
              <h3 className="saveheader">Tallenna PDF-tiedostona</h3>
            </div>
        </div>
        <div className="empty-div"></div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </body>
  </div>
  )
}

export default Check;