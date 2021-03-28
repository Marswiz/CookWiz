<template>
    <h2>Ingredient</h2>
    <div id="ingredient-box">
      鸡大腿1个、葱20g、姜20g
      、盐1小勺、鱼露1大勺、花雕酒1大勺
      、清水1.5L、冰块适量
    </div>
</template>

<script>
export default {
  name: "ingredient-component"
}
</script>

<style scoped>
h2 {
  margin-top: 2em;
  letter-spacing: .15em;
}
 #ingredient-box{
   word-break: break-all;
   font-family: '华文仿宋',Serif;
   color: #757475;
   align-self: center;

 }
</style>