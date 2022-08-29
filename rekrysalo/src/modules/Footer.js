import logo from "../images/Yrityssalo_logo.png";
export const Footer = () => {
  return (

          
          <footer className="">

            <div className="logo-left">
                  <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="links-container">
              <div className="contact-links-right">
                <a href="https://www.google.com/maps/place/Joensuunkatu+7,+24100+Salo/@60.3876751,23.1039557,17z/data=!3m1!4b1!4m5!3m4!1s0x468c46ffa6af4223:0xe37ef9d45f7aa3cf!8m2!3d60.3876751!4d23.1061497" target="_blank" rel="noreferrer">Joensuunkatu 7</a>
                <a href="https://www.google.com/maps/place/24100+Salo/@60.3800465,23.0778777,12z/data=!3m1!4b1!4m5!3m4!1s0x468c46357b1fedd7:0x1c00b55478583980!8m2!3d60.3787693!4d23.1529999" target="_blank" rel="noreferrer">24100 SALO</a>
                <p style={{pointerEvents: "none"}}>044 546 0043</p>
                <p style={{pointerEvents: "none"}}>Yrityssalo@yrityssalo.fi</p>
              </div>
              <div className="links-right">
                <a href="https://toihinsaloon.fi" target="_blank" rel="noreferrer">toihinsaloon.fi</a>
                <a href="https://investinsalo.fi" target="_blank" rel="noreferrer">investinsalo.fi</a>
                <a href="https://investinsalo.fi/vapaat-toimitilat-ja-yritystontit/" target="_blank" rel="noreferrer">Vapaat toimitilat</a>
                <a href="https://visitsalo.fi" target="_blank" rel="noreferrer">visitsalo.fi</a>
              </div>
              <div className="social-links-right">
                <a href="https://twitter.com/yrityssalooy" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://fi.linkedin.com/company/yrityssalo-ltd." target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.facebook.com/yrityssalo/" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com/yrityssalo/?hl=fi" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.youtube.com/channel/UCkfQiLLkGcMBBkOy1ghBNHQ" target="_blank" rel="noreferrer">YouTube</a>
              </div>
          </div>
        </footer>
    );
}
