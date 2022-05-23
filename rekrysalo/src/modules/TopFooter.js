import { SquareButton } from './SquareButton'
export const TopFooter = () => {
    return (
    <>
        <div className='main'>

            <div className="top-footer" style={{backgroundColor:"steelblue",position:"fixed",right:0,left:0,top:0,height:"8%"}}>
                <div className="top-footer-content-1">
                    <p style={{color:"white",fontSize:32,textAlign:"center",marginTop:"0.5%"}}>Title Text</p>
                </div>
                
                <div className="top-footer-content-2" style={{display:"grid",columnGap:"50px",gridTemplateColumns:"auto auto auto auto auto auto auto auto",position:"absolute",width:"100%",backgroundColor:"whitesmoke",borderTop:"30px solid whitesmoke", marginTop:"-25px", borderBottom:"10px solid whitesmoke"}}>
                    <img src={require('../images/House_Icon.png')} alt="" style={{height:"100px", width:"100px"}}></img>
                    <SquareButton number={1} />
                    <SquareButton number={2} />
                    <SquareButton number={3} />
                    <SquareButton number={4} />
                    <SquareButton number={5} />
                    <SquareButton number={6} />
                </div>
            </div>    
        </div>
    </>
  )
} 