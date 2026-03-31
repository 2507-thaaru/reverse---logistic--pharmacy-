

async function uploadData(data) {
    console.log("Simulated IPFS upload:", data);
    return "CID_FAKE_123";
}

module.exports = { uploadData };