import {Footer} from "../modules/Footer";

export const Middle = () => {
    return (
        <div> 
            <div className="mid">
                <p className="question">Hello im just a test text space thingy,</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p>toinen kysymys, oletko koditon?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p>kolmas kysymys, oletko ihminen?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p>neljäs kysymys, oletko iloinen?</p>
                <textarea Classname="answer" rows="10" cols="70">
                    Type Here.
                </textarea>
                <p></p>
                
            </div>
        </div>
        
    );
}

export default Middle