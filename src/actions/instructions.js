import axios from 'axios';

export const sendBuyInstruction = async (buyerPublicKey, sellerPublicKey, auctionHouseAddress, tokenMint, tokenAta, price) => {
    return axios.get(`https://api-devnet.magiceden.dev/v2/instructions/buy_now?buyer=${buyerPublicKey}&seller=${sellerPublicKey}&auctionHouseAddress=${auctionHouseAddress}&tokenMint=${tokenMint}&tokenATA=${tokenAta}&price=${price}`);
}

export const sellTokenInstruction = async (sellerPublicKey, auctionHouseAddress, mintAccAddress, tokenAccount, price) => {
    return axios.get(`api-devnet.magiceden.dev/v2/instructions/sell?seller=${sellerPubKey}&auctionHouseAddress=${auctionHouseAddress}&tokenMint=${mintAccAddress}&tokenAccount=${tokenAccount}&price=${price}`);
}

/* 
&buyerReferral=&sellerReferral=&buyerExpiry=&sellerExpiry=
*/

/* 

export const sendBuyInstruction = async (buyerPublicKey, sellerPublicKey, auctionHouseAddress, tokenMint, tokenAta, price) => {
    return axios.get(
        'https://api-devnet.magiceden.dev/v2/instructions/buy_now', {
            params: {
            buyer: buyerPublicKey,
            seller: sellerPublicKey,
            auctionHouseAddress: auctionHouseAddress,
            tokenMint: tokenMint,
            tokenAta: tokenAta,
            price: price,
            buyerReferral: null,
            sellerReferral: null,
            buyerExpiry: null,
            sellerExpiry: null
            }
        });
}

*/