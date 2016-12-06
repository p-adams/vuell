<template>
  <div id="app">
    <el-menu>
      <h1 id="title">Vuell</h1>
      <h4 id="sub">Visual Linked List Demonstration</h4>
    </el-menu>
    <h2>Choose a linked list operation</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <h4>add to linked list</h4>
        {{addVal}}
        <div class="grid-content bg-purple">
         <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
           <el-select v-model="addVal" placeholder="Select">
              <el-option
                v-for="op in add"
                :label="op.label"
                :value="op.value">
              </el-option>   
            </el-select>
           <el-form-item>
            <el-form-item>
            <el-input size="small" placeholder="enter data"></el-input>
            <el-input v-if="posDisplay" size="small" placeholder="enter position"></el-input>
            <el-button type="">Add</el-button>
            </el-form-item>
        </el-form>
      </div>
      </el-col>

      <el-col :span="6">
        <h4>alter linked list</h4>
        <div class="grid-content bg-purple">
           <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="swapVal" placeholder="Select">
                <el-option
                  v-for="op in swap"
                  :label="op.label"
                  :value="op.value">
                </el-option>   
              </el-select>
            <el-form-item>
          </el-form>
        </div>
      </el-col>

     <el-col :span="6">
       <h4>search linked list</h4>
       <div class="grid-content bg-purple">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="srcVal" placeholder="Select">
                <el-option
                  v-for="op in search"
                  :label="op.label"
                  :value="op.value">
                </el-option>   
              </el-select>
            <el-form-item>
              <el-form-item>
              <el-input size="small" placeholder="enter data"></el-input>
              <el-input v-if="posDisplay" size="small" placeholder="enter position"></el-input>
              <el-button type="">search</el-button>
              </el-form-item>
          </el-form>
       </div>
     </el-col>

      <el-col :span="6">
        <h4>remove from linked list</h4>
        <div class="grid-content bg-purple">
           <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="remVal" placeholder="Select">
                <el-option
                  v-for="op in remove"
                  :label="op.label"
                  :value="op.value">
                </el-option>   
              </el-select>
            <el-form-item>
              <el-form-item>
              <el-input size="small" placeholder="enter data"></el-input>
              <el-input v-if="posDisplay" size="small" placeholder="enter position"></el-input>
              <el-button type="">remove</el-button>
              </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <!--<input type="text"
           v-model="nodeData"
           @keyup.enter="push"
           placeholder="enter data"
           ref="p">
    <el-button type="primary" @click="push" size="mini">add</el-button>
    <el-button type="primary" @click="pushBack" size="mini">addback</el-button>
     <el-button type="primary" @click="rf" size="large">remove from front</el-button>-->
     <div v-if="show">
        <h2>[ Empty linked list ]</h2>
        <h4>create some nodes!</h4>
    </div>
    <div v-if="!show">
      {{size}}
     <ul id="list1">
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
    //this.$refs.addNodes.focus()
  },
  data () {
    return {
      list: List,
      add:[
          {value: 'add1', label: 'add node to front'},
          {value: 'add2', label: 'add node to back'},
          {value: 'add3', label: 'insert at nth position'}
        ],
      remove:[
          {value: 'rem1', label: 'remove node from front'},
          {value: 'rem2', label: 'remove node from back'},
          {value: 'rem3', label: 'remove node at nth position'},
          {value: 'rem4', label: 'remove duplicate nodes'},
        ],
      swap:[
          {value: 'swap1', label: 'swap first two nodes'},
          {value: 'swap2', label: 'swap last two nodes'},
          {value: 'swap3', label: 'swap every pair'},
          {value: 'swap4', label: 'reverse the list'},
        ],
      search:[
          {value: 'src1', label: 'count occurances of an element'},
          {value: 'src2', label: 'find smallest element'},
          {value: 'src3', label: 'find largest element'},
          {value: 'src4', label: 'find element at nth position'},
          {value: 'src5', label: 'calculate sum of elements'},
        ],
      addVal: '',
      remVal: '',
      swapVal: '',
      srcVal: '',
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
    },
    posDisplay(){
      if(this.addVal === 'add3' || this.srcVal === 'src4' || this.remVal === 'rem3') return true
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
}

h1, h2 {
  font-weight: normal;
}

#title, #sub{
  text-align: left;
  margin-left: 35px;
}

ul#list1 {
  list-style-type: none;
  padding: 0;
}

ul#list1 li {
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

  .el-row {
    margin-bottom: 20px;
    margin-top:20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 45px;
  }
  .el-input{
    margin-top: 10px;
  }

</style>
