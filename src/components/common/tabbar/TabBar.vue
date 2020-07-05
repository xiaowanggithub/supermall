<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "TabBar"
  }
</script>

<style>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;

  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}

</style>

