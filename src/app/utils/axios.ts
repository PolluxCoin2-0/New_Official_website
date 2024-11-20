import axios from "axios";

export const getBlockHeight=async()=>{
    try {
        const response = await axios.get("https://node.poxscan.io/api/polluxcoinData")
        return response?.data;
    } catch (error) {
        console.log(error)
    }
}


export const getPriceChart=async()=>{
    try {
        const response = await axios.get("https://node.poxscan.io/api/getPriceChart");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}

export const getNodeStatusData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/status");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPriceData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/getPrice")
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}