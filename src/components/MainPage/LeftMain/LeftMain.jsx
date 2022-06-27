import theme from "../../../theme/theme";
import './leftmain.css';


const LeftMain = () => {

    const walletBalance = "1.712";

    const styles = {
        mainDiv:{
            display:"flex", flexDirection:"column", width:"15vw", color:"white", 
            borderRadius:"2vh", marginTop:"2vh", height:"100%", backgroundColor:"rgba(40, 44, 52, 0.7)",
        },
        walletBalanceStyle: {
            fontSize:20, margin:"1vh", textAlign:"center", padding:"1vh", border:`2px solid ${theme.primary}`,
            borderRadius: "1vh", marginBottom:"5vh", marginTop:"7vh"
        },
        menuItemWrapper: {
            fontSize: 20, margin:"1vh", display:"flex", flexDirection:"row", 
            justifyContent:"start", alignItems:"center", padding:"1vh", borderRadius:"1vh",
        },
        
    }
    return (
        <div style={styles.mainDiv}>

            <div style={styles.walletBalanceStyle} >
                <div style={{fontSize:25}} >Wallet Balance</div>
                <div>Not Connected</div>
            </div>
            <div className="menu-item">
                <svg style={{marginRight:"1vw"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                Upcoming Drops
            </div>
            <div className="menu-item">
                <svg style={{marginRight:"1vw"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-wallet" viewBox="0 0 16 16">
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
                </svg>
                Wallet Details
            </div>
            <div className="menu-item">
                <svg style={{marginRight:"1vw"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                </svg>
                List Items
            </div>
            <div className="menu-item">
                <svg style={{marginRight:"1vw"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
                </svg>
                FAQ
            </div>
            <div className="menu-item">
            <svg style={{marginRight:"1vw"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
                Feedback
            </div>
        </div>
    )
}

export default LeftMain;