import { useState } from "react";
import { ContextValue } from "../../../context/Context";
import CollectionDetails from './CollectionDetails2';
import types from "../../../actions/types";
import theme from "../../../theme/theme";
import './middle-main.css';



const Item = (props) => {
    const [mouseOver, setMouseOver] = useState(false);
    
    const styles= {
        itemWrapper: {
            fontSize: 25,
            display:"flex",
            flexDirection:"row",
            justifyContent:"start",
            alignItems:"center",
            marginBottom: "2vh",
            padding: "1vh 0vh 1vh 5%",
        },
        itemWrapperHover: {
            backgroundColor:`${theme.primary}`,
            cursor: "pointer"
        },
        itemImage: {
            width: "7vh",
            height: "7vh",
            marginRight: "5vh",
            borderRadius: "2vh"
        }
    };

    return (
        <div style={mouseOver ? {...styles.itemWrapper,...styles.itemWrapperHover}: styles.itemWrapper} 
            onMouseOver={()=>{setMouseOver(true)}} onMouseLeave={()=>{setMouseOver(false)}}>
            <img src={props.element.image} alt={props.element.name + " image"} style={styles.itemImage}/>
            {props.element.name}
        </div>
    )

}


const MiddleMain = () => {
    const [state, dispatch] = ContextValue();
    const [searchItem, setSearchItem] = useState("");
    const [screen, setScreen] = useState(0);
    

    const handleChange = (e) => {
        setSearchItem(e.target.value);
    }

    const handleSelect = (element) => {
        dispatch({
            type:types.FETCH_SINGLE,
            payload: element
        });
        setScreen(1);
    }


    const styles = {
        mainDiv: {
            height:"85vh", width:"64vw", backgroundColor:"#282c34", color:"white",
            overflowY:"scroll", textAlign:"center", backgroundColor:"black", marginTop:"2vh",

        },
        searchInput: {
            width:"20vw",
            height:"5vh",
            border: "2px solid white",
            borderRadius: "10px",
            marginTop:"5vh",
            fontSize: 20
        },
    }

    return (
        <div style={styles.mainDiv}>
            {
                screen === 1 ? <CollectionDetails screenNumCallback={setScreen} /> : 
                <>
                    <input placeholder="Search Collections" onChange={handleChange} style={styles.searchInput} />
                    <div style={{marginTop:"10vh"}}>
                        {
                            searchItem.length < 3 ? null : 
                            state.allCollections.filter(collection=>{
                                return collection.name ? collection.name.toLowerCase().includes(searchItem.toLowerCase())
                            : null}).map((element, index)=>{
                                return (
                                    <div key={index} onClick={()=>{handleSelect(element)}} >
                                        <Item element={element} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }            
        </div>
    )

}

export default MiddleMain;
