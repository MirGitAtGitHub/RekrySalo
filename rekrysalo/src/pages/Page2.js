//import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
import{Link} from "react-router-dom";
import{useEffect} from "react";
const Page2 = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  var itemscreate = (localStorage.getItem("itemscreate") !== 0) ? localStorage.getItem("itemscreate") : 0;
  window.onload = () => ((itemscreate !== 0 && document.getElementById("4").checked === true && document.getElementById("ttvalinta").style.display !== "none" && document.getElementById("1").checked === true) ?
    (createItems(itemscreate),(document.getElementById("lisaasijainti").style.display === "none") ? document.getElementById("lisaasijainti").style.display = "" : document.getElementById("ttvalinta").style.display = "none") : "",(document.getElementById("4").checked === true && document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? (document.getElementById("lisaasijainti").style.display = "",(itemscreate !== 0 && document.getElementById("4").checked === true && document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? createItems(itemscreate) : "") : document.getElementById("lisaasijainti").style.display = "none",(document.getElementById("1").checked === true) ? document.getElementById("ttvalinta").style.display = "" : "",(document.getElementById("1").checked === true && document.getElementById("4").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? document.getElementById("lisaasijainti").style.display = "" : "",(document.getElementById("1").checked === false || (document.getElementById("1").checked === false && document.getElementById("4").checked === false) ? document.getElementById("lisaasijainti").style.display = "none" : document.getElementById("lisaasijainti").style.display = ""),(document.getElementById("1").checked === true && document.getElementById("4").checked === false) ? document.getElementById("lisaasijainti").style.display = "none" : "",(document.getElementById("1").checked === true && document.getElementById("4").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? (itemscreate !== 0) ? createItems(itemscreate) : "" : "",(document.getElementById("2").checked === true) ? (document.getElementById("tpsijaintip").style.display = "",document.getElementById("optionalanswer1").style.display = "") : (document.getElementById("tpsijaintip").style.display = "none",document.getElementById("optionalanswer1").style.display = "none"))
  localStorage.setItem("pagenumber","2");
  sessionStorage.setItem("itemscreated",false);
  sessionStorage.setItem("sessionongoing",(sessionStorage.getItem("sessionongoing") === null) ? "false" : "true");
  if(localStorage.length > 1 && sessionStorage.getItem("sessionongoing") === "false") {
    if(window.confirm("Olet käynyt aiemmin tällä sivulla. Onko sinulla keskeneräinen lomake täytettävänä? Ei hätää. Voit palata lomakkeen pariin painamalla Ok. Jos haluat hylätä tehdyt muutokset ja aloittaa lomakkeen täytön alusta, paina Peru.")) {
      console.log("Palautetaan aiempi istunto...");
    } else {
      localStorage.clear();
      sessionStorage.clear();
    }
  }
  function createItems(itemscreate){
    if(itemscreate > 0){
      for (let ic = 0; ic < itemscreate; ic++) {
        var sijainti = document.createElement("textarea");
        sijainti.setAttribute("className","answer");
        sijainti.setAttribute("rows","1");
        sijainti.setAttribute("cols","70");
        sijainti.setAttribute("id","sijainti" + ic.toString());
        sijainti.addEventListener("change",() => localStorage.setItem("p2sa" + ic.toString(),document.getElementById("sijainti" + ic.toString()).value));
        sijainti.textContent = localStorage.getItem("p2sa" + ic.toString());
        var sijaintikenttä = document.getElementById("lisaasijainti");
        sijaintikenttä.before(sijainti);
      }
    }
  }
  function destroyItems(itemscreate){
    if(itemscreate > 0){
      for (let id = 0; id < itemscreate; id++) {
        var removeitem = document.getElementById("sijainti" + id.toString());
        removeitem.remove();
      }
    }
  }
  return (
    <html>
      <body className="Body">
        <div className="Header">
          <TopFooter text="TYÖPAIKKAILMOITUS" current="2" />
        </div>

        <div className="mid-grid">
          <div></div>

          <div className="mid" id="mid">

            <div>
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Suosituimmat työpaikkojen hakukoneet:<br></br>
              <p className="bluetext2" style={{"display":"inline-block", "margin-right": "40px"}}>TE-palvelut</p>
              <p className="bluetext2" style={{"display":"inline-block", "margin-right": "40px"}}>Duunitori</p>
              <p className="bluetext2" style={{"display":"inline-block", "margin-right": "40px", "margin-bottom":"40px"}}>Oikotie</p></p>
            </div>

            <div className="circle-parent">
              

              <div className="circle" style={{"float":"right"}}>
                <p className="circle-text">?</p>
              </div>
            
            
              <p className="question" style={{"display":"inline-block"}}>Yrityksen sijainti:</p>
            </div>
            <div className="sijainti-container">
              <textarea className="answer" rows="1" cols="70" id="answer1" onChange={() => localStorage.setItem("p2a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p2a1")}></textarea>
            </div>
            <p className="question">Yrityksen sijainti:</p>
            <textarea className="answer" rows="1" cols="70" id="answer1" onChange={() => localStorage.setItem("p2a1",document.getElementById("answer1").value)} defaultValue={localStorage.getItem("p2a1")}></textarea>

            <div style={{"margin-bottom":"40px"}}>
              <input type={"checkbox"} id="1" name="Valinta1" value="1" onChange={() => ((document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display === "none") ? document.getElementById("ttvalinta").style.display = "" : document.getElementById("ttvalinta").style.display = "none",(document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display === "none") ? document.getElementById("ttvalinta").style.display = "" : document.getElementById("ttvalinta").style.display = "none",(document.getElementById("1").checked === false || (document.getElementById("1").checked === false && document.getElementById("4").checked === false) ? document.getElementById("lisaasijainti").style.display = "none" : document.getElementById("lisaasijainti").style.display = ""),(document.getElementById("1").checked === true && document.getElementById("4").checked === false) ? document.getElementById("lisaasijainti").style.display = "none" : (document.getElementById("1").checked === false && document.getElementById("4").checked === true) ? document.getElementById("lisaasijainti").style.display = "none" : "",(document.getElementById("1").checked === false && document.getElementById("4").checked === true) ? (itemscreate > 0) ?
    destroyItems(itemscreate) : "" : "",(document.getElementById("1").checked === true && document.getElementById("4").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? (itemscreate !== 0) ? createItems(itemscreate) : "" : "")} onClick={() => (localStorage.setItem("p2etätyötaimontasijaintia",document.getElementById("1").checked),(document.getElementById("4").checked === false || (document.getElementById("4").checked === false && document.getElementById("1").checked === false)) ? (document.getElementById("lisaasijainti").style.display = "none",(itemscreate > 0) ?
    destroyItems(itemscreate) : "") : "",(document.getElementById("1").checked === true && document.getElementById("4").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? (document.getElementById("lisaasijainti").style.display = "",(itemscreate !== 0 && document.getElementById("4").checked === true && document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display !== "none") ?
    createItems(itemscreate) : "") : "",(document.getElementById("1").checked === true) ? document.getElementById("ttvalinta").style.display = "" : "")} defaultChecked={(localStorage.getItem("p2etätyötaimontasijaintia") === "true") ? true : false}></input>
              <label for="1">Etätyö tai monta sijaintia</label>
              <input type={"checkbox"} id="2" name="Valinta2" value="2" onChange={() => ((document.getElementById("2").checked === true) ? (document.getElementById("tpsijaintip").style.display = "",document.getElementById("optionalanswer1").style.display = "") : (document.getElementById("tpsijaintip").style.display = "none",document.getElementById("optionalanswer1").style.display = "none"))} onClick={() => localStorage.setItem("p2erisijainti",document.getElementById("2").checked)} defaultChecked={(localStorage.getItem("p2erisijainti") === "true") ? true : false}></input>
              <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
            </div>

            <div style={{"margin-bottom":"40px",display:"none"}} id="ttvalinta">
              <input type={"checkbox"} id="3" name="Valinta" value="3" onClick={() => localStorage.setItem("p2etätyö",document.getElementById("3").checked)} defaultChecked={(localStorage.getItem("p2etätyö") === "true") ? true : false}></input>
              <label for="3">Etätyö</label>
              <input type={"checkbox"} id="4" name="Valinta" value="4" onClick={() => (localStorage.setItem("p2montasijaintia",document.getElementById("4").checked),(document.getElementById("4").checked === true && document.getElementById("1").checked === true && document.getElementById("ttvalinta").style.display !== "none") ? (document.getElementById("lisaasijainti").style.display = "",(itemscreate !== 0) ?
    createItems(itemscreate) : "") : (document.getElementById("lisaasijainti").style.display = "none",(itemscreate > 0) ?
    destroyItems(itemscreate) : ""))} defaultChecked={(localStorage.getItem("p2montasijaintia") === "true") ? true : false}></input>
              <label for="4">Monta sijaintia</label>
            </div>

            <p className="question" id="tpsijaintip" style={{display:"none"}}>Työpaikan sijainti:</p>
            <textarea className="answer" rows="1" cols="70" id="optionalanswer1" style={{display:"none"}} onChange={() => localStorage.setItem("p2oa1",document.getElementById("optionalanswer1").value)} defaultValue={localStorage.getItem("p2oa1")}></textarea>

            <div className="add-button" id="lisaasijainti" style={{display:"none"}} onClick={() => {itemscreate++;localStorage.setItem("itemscreate",itemscreate); var sijainti = document.createElement("textarea");
            sijainti.setAttribute("className","answer");
            sijainti.setAttribute("rows","1");
            sijainti.setAttribute("cols","70");
            sijainti.setAttribute("id","sijainti" + itemscreate.toString());
            sijainti.addEventListener("change",() => localStorage.setItem("p2sa" + itemscreate.toString(),document.getElementById("sijainti" + itemscreate.toString()).value));
            sijainti.textContent = localStorage.getItem("p2sa" + itemscreate.toString());
            var sijaintikenttä = document.getElementById("lisaasijainti");
            sijaintikenttä.before(sijainti);}}>
              <p className="add-button-text"><strong>+ Lisää sijainti</strong></p>
            </div>

            <div>
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
                <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Miten kuvailisit yrityksen toimintaa?</p>
            </div>
            

            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"40px"}} id="answer2" onChange={() => localStorage.setItem("p2a2",document.getElementById("answer2").value)} defaultValue={localStorage.getItem("p2a2")}></textarea>

            <p className="question">Työsopimuksen tyyppi:</p>
            <select className="Dropdown" name="valinta" id="Työ1" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s1",document.getElementById("Työ1").value)} defaultValue={localStorage.getItem("p2s1")}>
              <option className="boxed">Valitse...</option>
              <option className="boxed">Määräaikainen</option>
              <option className="boxed">Toistaiseksi voimassa oleva</option>
              <option className="boxed">Harjoittelija</option>
            </select>

            <p className="question">Työaika:</p>
            <select className="Dropdown" name="valinta" id="Työ2" style={{"margin-bottom":"10px"}} onChange={() => localStorage.setItem("p2s2",document.getElementById("Työ2").value)} defaultValue={localStorage.getItem("p2s2")}>
              <option className="boxed">Valitse...</option>
              <option className="boxed">Kokoaikainen</option>
              <option className="boxed">Osa-aikainen</option>
            </select>
            
            <div>
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
                <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Tehtävänimike:</p>
            </div>
            
            <textarea className="answer" rows="1" cols="70" id="answer3" style={{"margin-bottom":"40px"}} onChange={() => localStorage.setItem("p2a3",document.getElementById("answer3").value)} defaultValue={localStorage.getItem("p2a3")}></textarea>

            <div className="circle-parent">
              <div className="circle" style={{"margin-left":"-10%"}}>
                <p className="circle-text">!</p>
              </div>
              <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Työn kuvaus:</p>
              <div className="circle" style={{"float":"right"}}>
                <p className="circle-text">?</p>
              </div>
            </div>
            
            <textarea className="answer" rows="10" cols="70" style={{"margin-bottom":"50px"}} id="answer4" onChange={() => localStorage.setItem("p2a4",document.getElementById("answer4").value)} defaultValue={localStorage.getItem("p2a4")}></textarea>

            <p className="question">Ilmoittajan nimi:</p>
            <textarea className="answer" rows="1" cols="70" id="answer5" onChange={() => localStorage.setItem("p2a5",document.getElementById("answer5").value)} defaultValue={localStorage.getItem("p2a5")}></textarea>

            <p className="question">Ilmoittajan puhelin:</p>
            <textarea className="answer" rows="1" cols="70" id="answer6" onChange={() => localStorage.setItem("p2a6",document.getElementById("answer6").value)} defaultValue={localStorage.getItem("p2a6")}></textarea>

            <p className="question">Ilmoita sähköpostiosoite johon hakemukset vastaanotetaan:</p>

            <textarea className="answer" rows="1" cols="70" style={{"margin-bottom":"20px"}} id="answer7" onChange={() => localStorage.setItem("p2a7",document.getElementById("answer7").value)} defaultValue={localStorage.getItem("p2a7")}></textarea>


            <div style={{"margin-bottom":"40px"}}>
              
              <div className="circle-parent">
                <label className="question" style={{"display":"inline-block"}}>Ilmoituksen julkaisuaika:</label><br></br>

                <div className="circle" style={{"float":"right"}}>
                  <p className="circle-text">?</p>
                </div>
              </div>
              <input type="datetime-local" id="julkaisuaika1" name="julkaisuaika" style={{"margin-right":"20px"}} onChange={() => localStorage.setItem("p2d1",document.getElementById("julkaisuaika1").value)} defaultValue={localStorage.getItem("p2d1")}></input>
              <input type="datetime-local" id="julkaisuaika2" name="to_julkaisuaika" onChange={() => localStorage.setItem("p2d2",document.getElementById("julkaisuaika2").value)} defaultValue={localStorage.getItem("p2d2")}></input>
            </div>

            <div>
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
                <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Yhteyshenkilöt ja heidän yhteystietonsa:</p>
            </div>
           
            <textarea className="answer" rows="1" cols="70" id="answer8" style={{"margin-bottom":"50px"}} onChange={() => localStorage.setItem("p2a8",document.getElementById("answer8").value)} defaultValue={localStorage.getItem("p2a8")}> </textarea>

            <div>
                <div className="circle" style={{"margin-left":"-11%"}}>
                  <p className="circle-text">!</p>
                </div>
                <p className="question" style={{"display":"inline-block", "margin-left":"2%"}}>Muutaman yleisimmän työnhakusivuston <br></br> vaatimukset lähettävän kuvan ja videon suhteen.</p>
            </div>
            

            <div className="page2-grid">
              <div></div>
              <div className="page2-grid-item">
                <h1 className="p2-h">Oikotie</h1>
                <p className="sub-header">Kuva</p>
                <div className="sub-grid">
                  <p className="sub-grid-item">Mitat <br></br> 810 x <br></br> 540px</p>
                  <p className="sub-grid-item">Koko <br></br> 2Mt</p>
                  <p className="sub-grid-item">Muoto <br></br> .png / .jpg</p>
                </div>
                <p className="sub-header">Logo</p>
                <div className="sub-grid">
                  <p className="sub-grid-item">Mitat <br></br> 320 x <br></br> 160px</p>
                  <p className="sub-grid-item">Koko <br></br> 2Mt</p>
                  <p className="sub-grid-item">Muoto <br></br> .png / .jpg</p>
                </div>
                <p className="sub-header">Video</p>
                <p className="sub">Muoto</p>
                <p className="sub">Linkkinä:</p>
                <p className="sub" style={{"padding-bottom": "3%"}}>Youtube tai Vimeo</p>
              </div>

              <div className="page2-grid-item">
                <h1 className="p2-h">Duunitori</h1>
                <p className="sub-header">Kuva</p>
                <div className="sub-grid2">
                  <p className="sub-grid-item">Mitat <br></br> min <br></br> 1200 x 630px</p>
                  <p className="sub-grid-item">Koko <br></br> 2Mt</p>
                  <p className="sub-grid-item">Muoto <br></br> .png / .jpg</p>
                </div>
                <p className="sub-header">Logo</p>
                <div className="sub-grid">
                  <p className="sub-grid-item">Mitat <br></br> 320 x <br></br> 160px</p>
                  <p className="sub-grid-item">Koko <br></br> max 20Mt</p>
                  <p className="sub-grid-item">Muoto <br></br> .png </p>
                </div>
                <p className="sub-header">Video</p>
                <p className="sub">Muoto</p>
                <p className="sub" style={{"padding-bottom": "13%"}}>Linkkinä:</p>
              </div>
              <div></div>
            </div>

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

export default Page2;