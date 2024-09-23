import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('root')); // Ensure you have a div with id 'root' in your HTML

// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');

    // Request account access
    async function connectMetaMask() {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected account:', accounts[0]);
        } catch (error) {
            console.error('User denied account access:', error);
        }
    }

    // Call the function to connect
    connectMetaMask();
} else {
    console.log('Please install MetaMask!');
}
