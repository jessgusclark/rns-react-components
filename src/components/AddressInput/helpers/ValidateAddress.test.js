import Web3 from "web3";
import { provider } from "../../../web3Provider";

import ValidateAddress from './ValidateAddress';


describe('test ValidateAddress helper', () => {

    it('test has access to web3', () => {
        const web3 = new Web3(provider());
        expect(web3).toBeDefined();
    });

    it('returns true with ethereum address', () => {
        const address = "0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A";
        const result = ValidateAddress.isValid(address);
        expect(result).toBeTruthy();
    })

    it('returns false with string as the input', () => {
        const result = ValidateAddress.isValid("Hello");
        expect(result).toBeFalsy();
    })

})