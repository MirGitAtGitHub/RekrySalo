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
          
          <textarea readOnly className="answer" rows="10" cols="70" id="answer1" style={{"margin-bottom":"40px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p1a1")}></textarea>

          <p className="question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
          <textarea readOnly className="answer" rows="10" cols="70" id="answer2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p1a2")}></textarea>

          <div style={{"margin-bottom":"40px", "display": "inline-block"}}>
            <input disabled type={"radio"} id="r1" name="Valinta" value="A"></input>
            <label for="r1">Esimerkki A</label>
            <input disabled type={"radio"} id="r2" name="Valinta" value="B"></input>
            <label for="r2">Esimerkki B</label>
            <input disabled type={"radio"} id="r3" name="Valinta" value="C"></input>
            <label for="r3">Esimerkki C</label>
          </div>

          
            
          <p className="question">Aseta rekrytoinnin ajankohta:</p>
          
          <input readOnly type="datetime-local" id="rekryaika1" name="rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1d1",document.getElementById("rekryaika1").value)} defaultValue={localStorage.getItem("p1d1")}></input>
          <input readOnly type="datetime-local" id="rekryaika2" name="to_rekryaika" style={{"margin-right":"20px", "border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p1d2",document.getElementById("rekryaika2").value)} defaultValue={localStorage.getItem("p1d2")}></input>

          
          <p className="question" style={{"margin-top":"40px"}}>Arvioi budjetti rekrytoinnille:</p>
          
          
          <input readOnly className="number-input" type="text" id="budjetti" name="budjetti" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} defaultValue={localStorage.getItem("p1n1")} onBlur={(e) => {var a = [];
    var k = e.which;
    
    for (var i = 48; i < 58; i++)
        a.push(i);
    
    if (!(a.indexOf(k)>=0))
        e.preventDefault();if (parseInt(document.getElementById("budjetti").value) > 20000) {document.getElementById("budjetti").value = 20000;alert("Maksimibudjetti on 20 000 euroa.");localStorage.setItem("p1n1",document.getElementById("budjetti").value);} if (parseInt(document.getElementById("budjetti").value) < 2000) {document.getElementById("budjetti").value = 2000;alert("Minimibudjetti on 2000 euroa.");localStorage.setItem("p1n1",document.getElementById("budjetti").value)};if (parseInt(document.getElementById("budjetti").value) >= 2000 && parseInt(document.getElementById("budjetti").value) <= 20000) {document.getElementById("budjetti").value = document.getElementById("budjetti").value;localStorage.setItem("p1n1",document.getElementById("budjetti").value)}}}></input>
          <p className="question" style={{"display": "inline-block"}}>€</p>
          <div></div>



          {/*Page2*/}

          <p className="question" style={{"margin-top":"60px"}}>Yrityksen sijainti:</p>
            <textarea readOnly className="answer" rows="1" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} id="answer1" onChange={() => localStorage.setItem("p2a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p2a1")}></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"radio"} id="1" name="Valinta" value="E"></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"radio"} id="2" name="Valinta" value="F"></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>


            <p className="question">Miten kuvailisit yrityksen toimintaa?</p>

            <textarea readOnly className="answer" rows="10" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} id="answer2" onChange={() => localStorage.setItem("p2a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p2a2")}></textarea>

            <p className="question">Työsopimuksen tyyppi:</p>
            <select className="Dropdown" name="valinta" id="Työ1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s1",document.getElementById("Työ1").value)} defaultValue={localStorage.getItem("p2s1")}>
              <option disabled className="boxed">Määräaikainen</option>
              <option disabled className="boxed">Toistaiseksi voimassa oleva</option>
              <option disabled className="boxed">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="Työ2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s2",document.getElementById("Työ2").value)} defaultValue={localStorage.getItem("p2s2")}>
              <option disabled className="boxed">Kokoaikainen</option>
              <option disabled className="boxed">Osa-aikainen</option>
            </select>
            
            <p className="question">Tehtävänimike:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer3" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} onChange={() => localStorage.setItem("p2a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p2a3")}></textarea>

            
            <p className="question">Työn kuvaus:</p>
            <textarea readOnly className="answer" rows="10" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} id="answer4" onChange={() => localStorage.setItem("p2a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p2a4")}></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer5" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p2a5",document.getElementById("answer5").value)} defaultValue={localStorage.getItem("p2a5")}></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer6" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p2a6",document.getElementById("answer6").value)} defaultValue={localStorage.getItem("p2a6")}></textarea>

            <p className="question">Ilmoita sähköpostiosoite johon hakemukset vastaanotetaan:</p>

            <textarea readOnly className="answer" rows="1" cols="70" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"20px"}} id="answer7" onChange={() => localStorage.setItem("p2a7",document.getElementById("answer7").value)} defaultValue={localStorage.getItem("p2a7")}></textarea>


            <div style={{"margin-bottom":"40px"}}>
              <label className="question">Ilmoituksen julkaisuaika:</label><br></br>

              <input readOnly type="datetime-local" id="julkaisuaika1" name="julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-right":"20px"}} onChange={() => localStorage.setItem("p2d1",document.getElementById("julkaisuaika1").value)} defaultValue={localStorage.getItem("p2d1")}></input>
              <input readOnly type="datetime-local" id="julkaisuaika2" name="to_julkaisuaika" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}}onChange={() => localStorage.setItem("p2d2",document.getElementById("julkaisuaika2").value)} defaultValue={localStorage.getItem("p2d2")}></input>
            </div>

            <p className="question">Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer8" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} onChange={() => localStorage.setItem("p2a8",document.getElementById("answer8").value)} defaultValue={localStorage.getItem("p2a8")}> </textarea>
          
          

            {/*Page 3*/}

            <p className="question" style={{"margin-top": "60px"}}>Miten ja milloin olet tavoitettavissa hakemuksiin liittyen?</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"10px"}} onChange={() => localStorage.setItem("p3a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p3a1")}></textarea>

            <p className="question">Aseta vastausaika hakemuksiin liittyviin kysymyksiin:</p>
            <textarea readOnly className="answer" rows="1" cols="70" id="answer2" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p3a2")}></textarea>

            <p className="question">Luonnostele kutsu haastatteluun:</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="answer3" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"50px"}} onChange={() => localStorage.setItem("p3a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p3a3")}></textarea>

            <p className="question">Miten hylättyihin hakemuksiin vastataan? Luo vastauspohja.</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="answer4" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p3a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p3a4")}></textarea>

            <div>
              <input disabled type={"radio"} id="1" name="Valinta" value="A"></input>
              <label for="1">Esimerkki A</label>
              <input disabled type={"radio"} id="2" name="Valinta" value="B" style={{"margin-bottom":"50px"}}></input>
              <label for="2" >Esimerkki B</label>
            </div>



            {/*Page 4*/}

            <p className="question" style={{"margin-top": "60px"}}>Miten työhön haastattelu toteutetaan?</p>
            <select className="Dropdown" name="valinta" id="Työ1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke", "margin-bottom":"40px"}} onChange={() => localStorage.setItem("p4s1",document.getElementById("Työ1").value)} defaultValue={localStorage.getItem("p4s1")}>
              <option disabled className="boxed">Ryhmähaastattelu</option>
              <option disabled className="boxed">Etähaastattelu</option>
            </select>

            <p className="question">Suunnittele haastattelurunko:</p>
            <textarea readOnly className="answer" rows="10" cols="70" id="answer1" style={{"border": "3px solid black", "backgroundColor": "whitesmoke"}} onChange={() => localStorage.setItem("p4a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p4a1")}></textarea>

            <div>
              <input disabled type={"checkbox"} id="1" name="Esimerkki" value="Esimerkki" style={{"margin-bottom":"50px"}}></input>
              <label for="1">Esimerkkikysymyksiä:</label>
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