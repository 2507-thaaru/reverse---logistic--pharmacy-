const { Web3 } = require("web3");

// Connect to Ethereum test network (Sepolia)
const web3 = new Web3("https://sepolia.infura.io/v3/demo");

// Dummy smart contract (for simulation/demo)
const contract = {
    methods: {
        updateLocation: (id, status) => ({
            send: async ({ from }) => {
                console.log("Web3 Blockchain update:", id, status);
                return true;
            }
        })
    }
};

// Function to simulate sending data to blockchain
async function updateOnBlockchain(batchId, status) {
    return await contract.methods
        .updateLocation(batchId, status)
        .send({ from: "0xDemoAccount" });
}

module.exports = { updateOnBlockchain };