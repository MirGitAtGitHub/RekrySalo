import logo from "../images/Yrityssalo_logo.png";
export const Footer = () => {
  return (
      <footer className="footer">
          <div className="logo-left">
                <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="links-container">
            <div className="contact-links-right">
              <a href="">Joensuunkatu 7</a>
              <a href="">24100 SALO</a>
              <a href="">044 546 0043</a>
              <a href="">Yrityssalo@yrityssalo.fi</a>
            </div>
            <div className="links-right">
              <a href="">toihinsaloon.fi</a>
              <a href="">investinsalo.fi</a>
              <a href="">Vapaat toimitilat</a>
              <a href="">visitsalo.fi</a>
            </div>
            <div className="social-links-right">
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">YouTube</a>
            </div>
         </div>
      </footer>
    );
}
