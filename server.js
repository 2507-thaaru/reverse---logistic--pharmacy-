const express = require("express");
const cors = require("cors");
const Blockchain = require("./blockchain");

// ✅ Web3 + IPFS
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

/* ===================================== */
/* 🚀 UPDATED /update WITH FULL FEATURES */
/* ===================================== */

app.post("/update", async (req, res) => {
    try {
        const { batchId, actor, status, expiryDate } = req.body;

        // ✅ Define correct workflow
        const validFlow = ["expired", "collected", "verified", "destroyed"];

        // ✅ Get history of this batch
        const batchHistory = pharmaChain.chain.filter(
            block => block.batchId === batchId
        );

        let lastStatus = null;

        if (batchHistory.length > 0) {
            lastStatus = batchHistory[batchHistory.length - 1].status;
        }

        // ✅ Validate workflow order
        if (lastStatus) {
            const currentIndex = validFlow.indexOf(status);
            const lastIndex = validFlow.indexOf(lastStatus);

            if (currentIndex !== lastIndex + 1) {
                return res.status(400).json({
                    error: `Invalid workflow. Expected next step: ${validFlow[lastIndex + 1]}`
                });
            }
        }

        // ✅ Add timestamp
        const timestamp = new Date().toISOString();

        // ✅ Add block (UPDATED STRUCTURE)
        pharmaChain.addBlock({
            batchId,
            actor,
            status,
            expiryDate,
            timestamp
        });

        // ✅ Save locally
        fs.writeFileSync("chain.json", JSON.stringify(pharmaChain.chain, null, 2));

        // ✅ Simulated IPFS + Web3
        await uploadData({ batchId, actor, status, expiryDate, timestamp });
        await updateOnBlockchain(batchId, status);

        res.json({
            message: "Valid update added",
            data: { batchId, actor, status, expiryDate, timestamp }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

/* ============================= */
/* EXISTING ROUTES */
/* ============================= */

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