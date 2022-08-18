import {HomeBackImage} from "../modules/HomeBackImage";
import {useEffect} from 'react';
const NoPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="uushtml">
      <body className="">
        
        <div className="Content">
          <HomeBackImage nopage={true} />
          <div className="mid">
              <p className="question"><strong>Virhe 404:</strong> Etsimäsi sivu on voitu poistaa/vaihtanut osoitetta.</p>
          </div>
        </div>
      
        <div>
        </div>
      </body>

    </div>
  )
}

export default NoPage;