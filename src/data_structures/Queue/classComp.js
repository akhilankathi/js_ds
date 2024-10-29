class QueueClassComp {
    constructor(){
        this.queue = []
    }
    push(param){
        this.queue.push(param)
    }
    shift(){
        this.queue.shift()
    }
    size(){
      return  this.queue.length
    }
    peak(){
        return this.queue[this.queue.length -1]
    }
    isEmpty(){
        return this.queue.length  === 0
    }
    allelemets(){
        return this.queue
    }
}

const queueComp = new QueueClassComp()

queueComp.push("akhil")
queueComp.push("ajay")
queueComp.push("harish")
queueComp.push("asjnhvb")
console.log(queueComp.peak())
queueComp.shift()
console.log(queueComp.peak())
console.log(queueComp.size())
console.log(queueComp.allelemets())