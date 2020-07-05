<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key='index' class="tab-control-item"
    :class="{active: index ===currentIndex}"
    @click="itemClick(index)"
    >
    <!-- 对象语法绑定class  属性名：true/false -->
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      defult(){
        return[]
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    }
  },
}
</script>
  
<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 5px;
    
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: solid 2px var( --color-tint);
  }
</style>