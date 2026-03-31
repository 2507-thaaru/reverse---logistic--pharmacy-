const express = require("express");
const cors = require("cors");
const Blockchain = require("./blockchain");

//  NEW: Web3 + IPFS integration
const { updateOnBlockchain } = require("./web3");
const { uploadData } = require("./ipfs");

const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("frontend"));

let pharmaChain = new Blockchain();

/* LOAD SAVED DATA IF EXISTS */
if (fs.existsSync("chain.json")) {
    const data = JSON.parse(fs.readFileSync("chain.json", "utf-8"));
    pharmaChain.chain = data;
}


app.post("/update", async (req, res) => {
    try {
        const { batchId, actor, status } = req.body;

        // 1. Add to local blockchain (your original logic)
        pharmaChain.addBlock(batchId, actor, status);

        // 2. Save locally
        fs.writeFileSync("chain.json", JSON.stringify(pharmaChain.chain, null, 2));

        //  3. Upload to IPFS (simulated)
        const cid = await uploadData({ batchId, actor, status });

        //  4. Send to Ethereum (simulated Web3)
        await updateOnBlockchain(batchId, status);

        res.json({
            message: "Block Added + Synced to Web3 & IPFS",
            ipfsCID: cid,
            chain: pharmaChain.chain
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});



app.get("/chain", (req, res) => {
    res.json(pharmaChain.chain);
});

app.post("/reset", (req, res) => {
    pharmaChain.chain = [pharmaChain.createGenesisBlock()];
    fs.writeFileSync("chain.json", JSON.stringify(pharmaChain.chain, null, 2));
    res.json({ message: "Blockchain reset" });
});

app.get("/", (req, res) => {
    res.send("Pharma Reverse Logistics Tracker Backend is Running!");
});

/* ============================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});