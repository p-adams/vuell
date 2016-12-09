<template>
  <div id="app">
    <el-menu>
      <h1 id="title">Vuell</h1>
      <h4 id="sub">Visual Linked List Demonstration</h4>
    </el-menu>
    <h2>Choose a linked list operation</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <h5>add to linked list</h5>
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
            <el-input size="small" v-model="av" placeholder="enter data"></el-input>
            <el-input v-if="addPos" v-model="ap" size="small" placeholder="enter position"></el-input>
            <el-button type="text" @click="addToLL" :disabled="av.length===0">Add</el-button>
            </el-form-item>
        </el-form>
      </div>
      </el-col>

      <el-col :span="6">
        <h5>alter linked list</h5>
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
            <el-button type="text" @click="swapLL">swap</el-button>
          </el-form>
        </div>
      </el-col>

     <el-col :span="6">
       <h5>search linked list</h5>
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
              <el-input v-if="src" size="small"  v-model="sv" placeholder="enter data"></el-input>
              <el-input v-if="srcPos" v-model.number="sp" size="small" placeholder="enter position"></el-input>
              <el-button type="text" @click="srcLL">search</el-button>
              </el-form-item>
          </el-form>
       </div>
     </el-col>

      <el-col :span="6">
        <h5>remove from linked list</h5>
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
              <el-input v-if="remPos" size="small" v-model="rv" placeholder="enter data"></el-input>
              <el-button type="text" @click="remLL">remove</el-button>
              </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
     <div v-if="show">
        <h2>[ Empty linked list ]</h2>
        <h4>create some nodes!</h4>
    </div>
    
    <div v-if="searchNode">
        {{result}}: {{srcNode}}
    </div>

    <h6 v-show="size > 0" id="size">Linked list contains: {{size}} {{size === 1 ? 'node' : 'nodes'}}</h6>
    <div v-if="!show">
     <ul id="list1">
        <h4>head<i class="el-icon-caret-right"></i></h2>
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
          {value: 'rem4', label: 'remove duplicate nodes'},
          {value: 'rem5', label: 'remove node by data'},
          {value: 'rem6', label: 'remove all nodes'}
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
          {value: 'src4', label: 'find element at nth position'}
        ],
      addVal: '',
      remVal: '',
      swapVal: '',
      srcVal: '',
      nodeData: '',
      searchNode: false,
      srcNode: '',
      av: '',
      ap: '',
      sv: '',
      sp: '',
      rv: '',
    }
  },
  methods:{
    addToLL(){
      var data = this.av
      var pos = this.ap
      var val = this.addVal
      this.searchNode = false
      if(val === "add1"){
        List.push(data)
      }
      else if(val === 'add2'){
        List.pushBack(data)
      }
      else{
        List.insertNth(data, pos)
      }
      this.av = ''
      this.ap = ''
    },
    swapLL(){
      this.searchNode = false
      var val = this.swapVal
      if(val === "swap1"){
          List.swapFirst()
      }
      else if(val === "swap2"){
          List.swapLastTwo()
      }
      else if(val === "swap3"){
          List.swapPairs()
      }
      else{
          List.reverse()
      }
    },
    srcLL(){
      var val = this.srcVal
      this.searchNode = true
      if(val === "src1"){
        this.srcNode = List.countO(this.sv)
      }
      else if(val === "src2"){
        this.srcNode = List.smallest()
      }
      else if(val === "src3"){
        this.srcNode = List.largest()
      }
      else{
        this.srcNode = List.getNth(this.sp)
      }
      this.sv = ''
      this.sp = ''
    },
  
    remLL(){
      this.searchNode = false
      var val = this.remVal
      if(val === "rem1"){
        List.removeFront()
      }
      else if(val === "rem2"){
        List.removeBack()
      }
      else if(val === "rem4"){
        List.removeDuplicates()
      }
      else if(val === "rem5"){
        List.removeByData(this.rv)
      }
      else if(val === "rem6"){
        List.removeAll()
      }
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
    addPos(){
        return this.addVal === 'add3' ? true : false
  
    },
    srcPos(){
        return this.srcVal === 'src4' ? true: false
    },
    remPos(){
        return this.remVal === 'rem3' || this.remVal === 'rem5' ? true: false
    },
    src(){
        if(this.srcVal === 'src1' || this.srcVal === 'src4') return true
        return false
    },
    result(){
      if(this.srcVal==="src1"){
        return '#nodes containing ' + this.sv
      }
      else if(this.srcVal==="src2"){
        return 'smallest value in linked list '
      }
      else if(this.srcVal==="src3"){
        return 'largest value in the linked list'
      }
      else if(this.srcVal==="src4"){
        return 'Element an nth position is '
      }
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
#size{
  text-align: left;
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

