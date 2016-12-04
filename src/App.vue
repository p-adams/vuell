<template>
  <div id="app">
    {{list}}
    <div>
      <h1 id="title">Vuell</h1>
      <h4>Visual Linked List Demonstration</h4>
    </div>
    <div v-if="nodes.length === 0">
        <h2>[ Empty linked list ]</h2>
        <h4>create some nodes!</h4>
    </div>
    <input type="text"
           v-model="nodeData"
           @keyup.enter="p"
           placeholder="enter data"
           ref="p">
    <el-button type="primary" @click="p" size="mini">add</el-button>
    <el-button type="primary" @click="pushBack" size="mini">addback</el-button>
    <div v-if="nodes.length > 0">
      {{size}}
      <ul >
          <li  v-for="node in nodes">
            {{node.data}}
          </li>
      </ul>
    </div>
    {{show}}
  </div>
</template>

<script>
import List from './List.js'
export default {
  name: 'app',
  mounted(){
    this.$refs.p.focus()
  },
  updated(){

  },
  data () {
    return {
      list: List,
      nodes:[],
      nodeData: ''
    }
  },
  methods:{
    p(){
      List.push(this.nodeData)
      for(let key in this.list){
        if(this.list.hasOwnProperty(key)){
          this.nodes.push(this.list[key])
        }
      }
      this.$refs.p.focus()
      this.nodeData = ''
    },
    pushBack(){
      console.log(this.nodeData)
      List.pushBack(this.nodeData)
       for(let key in this.list){
        if(this.list.hasOwnProperty(key)){
          this.nodes.push(this.list[key])
        }
      }
      this.$refs.p.focus()
      this.nodeData = ''
    }
  },
  computed:{
    size(){
      return List.size()
    },
    show(){
      return this.nodes
    }
  }
}
</script>










<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.flex-container {
  border: 1px solid black;
  /*float: left;*/
  width: 100%;
  padding: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}


.row            { 
  -webkit-flex-direction: row; 
  flex-direction: row;
}

.row            { 
  -webkit-flex-direction: row; 
  flex-direction: row;
}

.row-reverse { 
  -webkit-flex-direction: row-reverse; 
  flex-direction: row-reverse;
}  
.row-reverse li {
  background: #3AB882;
}

.flex-item {
  background: #3AB882;
  padding: 5px;
  width: 50px;
  height: 50px;
  margin: 20px;
  line-height: 50px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
}


</style>


<!--<ul v-if="size === 1">
        <li v-for="node in ll">
          Head: <span>{{node.data}}</span>,
          Tail: <span>null</span>
        </li>
      </ul>
      <ul v-if="size > 1 && size < 3">
        <li v-for="node in ll">
          Head: <span>{{node.data}}</span>,
          Tail: <span>{{node.next.data}},</span>
          <span>{{node.next.next.data}}</span>
        </li>
      </ul>-->