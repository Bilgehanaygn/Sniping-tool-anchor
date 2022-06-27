import { useState, useEffect } from "react";
import { fetchCollectionDetails, fetchCollectionListings, fetchItemDetails } from "../../../actions/collections";
import types from "../../../actions/types";
import backArrow from "../../../assets/back-arrow2.png";
import nextArrow from "../../../assets/next-arrow.png";
import { ContextValue } from "../../../context/Context";
import Listings from './Listings';
import {spread} from 'axios';
import theme from "../../../theme/theme";
import './collectiondetails.css';



const Header = ({screenNumCallback}) => {
    const [state, dispatch] = ContextValue();
    const [backMouseOver, setBackMouseOver] = useState(false);

    const styles = {
        socialIcon: {
            color:theme.primary,
            marginLeft:"2vh",
            height:"4vh",
            width:"4vh",
        },
        detailHeader: {
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
        },
        backArrow: {
            width: "7vh",
            height:"7vh",
        },
        backArrowOver: {
            backgroundColor: theme.primary,
            cursor: "pointer"
        },
    }

    const handleBackMouseOver = () => {
        setBackMouseOver(true);
    }

    const handleBackMouseLeave = () => {
        setBackMouseOver(false);
    }

    const handleBackClick = () => {
        screenNumCallback(0);
    }


    return (
        <div style={styles.detailHeader}>
            <img src={backArrow} alt="backImg" style={backMouseOver ? {...styles.backArrow, ...styles.backArrowOver} : 
            styles.backArrow} onMouseOver={handleBackMouseOver} onMouseLeave={handleBackMouseLeave} 
            onClick={handleBackClick} />
            <div style={{display:"flex", flexDirection:"row",  alignItems:"center", marginRight:"2vh"}} >
                <a href={state.currentCollection?.website} style={styles.socialIcon} target="_blank" ><svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg></a>
                <a href={state.currentCollection?.twitter} style={styles.socialIcon} target="_blank" ><svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
                <a href={state.currentCollection?.discord} style={{...styles.socialIcon,width:"4.7vh"}} target="_blank" ><svg stroke="currentColor" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg></a>
            </div>
        </div>
    )

}

const FooterButtons = ({offsetCount, setOffsetCount}) => {
    const [backArrowHover, setBackArrowHover] = useState(false);
    const [nextArrowHover, setNextArrowHover] = useState(false);
    const [state, dispatch] = ContextValue();

    const styles = {
        moveArrow: {
            width:"7vh",
            height:"7vh",
        },
        moveArrowHover: {
            backgroundColor: theme.primary,
            cursor: "pointer"
        }
    }

    const handleMoveBackClick = () => {
        setOffsetCount(offsetCount-1);
    }

    const handleMoveNextClick = () => {
        setOffsetCount(offsetCount+1);
    }
    

    return (
    <div style={{marginTop:"5vh", marginBottom:"2vh",}} >
        <img src={backArrow} alt="back" style={backArrowHover ? {...styles.moveArrow, ...styles.moveArrowHover, marginRight:"1vw"} : {...styles.moveArrow, marginRight:"1vw"}} 
        onMouseOver={()=>{setBackArrowHover(true)}} onMouseLeave={()=>{setBackArrowHover(false)}} 
        onClick={offsetCount===0 ? null : handleMoveBackClick} />
        <img src={nextArrow} alt="next" style={nextArrowHover ? {...styles.moveArrow, ...styles.moveArrowHover} : styles.moveArrow} 
        onMouseOver={()=>{setNextArrowHover(true)}} onMouseLeave={()=>{setNextArrowHover(false)}} 
        onClick={(offsetCount*20) >= state.currentCollection.listedCount ? null : handleMoveNextClick}/>
    </div>
    )

}


const CollectionDetails2 = ({screenNumCallback}) => {
    const [state, dispatch] = ContextValue();
    const [offsetCount, setOffsetCount] = useState(0);
    const [selectValue, setSelectValue] = useState("price-incerasing");

    const handleSelectChange = (newValue) => {
        setSelectValue(newValue);
    }

    
    //each time next button is clicked, fetch collection details again
    //check if (20*offset) < listed, if so button is not disabled,
    //else button is disabled 

    //back button should be disabled if offset is 0

    
    const getCollectionDetails = () => {
        fetchCollectionDetails(state.currentCollection.symbol).then(res=>{
            dispatch({
                type: types.FETCH_SINGLE,
                payload: {...state.currentCollection, ...res.data}
            });
        }).catch(err=>{
            console.log(err);
        });

        fetchCollectionListings(state.currentCollection.symbol, offsetCount*20).then(res=>{
            //sort response then dispatch
            res.data.sort((a,b)=> {return a.price - b.price});
            dispatch({
                type:types.FETCH_LISTINGS,
                payload: res.data
            });

            let tokenAddressList = [];
            for(let i=0;i<res.data.length;i++){
                tokenAddressList.push(res.data[i].tokenAddress);
            }
            fetchItemDetails(tokenAddressList).then(spread((...responses) => {
                dispatch({
                    type: types.FETCH_ITEM_DETAILS,
                    payload: responses
                })
            })).catch(errors => {
            console.log(errors);
            });
            
            
        }).catch(err=>{
            console.log(err);
        });

    }

    useEffect(getCollectionDetails, [offsetCount]);

    const handleRefreshClick = () => {
        getCollectionDetails();
    }


    const styles = {
        collectionProfile: {
            display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center",
            fontSize:20, padding:"2vh 0vh", borderBottom:`2px solid ${theme.primary}`,            
        },
        collectionAvatar: {
            width: "12vh",
            height: "12vh",
            borderRadius: "10vh",
            border: `4px solid ${theme.primary}`
        },
        infoItem: {
            display:"flex", flexDirection:"column", backgroundColor:"#282c34", padding:"2vh", borderRadius:"2vh"
        },
        
    }



    return (
        //if still old then return loading else, retrn new
        <div style={{padding:"0vh 2vh"}}>
            <Header screenNumCallback={screenNumCallback} />
            <div style={styles.collectionProfile} >
                <img src={state.currentCollection?.image}  alt={state.currentCollection?.name} style={styles.collectionAvatar}/>
                <div style={{width:"20vw", textAlign:"start"}}>
                    <span style={{marginTop:"3.5vh", fontSize:27}} >
                        {typeof state.currentCollection.name !== 'undefined' ? 
                        state.currentCollection.name : "Magic Eden Error"
                        }
                    </span>
                </div>
                <div style={styles.infoItem} >
                    <span style={{marginBottom:"1vh"}}>
                        Floor Price
                    </span>
                    <span>
                        {typeof state.currentCollection.floorPrice !== 'undefined' ? (state.currentCollection.floorPrice/1000000000).toFixed(2) : "None"} ◎
                    </span>
                </div>
                <div style={styles.infoItem}>
                    <span style={{marginBottom:"1vh"}}>
                        Volume All
                    </span>
                    <span>
                        {typeof state.currentCollection.volumeAll !== 'undefined' ? (state.currentCollection.volumeAll/1000000000).toFixed(2) : "None"} ◎
                    </span>
                </div>
                <div style={styles.infoItem}>
                    <span style={{marginBottom:"1vh"}}>
                        Total Listed
                    </span>
                    <span>
                        {typeof state.currentCollection.listedCount !== 'undefined' ? state.currentCollection.listedCount : "None"}
                    </span>
                </div>
            </div>
            <div style={{borderBottom:`2px solid ${theme.primary}`, display:"flex",
                flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"1vh 0vh",
                marginBottom:"4vh"}}>
                <div id="refresh-wrapper" onClick={handleRefreshClick} >
                    <svg style={{margin:"1vh"}} xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                </div>
                <div style={{fontSize:20}}>
                    <div className="custom-select" >
                        <label>Sort By:</label>
                        <select style={{padding: "1vh 0vh", borderRadius:"1vh", backgroundColor:"#000000",
                            color:"white", borderColor:`${theme.primary}`}} className="standard-select" 
                            onChange={(e)=>{handleSelectChange(e.target.value)}} value={selectValue}>
                            <option value="price-increasing">Price Increasing</option>
                            <option value="price-decreasing">Price Decreasing</option>
                            <option value="rarity-increasing">Rarity Increasing</option>
                            <option value="rarity-decreasing">Rarity Decreasing</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <Listings sortBy={selectValue} />
            <FooterButtons offsetCount={offsetCount} setOffsetCount={setOffsetCount} />
        </div>
    )
}


export default CollectionDetails2;