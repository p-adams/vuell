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
  pushBack(head, data){
     if(head==null){
        return new Node(data, null)
    }
    else{
        if(head.next===null){
            head.next = new Node(data, null)
        }
        else{
            this.pushBack(head.next, data)
        }
    }
    return head;
  }
  insertNth(head, data, pos){
    if(head===null || pos===0){
      var node = new Node(data, null)
      node.next = head
      return node
    }
    head.next = this.insertNth(head.next, data, pos-1)
    return head
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
  pushBack(data){
    if(!this.head) this.head = new Node(data, null)
    else this.head = this.head.pushBack(this.head, data);
  }
  insertNth(data, pos){
    if(this.head){
      this.head = this.head.insertNth(this.head, data, pos)
    }
    else this.head = new Node(data, null)
  }
  pop(){
     this.head = this.head.next
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