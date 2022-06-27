import { ContextValue } from '../../context/Context';
import AppBar from '../MyAppBar';
import LeftMain from './LeftMain/LeftMain';
import RightMain from './RightMain/RightMain';
import MiddleMain from './MiddleMain/MiddleMain';
import Loading from '../Loading/Loading';

const MainPage = () => {
    const state= ContextValue()[0];

    const styles = {
        mainDiv: {
            backgroundColor:"black",
            width: "100vw",
            height: "90vh",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"start", 
        },
    }

    return (
        state.loadingDone ? 
        <>
            <AppBar/>
            <div style={styles.mainDiv}>
                <div style={{height:"85vh"}}>
                    <LeftMain />
                </div>        
                <MiddleMain/>
                <RightMain/>
            </div>
        </> :
        <Loading/>
        
    )
}

export default MainPage;