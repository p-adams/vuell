<template>
  <div id="app">
    <div>
      <h1 id="title">Vuell</h1>
      <h4>Visual Linked List Demonstration</h4>
    </div>
    <div v-if="show">
        <h2>[ Empty linked list ]</h2>
        <h4>create some nodes!</h4>
    </div>
    <input type="text"
           v-model="nodeData"
           @keyup.enter="push"
           placeholder="enter data"
           ref="p">
    <el-button type="primary" @click="push" size="mini">add</el-button>
    <el-button type="primary" @click="pushBack" size="mini">addback</el-button>
     <el-button type="primary" @click="rf" size="large">remove from front</el-button>
    <div v-if="!show">
      {{size}}
     <ul>
        head ->
          <li v-for="node in nodes" :class="{node: notEmpty}">
            {{node === null ? 'null' : node}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from './List.js'
import flatten from 'flat'

export default {
  name: 'app',
  mounted(){
    this.$refs.p.focus()
  },
  data () {
    return {
      list: List,
      nodeData: ''
    }
  },
  methods:{
    push(){
      List.push(this.nodeData)
      this.$refs.p.focus()
      this.nodeData = ''
    },
    pushBack(){
      List.pushBack(this.nodeData)
      this.$refs.p.focus()
      this.nodeData = ''
    },
    rf(){
      List.pop()
    }
  },
  computed:{
    size(){
      return List.size()
    },
    nodes(){
      return flatten(List)
    },
    show(){
        if(List.size()===0) return true
        else return false
    },
    notEmpty(){
      if(List.size() > 0) return true
      else return false
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
.meow{
  background: red;
}
.node{
  background: #3AB882;
  padding: 5px;
  width: 75px;
  height: 75px;
  margin: 20px;
  line-height: 75px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
}

</style>
