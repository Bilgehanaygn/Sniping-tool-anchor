import { ContextValue } from "../../../context/Context";
import { useState } from "react";
import theme from "../../../theme/theme";
import types from "../../../actions/types";

const ListItem = ({itemDetails, index, checkInBasket}) => {
    const [isHover, setIsHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const [state, dispatch] = ContextValue();
    //if i click one of these items add it to context api
    //check if an item is in the context api
    //if so style would be hover style

    
    const handleItemClick = () => {
        if (state.basket.some(e => e.tokenAddress === itemDetails.tokenAddress)) {
            return;
        }
        dispatch({
            type: types.ADD_BASKET,
            payload: itemDetails
        });
    }

    const styles = {
        itemWrapper: {
            padding:"1vh", borderRadius: "7px", backgroundColor:"#282c34", maxWidth:"10vw",
            border: checkInBasket(itemDetails) ? `4px solid ${theme.gold}` : "4px solid #282c34"
        },
        itemWrapperHover: {
            cursor: "pointer", border: `4px solid ${theme.gold}`
        },
        imageStyle: {
            height:"18vh",
            width: "100%"
        },
        itemInfo: {
            display:"flex",
            justifyContent:"space-between"
        },
        buyButton: {
            margin:"2vh 0vh 1vh 0vh",
            borderRadius: "0.5vw",
            padding:"0.5vh",
            backgroundColor: theme.primary,
            color:"black",
            fontSize:20
        },
        buyButtonHover: {
            backgroundColor: `${theme.gold}`
        }
    }
    return (
        <div style={isHover ? {...styles.itemWrapper, ...styles.itemWrapperHover} : styles.itemWrapper} 
        onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}
        onClick={handleItemClick}>
            <div style={styles.imageStyle} >
                <img src={itemDetails?.extra?.img} alt="Image error" style={{width:"100%", height:"100%"}} />
            </div>
            <div style={styles.itemInfo}>
                <span>
                    {itemDetails?.Title}
                </span>
                <span>
                    ⍜ {itemDetails?.rarity?.moonrank === undefined ? "N/A" : itemDetails.rarity.moonrank.rank}
                </span>
            </div>
            <div style={{textAlign:"right", marginTop:"1vh", fontSize:18}}>
                {itemDetails?.price} ◎
            </div>
            <div style={buttonHover ? {...styles.buyButton, ...styles.buyButtonHover} : styles.buyButton} onMouseOver={()=>{setButtonHover(true)}} onMouseLeave={()=>{setButtonHover(false)}} >
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:"0.3vw"}} width="15" height="15" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="black"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Snipe
            </div>

            
        </div>
    )
}


const Listings = ({sortBy}) => {
    const [state, dispatch] = ContextValue();

    const checkInBasket = (itemDetails) => {
        if(state.basket.some(e=>e.tokenAddress===itemDetails.tokenAddress)){
            return true;
        }
        return false;
    }

    return (
        <div style={{display:"grid", columnGap:"1.5vw", rowGap:"2vh",
        gridTemplateColumns:"auto auto auto auto auto"}} >
            {
            state.currentCollectionListings?.sort((a,b)=>{
                switch (sortBy){
                    case "price-increasing":
                        return a.price - b.price;
                    case "price-decreasing":
                        return b.price - a.price;
                    case "rarity-increasing":
                        return a.rarity.moonrank.rank - b.rarity.moonrank.rank;
                    case "rarity-decreasing":
                        return b.rarity.moonrank.rank - a.rarity.moonrank.rank;
                }
                }).map((element,index)=>
            <ListItem key={index} itemDetails={element} checkInBasket={checkInBasket}
            index={index} />)
            }
        </div>
    )
}


export default Listings;