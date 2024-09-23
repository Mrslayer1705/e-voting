import { ethers } from 'ethers';

// Connect to the Ethereum network
async function connectToContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const abi = [ /* Your contract ABI */ ];

    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
}
