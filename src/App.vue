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
        <div class="grid-content bg-purple">
         <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
           <el-select v-model="addVal" placeholder="Select" @change="addSel">
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
        <h4>alter linked list</h4>
        <div class="grid-content bg-purple">
           <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="swapVal" placeholder="Select" @change="swapSel">
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
       <h4>search linked list</h4>
       <div class="grid-content bg-purple">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="srcVal" placeholder="Select" @change="srcSel">
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
        <h4>remove from linked list</h4>
        <div class="grid-content bg-purple">
           <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
            <el-select v-model="remVal" @change="rmvSel" placeholder="Select">
                <el-option
                  v-for="op in remove"
                  :label="op.label"
                  :value="op.value">
                </el-option>   
              </el-select>
            <el-form-item>
              <el-form-item>
              <el-input v-if="remPos" size="small" v-model="rv" placeholder="enter data"></el-input>
              <el-input v-if="remPos" v-model.number="rp" size="small" placeholder="enter position"></el-input>
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
          {value: 'rem5', label: 'remove node by data'}
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
      rp: '',
      opr: ''
    }
  },
  methods:{
    addToLL(){
      var data = this.av
      var pos = this.ap
      if(this.opr==='addToFront'){
        List.push(data)
      }
      else if(this.opr === 'addToBack'){
        List.pushBack(data)
      }
      else{
        List.insertNth(data, pos)
      }
      this.av = ''
      this.ap = ''
    },
    addSel(){
        switch(this.addVal){
          case "add1":
            this.opr = "addToFront"
            break
          case "add2":
            this.opr = "addToBack"
            break
          case "add3":
            this.opr = "insertNth"
            break
          default:
            return
      }
    },
    swapLL(){
      if(this.opr === "swapFirst"){
          List.swapFirst()
      }
      else if(this.opr === "swapLast"){
          List.swapLastTwo()
      }
      else if(this.opr === "swapPairs"){
          List.swapPairs()
      }
      else{
          List.reverse()
      }
    },
    swapSel(){
        switch(this.swapVal){
          case "swap1":
            this.opr = "swapFirst"
            break
          case "swap2":
            this.opr = "swapLast"
            break
          case "swap3":
            this.opr = "swapPairs"
            break
          case "swap4":
            this.opr = "reverseList"
            break
          default:
            return
      }
    },
    srcLL(){
      this.searchNode = true
      if(this.opr==="countO"){
        this.srcNode = List.countO(this.sv)
      }
      else if(this.opr==="smallest"){
        this.srcNode = List.smallest()
      }
      else if(this.opr==="largest"){
        this.srcNode = List.largest()
      }
      else{
        this.srcNode = List.getNth(this.sp)
      }
    },
    srcSel(){
        switch(this.srcVal){
          case "src1":
            this.opr = "countO"
            break
          case "src2":
            this.opr = "smallest"
            break
          case "src3":
            this.opr = "largest"
            break
          case "src4":
            this.opr = "getNth"
            break
          default:
            return
        }
      },
      remLL(){
        if(this.opr==="removeFront"){
          List.removeFront()
        }
        else if(this.opr==="removeBack"){
          List.removeBack()
        }
        else if(this.opr==="removeNth"){
          List.removeNth(this.rp)
        }
        else if(this.opr==="removeDuplicates"){
          List.removeDuplicates
        }
        else{
          List.removeByData(this.rv)
        }
      },
      rmvSel(){
        switch(this.remVal){
          case "rem1":
            this.opr = "removeFront"
            break
          case "rem2":
            this.opr = "removeBack"
            break
          case "rem3":
            this.opr = "removeNth"
            break
          case "rem4":
            this.opr = "removeDuplicates"
            break
          case "rem5":
            this.opr = "removeByData"
          default:
            return
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
        return this.remVal === 'rem3'? true: false
    },
    src(){
        if(this.srcVal === 'src1' || this.srcVal === 'src4') return true
        return false
    },
    result(){
      if(this.opr==="countO"){
        return '#nodes containing ' + this.sv
      }
      else if(this.opr==="smallest"){
        return 'smallest value in linked list '
      }
      else if(this.opr==="largest"){
        return 'largest value in the linked list'
      }
      else if(this.opr==="getNth"){
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
