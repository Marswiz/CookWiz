<template>
  <div id="rating">
    <span id="stars" v-for="(rate,index) in ratingStars" :class="rate" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: "rating-component",
  props: [
      'rating',
  ],
  computed:{
    ratingStars(){
      let res = [];
      let baseNum = Math.floor(this.rating);
      if (baseNum <= 5 && baseNum >= 0){
        for(let i=0; i<baseNum; i++){
          res.push('fa fa-star');
        }
      } else if(baseNum > 5) {
        for(let i=0; i<5; i++){
          res.push('fa fa-star');
        }
      } else {
        throw Error('The rating of this recipe is lower than 0, please recheck and modify it.');
      }
      let remain = this.rating - Math.floor(this.rating);
      if (remain > 0.75){
        res.push('fa fa-star');
      } else if (remain>0.25 && remain<=0.75){
        res.push('fa fa-star-half');
      }
      return res;
    },
  },
}
</script>

<style scoped>
 #rating {
   margin: 1em 0;
   color: #ef8781;
 }
 #stars {
   margin: 0 0.2em;
   text-shadow: 0 0 4px #a1a1a1;
 }
</style>