<template>
  <div :id="id" :class="{addRecipeTyping: true}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "typing-effect-component",
  props: ['id'],
}
</script>

<style lang="scss">
//定义起始位置为宽度0.
@keyframes typing {
  from {
    width: 0;
  }
}

// 闪烁光标
@keyframes caret {
  50% {
    border-color: coral;
  }
}

// 给typing class对象添加样式
.addRecipeTyping {
  width: 30ch;
  font-family: 'Courier New';
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.2em solid transparent;
  animation: typing 2s steps(30), caret 1s steps(1) infinite;
}
</style>