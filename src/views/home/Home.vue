<template>
  <div id='home'>
    <!-- 顶部导航栏 -->
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper></swiper>
    </div>
    <!-- 推荐展示 -->
    <recommend-view :recommends='recommends'></recommend-view>
    <!-- 每周推荐 -->
    <week-fashion></week-fashion>
    <!-- 分类标签 -->
    <tab-control  :titles="['流行', '新款', '精选']" ></tab-control>
  

    <ul>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
      <li>..</li>
    </ul>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/tabControl'

import {getHomeMultidata} from '@/network/home'

import swiper from '@/views/home/homeComps/homeSwiper'
import RecommendView from '@/views/home/homeComps/recommendView';
import WeekFashion from '../home/homeComps/weekFashion'

export default {
  name:'Home',
  components:{
    NavBar,
    TabControl,
    swiper,
    RecommendView,
    // 这里注册的名字就是上面组件的名字但是NavBar要写成nav-bar，不支持大写
    WeekFashion,
    
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  methods: {

  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      // res.banner是请求回来的轮播图数据，保存在data的banners中
      // banners用来保存对象否则当函数执行完毕，res会被垃圾处理机制处理
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
 

<style scoped>
  .home-bar{
    background-color:  var(--color-tint);
    /* 使用base.css中定义的变量 */
    color: white;

    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
  }
  #home{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>