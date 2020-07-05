<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    // 和父组件通信都在这里面
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}

</script>
  
<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    
  }
  .recommend-item{
    flex: 1;
    /* 均等分 */
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
  .recommend-item div{
    color: var(--color-text);
  }
  

</style>