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
  countO(head, data){
    if(!head) return 0
    if(head.data === data) return 1 + this.countO(head.next, data)
    return this.countO(head.next, data)
  }
  smallest(){
    if(!this.next) return this.data
    var smallest = this.next.smallest()
    if(smallest < this.data){
      return smallest
    }
    return this.data
  }
  largest(){
    if(!this.next) return this.data
    var largest = this.next.largest()
    if(largest > this.data){
      return largest
    }
    return this.data
  }
  getNth(head, index, start){
    if(head===null) return 0
    if(start===index){
        return head.data
    }
    else{
        start += 1
        return this.getNth(head.next, index, start)
    }
  }
  removeBack(head){
    if(head.next===null){
      head = null
      return head
    }
    this.next = this.removeBack(head.next)
    return head
  }
  removeNth(head, index){
    if(index === 0){
        head = head.next
        return head
    }
    head.next = this.removeNth(head.next, index-1)
    return head
  }
  removeDuplicates(){
     if(head.next){
        if(head.data===head.next.data){
            let next = head.next.next
            head.next = next
            this.removeDups(head)
            return head
        }
        else{
            head = head.next
            this.removeDups(head)
            return head
        }
    }
  }
  removeByData(data){
    if (data == this.data) {
		var temp = this.next;
		this.next = null;
		return temp;
	}
	else if (this.next) this.next = this.next.removeByData(data);
	return this;
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
  countO(data){
    if(this.head) return this.head.countO(this.head, data)
  }
  smallest(){
    if(!this.head) return 0
    else return this.head.smallest()
  }
  largest(){
    if(!this.head) return 0
    else return this.head.largest()
  }
  getNth(idx){
    var start = 0
    if(this.head) return this.head.getNth(this.head, idx, start)
  }
  removeFront(){
    if(!this.head) return
    this.head = this.head.next
  }
  removeBack(){
    if(!this.head) return
    this.head = this.head.removeBack(this.head)
  }
  removeNth(index){
    if(!this.head) return
    this.head = this.head.removeNth(this.head, index) 
  }
  removeDuplicates(){
    if(!this.head) return
    this.head = this.head.removeDups(this.head)
  }
  removeByData(data){
    if (this.head) this.head = this.head.removeByData(data);
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

/*var l = new List()
l.push("a")
l.push("b")
l.push("c")
console.log("getNth" , l.getNth(1))*/


var ll = new List()



export default ll