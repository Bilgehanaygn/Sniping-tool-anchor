import axios from 'axios';


export const fetchAllCollections = () => {

    let requests = [];
    for(let i=0;i<15;i++){
        requests.push(axios.get(`https://api-devnet.magiceden.dev/v2/collections?offset=${i*500}&limit=500`));
    }

    return axios.all(requests);

}


export const fetchCollectionDetails = (symbol) => {
    
    return axios.get(`https://api-devnet.magiceden.dev/v2/collections/${symbol}/stats`);

}


export const fetchCollectionListings = (symbol, offset) => {

    return axios.get(`https://api-devnet.magiceden.dev/v2/collections/${symbol}/listings?offset=${offset}&limit=20`)

}


export const fetchItemDetails = (tokenAddressList) => {

    let requests = [];
    for (let i of tokenAddressList){
        requests.push(axios.get(`https://api.all.art/v1/solana/${i}`));
    }

    return axios.all(requests);

}
