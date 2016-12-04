class Node{
	constructor(data){
  	this.data = data
    this.next = null
  }
  print(head){
  	if(head){
    	console.log(head.data)
      this.print(head.next)
    }
  }
  size(){
  	if(!this.next){
    	return 1
    }
    else{
    	return 1 + this.next.size()
    }
  }
}

class List{
	constructor(){
  	this.head = null
  }
  push(data){
  	if(!this.head) this.head = new Node(data, null)
    else {
    		let node = new Node(data, this.head)
        node.next = this.head
        this.head = node
    }
  }
  print(){
  	this.head ? this.head.print(this.head) : null
  }
  size(){
  	if(!this.head){
    	return 0
    }
    else{
    	return this.head.size()
    }
  }
}



var ll = new List()
export default ll