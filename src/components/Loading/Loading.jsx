import logo from '../../assets/snipe-logo-alter.png';
import { fetchAllCollections } from "../../actions/collections";
import { useEffect } from "react";
import {spread} from 'axios';
import { ContextValue } from "../../context/Context";
import types from "../../actions/types";

import './loading.css';



const Loading = () => {
    const dispatch = ContextValue()[1];

    const getAllCollections = () => {
        fetchAllCollections().then(spread((...responses) => {
            dispatch({
                type:types.FETCH_ALL,
                payload: responses
            });
        })).catch(errors => {
        console.log(errors);
        });
    }

    useEffect(()=>{
        getAllCollections();
    });

    const styles = {
        mainDiv: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    }
    
    
    return (
        <div style={styles.mainDiv}>
            <div id="logo-wrapper">
                <img src={logo} alt="image1" style={{width:"60vh", height:"40vh",
                borderRadius: "5vh", zIndex:4
                }} />
            </div>
        </div>
    )
}

export default Loading;