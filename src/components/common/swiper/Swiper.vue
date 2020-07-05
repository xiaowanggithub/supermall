<template>
     <div class="swiper">
      <van-swipe :autoplay="5000" indicator-color="#fff">
        <van-swipe-item v-for="(item, index) in imageList" :key="index">
          <a :href="item.link">
            <!-- 使用变量里的属性要加','绑定数据 -->
            <img :src="item.image">
          </a>
          
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
// 要记得引入vant的样式
import {getHomeMultidata} from '@/network/home'


Vue.use(Swipe);
Vue.use(SwipeItem);
// import Icons from "@/components/home-components/Icon.vue";
export default {
  name: 'swiper',
  data () {
    return {
    imageList: [],
    }
  },
  components: {
  },
  methods: {
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log('--------------------');
      console.log(res);
      
      for(var i=0;i<res.data.banner.list.length;i++){
        // console.log(res.data.banner.list[i].image);
        this.imageList.push(res.data.banner.list[i]);
        // 直接赋值不是响应式数据，push是响应式数据
      }
      
      
      // res.banner是请求回来的轮播图数据，保存在data的banners中
      // banners用来保存对象否则当函数执行完毕，res会被垃圾处理机制处理
     
    })
  }
}

</script>

<style scoped>
.swiper .van-swipe-item {
  height: 10rem;
  width: 100%;
  line-height: 50px;
  text-align: center;
  background-color: #39a9ed;
}
img{
  width: 100%;
  height: 100%;
}
</style>
