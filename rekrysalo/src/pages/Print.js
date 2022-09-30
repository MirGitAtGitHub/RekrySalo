
import {useEffect} from 'react';
const Print = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  localStorage.setItem("pagenumber","8");
  return (
  <html style={{"background-image": "none"}}>
    <div>
      <div >
        <div >
          
           {/*Page 1*/}
          <h1>Sivu 1</h1>
          <h3 >Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</h3>
          
          <p  id="answer1" style={{color: "black"}}>{localStorage.getItem("p1a1")}</p>

          <h3>Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</h3>
          <p id="answer2" style={{color: "black"}}>{localStorage.getItem("p1a2")}</p>

          
            
          <h3>Aseta rekrytoinnin ajankohta:</h3>
          
          <input readOnly type="datetime-local" id="rekryaika1" name="rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1d1",document.getElementById("rekryaika1").value)} defaultValue={localStorage.getItem("p1d1")}></input>
          <input readOnly type="datetime-local" id="rekryaika2" name="to_rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1d2",document.getElementById("rekryaika2").value)} defaultValue={localStorage.getItem("p1d2")}></input>

          
          <h3>Arvioi budjetti rekrytoinnille:</h3>
          
          
          <p id="budjetti" style={{color: "black"}}>{localStorage.getItem("p1n1")}€</p>
          <div></div>



          {/*Page2*/}
          <h1>Sivu 2</h1>
          <p className="question" style={{"margin-top":"60px"}}>Yrityksen sijainti:</p>
            <textarea readOnly className="answer" rows="1" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} id="answer1" onChange={() => localStorage.setItem("p2a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p2a1")}></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"radio"} id="1" name="Valinta" value="E"></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"radio"} id="2" name="Valinta" value="F"></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>


            <h3>Miten kuvailisit yrityksen toimintaa?</h3>

            <p style={{color: "black"}} id="answer2">{localStorage.getItem("p2a2")}</p>

            <h3>Työsopimuksen tyyppi:</h3>
            <p id="Työ1" style={{color: "black"}}>{localStorage.getItem("p2s1")}</p>

            <h3>Työaika:</h3>
            <p id="Työ2" style={{color: "black"}}>{localStorage.getItem("p2s2")}</p>
            
            <h3>Tehtävänimike:</h3>
            <p id="answer3" style={{color: "black"}}>{localStorage.getItem("p2a3")}</p>

            
            <h3>Työn kuvaus:</h3>
            <p style={{color: "black"}} id="answer4">{localStorage.getItem("p2a4")}</p>

            <h3>Ilmoittajan nimi:</h3>
            <p id="answer5" style={{color: "black"}}>{localStorage.getItem("p2a5")}</p>

            <h3>Ilmoittajan puhelin:</h3>
            <p id="answer6" style={{color: "black"}}>{localStorage.getItem("p2a6")}</p>

            <h3>Ilmoita sähköpostiosoite johon hakemukset vastaanotetaan:</h3>

            <p style={{color: "black"}} id="answer7">{localStorage.getItem("p2a7")}</p>



              <h3>Ilmoituksen julkaisuaika:</h3>

              <input readOnly type="datetime-local" id="julkaisuaika1" name="julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-right":"20px"}} onChange={() => localStorage.setItem("p2d1",document.getElementById("julkaisuaika1").value)} defaultValue={localStorage.getItem("p2d1")}></input>
              <input readOnly type="datetime-local" id="julkaisuaika2" name="to_julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}}onChange={() => localStorage.setItem("p2d2",document.getElementById("julkaisuaika2").value)} defaultValue={localStorage.getItem("p2d2")}></input>

            <h3>Yhteyshenkilöt ja heidän yhteystietonsa:</h3>
            <p id="answer8" style={{color: "black"}}>{localStorage.getItem("p2a8")}</p>
          
          

            {/*Page 3*/}
            <h1>Sivu 3</h1>
            <h3>Miten ja milloin olet tavoitettavissa hakemuksiin liittyen?</h3>
            <p id="answer1" style={{color: "black"}}>{localStorage.getItem("p3a1")}</p>

            <h3>Aseta vastausaika hakemuksiin liittyviin kysymyksiin:</h3>
            <p id="answer2" style={{color: "black"}}>{localStorage.getItem("p3a2")}</p>

            <h3>Luonnostele kutsu haastatteluun:</h3>
            <p id="answer3" style={{color: "black"}}>{localStorage.getItem("p3a3")}</p>

            <h3>Miten hylättyihin hakemuksiin vastataan? Luo vastauspohja.</h3>
            <p id="answer4" style={{color: "black"}}>{localStorage.getItem("p3a4")}</p>



            {/*Page 4*/}
            
            <h1>Sivu 4</h1>

            <h3>Miten työhön haastattelu toteutetaan?</h3>
            <p style={{color: "black"}} id="Työ1">{localStorage.getItem("p4s1")}</p>

            <h3>Suunnittele haastattelurunko:</h3>
            <p id="answer1" style={{color: "black"}}>{localStorage.getItem("p4a1")}</p>

            <div>
              <input disabled type={"checkbox"} id="1" name="Esimerkki" value="Esimerkki" style={{"margin-bottom":"50px"}}></input>
              <label for="1">Esimerkkikysymyksiä:</label>
            </div>

        </div>
      </div>

    </div>
  </html>
  )
}

export default Print;