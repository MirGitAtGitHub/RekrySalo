import logo from "../images/Yrityssalo_logo.png";
export const Footer = () => {
  return (
          <footer className="footer">
          <div className="logo-left">
                <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="links-container">
            <div className="contact-links-right">
              <a href="https://www.google.com/maps/place/Joensuunkatu+7,+24100+Salo/@60.3876751,23.1039557,17z/data=!3m1!4b1!4m5!3m4!1s0x468c46ffa6af4223:0xe37ef9d45f7aa3cf!8m2!3d60.3876751!4d23.1061497" style={{pointerEvents: "none"}}>Joensuunkatu 7</a>
              <a href="https://www.google.com/maps/place/24100+Salo/@60.3800465,23.0778777,12z/data=!3m1!4b1!4m5!3m4!1s0x468c46357b1fedd7:0x1c00b55478583980!8m2!3d60.3787693!4d23.1529999" style={{pointerEvents: "none"}}>24100 SALO</a>
              <a href="" style={{pointerEvents: "none"}}>044 546 0043</a>
              <a href="" style={{pointerEvents: "none"}}>Yrityssalo@yrityssalo.fi</a>
            </div>
            <div className="links-right">
              <a href="https://toihinsaloon.fi">toihinsaloon.fi</a>
              <a href="https://investinsalo.fi">investinsalo.fi</a>
              <a href="https://investinsalo.fi/vapaat-toimitilat-ja-yritystontit/">Vapaat toimitilat</a>
              <a href="https://visitsalo.fi">visitsalo.fi</a>
            </div>
            <div className="social-links-right">
              <a href="https://twitter.com/yrityssalooy">Twitter</a>
              <a href="https://fi.linkedin.com/company/yrityssalo-ltd.">LinkedIn</a>
              <a href="https://www.facebook.com/yrityssalo/">Facebook</a>
              <a href="https://www.instagram.com/yrityssalo/?hl=fi">Instagram</a>
              <a href="https://www.youtube.com/channel/UCkfQiLLkGcMBBkOy1ghBNHQ">YouTube</a>
            </div>
         </div>
      </footer>
    );
}
