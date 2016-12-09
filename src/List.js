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
    var node = new Node(data, null)
    if((pos===0)||(head===null)){
      node.next = head
      return node
    }
    head.next = this.insertNth(head.next, data, pos-1)
    return head
  }
  swapLastTwo(){
    if(this.next.next.next === null){
      var temp = this.next.next
      this.next.next.next = this.next
      this.next.next = null
      this.next = temp
    }
    else this.head.swapLastTwo()
  }
  swapPairs(head){
    if(head===null||head.next===null) return head
    else{
        var newHead = head.next
        head.next = this.swapPairs(head.next.next)
        newHead.next = head
        return newHead
    }
  }
  reverse(head){
    if(head === null || head.next===null) return head
    let remaining = this.reverse(head.next)
    head.next.next = head
    head.next = null
    return remaining
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
    console.log('list, ', pos)
    if(!this.head) this.head = new Node(data, this.head)
    this.head = this.head.insertNth(this.head, data, pos)
  }
  swapFirst(){
    if(this.head){
      var temp = this.head.next
      var rem = temp.next
      temp.next = this.head
      this.head.next = rem
      this.head = temp
    }
  }
  swapLastTwo(){
    if(!this.head || !this.head.next) return
    if(this.head.next.next === null){
      var temp = this.head.next
      this.head.next.next = this.head
      this.head.next = null
      this.head = temp
    }
    else this.head.swapLastTwo()
  }
  swapPairs(){
    if(!this.head) return
    this.head = this.head.swapPairs(this.head)
  }
  reverse(){
    if(!this.head) return
    this.head = this.head.reverse(this.head)
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