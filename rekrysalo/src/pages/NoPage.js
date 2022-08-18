import {useEffect} from 'react';
const NoPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <html className="uushtml">
      <body className="Body">
        
          <div className="Content">
            <div className="mid">
              <p className="question"><strong>Virhe 404:</strong> Etsimäsi sivu on voitu poistaa/vaihtanut osoitetta.</p>
            </div>
          </div>
      
          <div>
          </div>
        
      </body>

    </html>

  )
}

export default NoPage;