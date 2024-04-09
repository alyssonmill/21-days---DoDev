class myComputer {
    type
    processor
    video
    storage
    memoryRam
    ssd
    print

    constructor(type, processor, video, storage, memoryRam, ssd){
        this.type = type;
        this.processor = processor;
        this.video = video;
        this.storage = storage;
        this.memoryRam = memoryRam;
        this.ssd = ssd;
    }
}

let computer = new myComputer("laptop","Ryzen 5","Integrat","500 gb","32 gb","True");
let print = console.log(computer)
myComputer.print = print;





