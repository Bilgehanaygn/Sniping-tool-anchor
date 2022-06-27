import logo from '../assets/snipe-logo-alter.png';
import snipingIcon from '../assets/sniping-icon.png';
import autoBuyIcon from '../assets/auto-buy-icon.png';
import theme from '../theme/theme';

const MyAppBar = () => {

    const styles = {
        mainDiv: {
            backgroundColor: "#282c34",
            textAlign: "center",
            padding:"0vh 5vh",
            height: "10vh",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
        },
        sniperToolWrapper:{
            backgroundColor:theme.primary, display:"flex", flexDirection:"row", 
            justifyContent:"start", alignItems:"center", fontWeight:"bold",
            padding: "0.5vh 0vh 0.5vh 2vh", color:"white", marginRight:"3vh",
            width: "27vh",
        }
    }

    return (
        <div style={styles.mainDiv}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={styles.sniperToolWrapper}>
                    <img src={snipingIcon} alt="sniping_icon" style={{width:"5vh", height:"5vh", marginRight:"1vh"}} />
                    Sniper Tool
                </div>
                <div style={{...styles.sniperToolWrapper, backgroundColor:"#102415"}}>
                    <img src={autoBuyIcon} alt="snip" style={{width:"5vh", height:"5vh", marginRight:"1vh"}} />
                    Auto Buy
                </div>
            </div>
            <img src={logo} alt="image1" style={{width:"12vh",height:"10vh", position:"fixed", left:"47vw"}} />

        </div>
    );

}

export default MyAppBar;
