<template>
  <div id="btnBox">
    <button id="addItem" @click="addItem()">+</button>
    <button id="removeItem" @click="removeItem()">-</button>
  </div>
  <div id="itemsBox" @change="$emit('loadItems',{type:type ,content:itemsRes})">
    <div id="item" v-for="(item,index) in items" :key="index">
      <label :for="index">{{index+1}}. </label>
      <input type="text" :id="type+index" v-model="items[index]">
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: ['defaultItem'],
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

<style scoped>
  #btnBox{
    display: flex;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background: rgba(255,100,100,0.5);
    font-size: 1.3em;
    font-weight: bold;
    width: 30px;
    height: 30px;
    color: white;
  }
</style>