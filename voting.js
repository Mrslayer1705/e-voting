import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const Voting = () => {
    const [candidates, setCandidates] = useState([]);
    const [account, setAccount] = useState('');
    const [loading, setLoading] = useState(true);
    const web3 = new Web3('http://localhost:8545'); // Replace with your node URL

    useEffect(() => {
        const loadBlockchainData = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

            const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with your actual contract address
            const contractABI = [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_candidateId",
                            "type": "uint256"
                        }
                    ],
                    "name": "vote",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "candidates",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "voteCount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "candidatesCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "voters",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            const candidatesCount = await contract.methods.candidatesCount().call();
            const candidatesList = [];
            for (let i = 1; i <= candidatesCount; i++) {
                const candidate = await contract.methods.candidates(i).call();
                candidatesList.push(candidate);
            }
            setCandidates(candidatesList);
            setLoading(false);
        };

        loadBlockchainData();
    }, [web3]);

    const vote = async (candidateId) => {
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        await contract.methods.vote(candidateId).send({ from: account });
        // Optionally refresh candidates or handle state updates
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Voting App</h1>
            <h2>Account: {account}</h2>
            <h3>Candidates</h3>
            <ul>
                {candidates.map((candidate) => (
                    <li key={candidate.id}>
                        {candidate.name} - Votes: {candidate.voteCount}
                        <button onClick={() => vote(candidate.id)}>Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Voting;
