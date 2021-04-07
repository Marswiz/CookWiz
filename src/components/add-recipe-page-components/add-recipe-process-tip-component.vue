<template>
  <div>
    <div id="btnBox">
      <button id="addItem" @click="addItem()">+</button>
      <button id="removeItem" @click="removeItem()">-</button>
    </div>
    <div id="itemsBox" @change="$emit('loadItems',{type:type ,content:itemsRes})">
      <div id="item" v-for="(item,index) in items" :key="index">
        <label :for="index">{{index+1}}. </label>
        <textarea :id="type+index" v-model="items[index]"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: ['Please input your '+this.type+'...'],
      };
    },
    props: {
      type: {
        type: String,
        require: true,
      }
    },
    emits: ['loadItems'],
    name: "add-recipe-process-tip-component",
    methods: {
      addItem(){
        this.items.push('');
      },
      removeItem(){
        if (this.items.length > 1){
          this.items.pop();
        }
      },
    },
    computed: {
      itemsRes(){
        let res = [];
        for (let i of this.items){
          if(i.trim()){
            res.push(i.trim());
          }
        }
        return res;
      },
    },
  }
</script>

<style scoped lang="scss">
  #btnBox{
    display: flex;
    align-items: center;
  }
  button {
    border: none;
    margin-right: 1em;
    margin-bottom: 1em;
    background-color: black;
    border-radius: .5em;
    font-family: 'Courier New';
    padding: 0 1em;
    height: 8vw;
    color: white;
    font-weight: bold;
    &:active{
       background-color: #a1a1a1;
       text-decoration: underline;
     }
  }

  textarea {
    border: 2px solid black;
    margin-left: 1em;
    background-color: #ddd;
    font-family: "Courier New";
    font-weight: bold;
    overflow: scroll;
    height: 50px;
    &:focus {
       outline: 2px solid black;
    }
  }
  #item {
    display: flex;
    margin-top: .2em;
    height: auto;
  }
  #item label{
    flex: 1;
  }
  #item textarea{
    flex: 10;
  }
</style>