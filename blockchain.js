const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, data, previousHash = "") {
        this.index = index;
        this.batchId = data.batchId;
        this.actor = data.actor;
        this.status = data.status;
        this.expiryDate = data.expiryDate || null;
        this.timestamp = data.timestamp;           
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(
            this.index +
            this.batchId +
            this.actor +
            this.status +
            this.expiryDate +
            this.timestamp +
            this.previousHash
        ).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return {
            index: 0,
            batchId: "GENESIS",
            actor: "SYSTEM",
            status: "INITIAL",
            expiryDate: null, 
            timestamp: new Date().toISOString(),
            previousHash: "0",
            hash: "0"
        };
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    calculateHash(block) {
        return SHA256(
            block.index +
            block.batchId +
            block.actor +
            block.status +
            block.expiryDate +
            block.timestamp +
            block.previousHash
        ).toString();
    }

    
    addBlock(data) {
        const newBlock = {
            index: this.chain.length,
            batchId: data.batchId,
            actor: data.actor,
            status: data.status,
            expiryDate: data.expiryDate || null, 
            timestamp: data.timestamp,           
            previousHash: this.getLatestBlock().hash
        };

        newBlock.hash = this.calculateHash(newBlock);

        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;