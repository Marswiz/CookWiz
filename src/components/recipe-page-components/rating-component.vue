<template>
  <div id="rating">
    <span v-for="(rate,index) in ratingStars" :class="rate" :key="index"></span>
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
      for(let i=0; i<Math.floor(this.rating); i++){
        res.push('fa fa-star');
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

</style>