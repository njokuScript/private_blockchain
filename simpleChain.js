//class with constructor for block data
class Block {
    constructor (data) {
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousblockhash = ""
    }
}

//class with constructor for a new blockchain
class BlockChain {
    constructor () {
        this.chain = []
    }

    //function to add data to block
    addBlock(newBlock) { 
        this.chain.push(newBlock);
    }
}

let blockchain = new BlockChain();

blockchain.addBlock(new Block("first blockchain"))

let result = blockchain.chain;

console.log(result)