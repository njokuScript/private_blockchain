class Block {
    constructor (data) {
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousblockhash = ""
    }
}

let blockInstance = new Block([1,2,3]);

console.log(blockInstance)