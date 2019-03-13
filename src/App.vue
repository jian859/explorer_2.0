<template>
  <div id="app" class="app">
    <HeaderBar>
    </HeaderBar>
    <router-view>
    </router-view>
    <BottomBar>
    </BottomBar>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import BottomBar from './components/BottomBar'

export default {
  components: {
    HeaderBar,
    BottomBar
  },
  created() {
    if(!sessionStorage.hasOwnProperty("chainId")){
      this.getChains();
    }
  },
  methods: {
    /**
     *  获取链ID
     **/
    getChains() {
      this.$post('/', 'getChains', [])
        .then((response) => {
          //console.log(response);
          if (response.hasOwnProperty("result")) {
            sessionStorage.setItem("chainId",response.result.list[0])
          }else {
            sessionStorage.setItem("chainId","12345")
          }
        })
        .catch((error)=>{
          console.log(error);
          sessionStorage.setItem("chainId","12345")
        })
    }
  }
}
</script>

<style lang="less">
@import "assets/css/base.less";
  .app{
    background-color: #ffffff;
  }
</style>
