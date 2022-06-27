import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount, getAssociatedTokenAddress} from '@solana/spl-token';
import * as ed25519 from 'ed25519-hd-key';
import * as bip39 from 'bip39';
import { PublicKey, Transaction, Keypair, Connection, clusterApiUrl, 
    sendAndConfirmTransaction, sendAndConfirmRawTransaction, LAMPORTS_PER_SOL, Signer} from '@solana/web3.js';
import types from "../../../actions/types";
import { ContextValue } from "../../../context/Context";
import theme from "../../../theme/theme";
import { sendBuyInstruction } from '../../../actions/instructions';
import './rightmain.css';
//import * as anchor from '@project-serum/anchor';
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet';



const CartItem = ({itemDetails, handleDeleteClick}) => {

    const styles = {
        itemWrapper: {
            padding:"1vh", margin:"1vh", display:"flex", flexDirection:"row",
            border:`2px solid ${theme.primary}`, borderRadius:"2vh", justifyContent:"space-between"
        },
        itemImage: {
            width:"10vh", height:"10vh", marginRight:"1vw", borderRadius:"1vh",
            
        }
    }

    return (
        <div style={styles.itemWrapper}>
            <div style={{display:"flex", flexDirection:"row"}}>
                <img src={itemDetails.extra.img} alt="rnd-img" style={styles.itemImage} />
                <div style={{fontSize:"17px", display:"flex", flexDirection:"column", 
                justifyContent:"space-between", padding:"0.2vh 0vh"}}>
                    <div>{itemDetails.Title}</div>
                    <div>⍜ {itemDetails?.rarity?.moonrank === undefined ? "N/A" : itemDetails.rarity.moonrank.rank}</div>
                    <div>{itemDetails.price} ◎</div>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div id="trash-icon" onClick={()=>{handleDeleteClick(itemDetails)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}


const RightMain = () => {
    const [state, dispatch] = ContextValue();
    const item = state.basket[0];
    //const connection = new anchor.web3.Connection(anchor.web3.clusterApiUrl('mainnet-beta'));
    const connection = new Connection(clusterApiUrl('devnet'));

    window.Buffer = window.Buffer || require("buffer").Buffer;
    
    let keywords = "embark around material sign planet junk exit poem mail grit excite leisure";
    const seed = bip39.mnemonicToSeedSync(keywords);
    const derivedSeed = ed25519.derivePath("m/44'/501'/0'/0'", seed.toString('hex')).key;
    const keyPair = Keypair.fromSeed(derivedSeed); 
    

    //const wallet = new NodeWallet(keyPair);


    const handleBuyAllClick = async () => {


        //get or create associated token account
        const ata = await getOrCreateAssociatedTokenAccount(connection, keyPair, 
            new PublicKey(item.tokenMint), keyPair.publicKey, false, 'confirmed');

        console.log("Associated Token Account: ", ata.address.toString(), "\nAta with other: ", 
        (await getAssociatedTokenAddress(new PublicKey(item.tokenMint), keyPair.publicKey)).toString());


        const sellerAta = await getAssociatedTokenAddress(new PublicKey(item.tokenMint), new PublicKey(item.seller));

        console.log(sellerAta.toBase58());

        console.log(item);

        //send buy request to Magic Eden
        const res = await sendBuyInstruction(keyPair.publicKey.toBase58(), item.seller, item.auctionHouse, item.tokenMint, 
        item.tokenAddress, item.price);

        console.log(res);

        //Magic eden returns txn
        const txn = Transaction.from(res.data.txSigned.data);

        console.log("Transaction before signing: ", txn);

        //sign the txn
        txn.partialSign(keyPair);
        //wallet.signTransaction(txn);

        console.log("Transaction after signing: ", txn);


        //send to chain
        //const response = await anchor.web3.sendAndConfirmRawTransaction(connection, txn.serialize());
        const response = await sendAndConfirmRawTransaction(connection, txn.serialize(), {skipPreflight: true, });
        
        //response = ERROR 0xbc4: Account not initialized error.

    }


    

    const handleDeleteClick = (item) => {
        let index = state.basket.indexOf(item);
        if (index !== -1) {
            dispatch({
                type: types.UPDATE_BASKET,
                payload: index
            });
        }
    }

    const styles = {
        mainDiv: {
            height:"85vh", width:"19vw", backgroundColor:"#282c34", color:"white", borderRadius:"2vh",
            marginTop:"2vh", display:"flex", flexDirection:"column", 
            justifyContent:"space-between"
        },
        header: {
            fontWeight:"bold",padding:"2vh", fontSize:30, borderBottom:`2px solid ${theme.primary}`,
            marginBottom:"2vh"
        }
    }

    return (
        <div style={styles.mainDiv}>
            <div style={{overflowY:"scroll"}}>
                <div style={styles.header}>
                    <svg style={{margin:"0vw 1vw"}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    My Cart
                </div>
                <div >
                    {
                        state.basket.map((element,index)=>{
                            return <CartItem itemDetails={element} key={index} handleDeleteClick={handleDeleteClick} />
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{borderTop:`2px solid ${theme.primary}`, borderBottom:`2px solid ${theme.primary}`,
                    fontSize:25, margin:"2vh", padding:"0.5vh"}}>
                    Cart Total: {state.basketTotal} ◎
                </div>
                <div id="buy-button" onClick={handleBuyAllClick} >
                    Buy All
                </div>
            </div>
            
        </div>
    )


}


export default RightMain;