import Web3 from "web3";
import { provider } from "../../../web3Provider";

//0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A

const isValid = (addr) => {
    const web3 = new Web3(provider());
    return web3.utils.isAddress(addr);    
}

export default {isValid}