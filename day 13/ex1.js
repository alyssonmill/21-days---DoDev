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

    printDetails(){
        console.log("Details about my PC:");
        console.log(`Type: ${this.type}`);
        console.log(`Processor: ${this.processor}`);
        console.log(`Video: ${this.video}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`Memory Ram: ${this.memoryRam}`);
        console.log(`SSD: ${this.ssd}`);
    }
}

const computer = new myComputer("laptop","Ryzen 5","Integrat", 500, 32,"True");
computer.printDetails();





