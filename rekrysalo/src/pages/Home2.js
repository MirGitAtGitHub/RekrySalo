import {HomeBackImage} from "../modules/HomeBackImage";
import {Footer} from "../modules/Footer";
import{TopFooter} from "../modules/TopFooter";
const Home2 = () => {
  return (
      <html>
        <body className="Body">
          <div className="Content">
            <HomeBackImage />

            <div className="mid">
                <p className="question">Yrityksen sijainti:</p>
                <textarea className="answer" rows="1" cols="70">
                </textarea>

                <div>
                    <input type={"radio"} id="1" name="Valinta" value="E"></input>
                    <label for="1">Etätyö tai monta sijaintia</label>
                    <input type={"radio"} id="2" name="Valinta" value="F"></input>
                    <label for="2">Työpaikalla on eri sijainti kuin yrityksellä</label>
                </div>


                <p className="question">Yrityksen kuvaus:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>

                <p className="question">Työsopimuksen tyyppi</p>
                <select className="Dropdown" name="valinta" id="Työ">
                    <option className="boxed">Määräaikainen</option>
                    <option className="boxed">Toistaiseksi voimassaolo</option>
                    <option className="boxed">Harjoittelija</option>
                </select>

                <p className="question">Työaika:</p>
                <select className="Dropdown" name="valinta" id="Työ">
                    <option className="boxed">Kokoaikainen</option>
                    <option className="boxed">Osa-aikainen</option>
                </select>
                
                <p className="question">Tehtävänimike:</p>
                <textarea className="answer" rows="1" cols="70">
                </textarea>
                
                <p className="question">Arvioi budjetti rekrytoinnille:</p>
                <textarea className="answer" rows="10" cols="70">
                </textarea>
                <p></p>
                
            </div>
          </div>

          <div className="Header">
            <TopFooter text="OSAAMISEN TARVE" />
          </div>
          
          <div>
            {Array(35)
            .fill()
            .map((_, i) => (
              <p key={i}>{i}</p>
            ))}
          </div>
         
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "green"
            }}
          >
            <Footer />
          </div>
        </body>

      </html>
  )
}

export default Home2