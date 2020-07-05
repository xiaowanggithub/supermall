<template>

    <div class="tab-bar-item" @click='itemClick'>
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-action'></slot></div>
      <div :style="activeStyle"><slot name='item-text'></slot></div>
      <!-- 这里的v-if如果写在slot中是不起效的。因为slot整个标签会被替换掉，用div包裹起来在div中写v-if是不错的选择 -->
  </div>


</template>

<script>
export default {
  name:'TabBarItem',
  data() {
    return {
      // isActive:true
    }
  },

  props:{
    path:String,
    activeColor: {
        type: String,
        default: 'red'
    }
  },

  methods: {
    itemClick() {
      this.$router.push(this.path)
    },
    
  },

  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
      // 当前活动的路由的路径！=点击的path时返回-1，所以不返回-1的时候设置isActive为TRUE
      // isActive为True时显示红色图标，false显示黑色图标
    },
    activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
    },
  },
    
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;  
    /* 只有弹性容器的直接子元素是弹性元素 */
    text-align: center;
    height: 49px;
    /* background-color: blanchedalmond; */
    font-size: 14px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 25px;
    margin-top: 2px;
    vertical-align: middle;
  }





</style>