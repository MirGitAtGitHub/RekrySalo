export const Footer = () => {
  return (
    <>
<<<<<<< HEAD
        <div className="footer" style={{backgroundColor:"#282c34",position:"absolute",bottom:0,left:0,right:0,height: "20%"}}>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-content-left-logo">
                        <img src={require('../images/Yrityssalo_logo.png')} alt="logo" style={{height: "20%",width: "20%",marginTop:"3%"}} />
=======
        <div className="footer" style={{backgroundColor:"#282c34",
    position:"absolute",
    bottom:"0%",
    left:"0%",
    right: "0%",
    height: "20%",
    width:"100%"}}>
            <div className="footer-content" style={{position:"relative"}}>
                <div className="footer-content-left" style={{position:"relative"}}>
                    <div className="footer-content-left-logo" style={{position:"absolute"}}>
                        <img src={require('../images/Yrityssalo_logo.png')} alt="logo" style={{height: "100%",width: "100%",position:"relative"}} />
>>>>>>> parent of 353b93a (Yleisiä muutoksia)
                    </div>
                </div>
                <div className="footer-content-right">
                    <div className="footer-content-right-links">
                        <div className="footer-content-right-links-item">
<<<<<<< HEAD
                            <div class="grid-container" style={{display: "grid",columnGap: "50px",gridTemplateColumns: "auto auto auto",gridTemplateRows:"auto auto auto auto auto",position:"absolute",top:"25%",right:0,marginBottom:0,marginRight:"15%"}}>
                                <div class="grid-container" style={{display: "grid",rowGap:"3px",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://www.google.com/maps/place/Joensuunkatu+7,+24100+Salo/@60.3876751,23.1039557,17z/data=!3m1!4b1!4m5!3m4!1s0x468c46ffa6af4223:0xe37ef9d45f7aa3cf!8m2!3d60.3876751!4d23.1061497"><div class="grid-item">Joensuunkatu 7</div>
                                    <div class="grid-item">24100 SALO</div></a>
                                    <div class="grid-item">044 546 0043</div>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbQfVkJWcRQWXdtxXwHCZDwvJsffvDtJndqnXFGQlLsXmfdlHnSKHVBnFdtJXrBtHdb"><div class="grid-item">Yrityssalo@yrityssalo.fi</div></a>
                                    <div class="grid-item" hidden>Hei!</div>
                                </div>
                                <div class="grid-container" style={{display: "grid",rowGap:"3px",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://toihinsaloon.fi"><div class="grid-item">toihinsaloon.fi</div></a>
                                    <a href="https://investinsalo.fi"><div class="grid-item">investinsalo.fi</div></a>
                                    <a href="https://yrityssalo.fi/info/toimitilapalvelut-ja-vapaat-toimitilat/"><div class="grid-item">Vapaat toimitilat</div></a>
                                    <a href="https://visitsalo.fi"><div class="grid-item">visitsalo.fi</div></a>
                                    <div class="grid-item" hidden>Hei!</div>
                                </div>
                                <div class="grid-container" style={{display: "grid",rowGap:"3px",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://twitter.com/yrityssalooy"><div class="grid-item">Twitter</div></a>
                                    <a href="https://fi.linkedin.com/company/yrityssalo-ltd.?original_referer=https%3A%2F%2Fwww.google.com%2F"><div class="grid-item">LinkedIn</div></a>
                                    <a href="https://fi-fi.facebook.com/yrityssalo/"><div class="grid-item">Facebook</div></a>
                                    <a href="https://www.instagram.com/yrityssalo"><div class="grid-item">Instagram</div></a>
                                    <a href="https://www.youtube.com/channel/UCkfQiLLkGcMBBkOy1ghBNHQ"><div class="grid-item">YouTube</div></a>
=======
                            <div className="grid-container" style={{display: "grid",columnGap: "25%",gridTemplateColumns: "auto auto auto",gridTemplateRows:"auto auto auto auto auto",position:"absolute",top:"25%",right:"0%",marginBottom:"0%",marginRight:"15%"}}>
                                <div className="grid-container" style={{display: "grid",rowGap:"3%",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://www.google.com/maps/place/Joensuunkatu+7,+24100+Salo/@60.3876751,23.1039557,17z/data=!3m1!4b1!4m5!3m4!1s0x468c46ffa6af4223:0xe37ef9d45f7aa3cf!8m2!3d60.3876751!4d23.1061497"><div className="grid-item">Joensuunkatu 7</div>
                                    <div className="grid-item">24100 SALO</div></a>
                                    <div className="grid-item">044 546 0043</div>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbQfVkJWcRQWXdtxXwHCZDwvJsffvDtJndqnXFGQlLsXmfdlHnSKHVBnFdtJXrBtHdb"><div className="grid-item">Yrityssalo@yrityssalo.fi</div></a>
                                    <div className="grid-item" hidden>Hei!</div>
                                </div>
                                <div className="grid-container" style={{display: "grid",rowGap:"3%",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://toihinsaloon.fi"><div className="grid-item">toihinsaloon.fi</div></a>
                                    <a href="https://investinsalo.fi"><div className="grid-item">investinsalo.fi</div></a>
                                    <a href="https://yrityssalo.fi/info/toimitilapalvelut-ja-vapaat-toimitilat/"><div className="grid-item">Vapaat toimitilat</div></a>
                                    <a href="https://visitsalo.fi"><div className="grid-item">visitsalo.fi</div></a>
                                    <div className="grid-item" hidden>Hei!</div>
                                </div>
                                <div class="grid-container" style={{display: "grid",rowGap:"3%",gridTemplateColumns: "auto",gridTemplateRows:"auto auto auto auto auto"}}>
                                    <a href="https://twitter.com/yrityssalooy"><div className="grid-item">Twitter</div></a>
                                    <a href="https://fi.linkedin.com/company/yrityssalo-ltd.?original_referer=https%3A%2F%2Fwww.google.com%2F"><div className="grid-item">LinkedIn</div></a>
                                    <a href="https://fi-fi.facebook.com/yrityssalo/"><div className="grid-item">Facebook</div></a>
                                    <a href="https://www.instagram.com/yrityssalo"><div className="grid-item">Instagram</div></a>
                                    <a href="https://www.youtube.com/channel/UCkfQiLLkGcMBBkOy1ghBNHQ"><div className="grid-item">YouTube</div></a>
>>>>>>> parent of 353b93a (Yleisiä muutoksia)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
