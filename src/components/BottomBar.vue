<template>
  <div class="bottom bg-gray">
    <ul class="b_ul w1200">
      <li class="b_li font14 fl capitalize"><a href="https://nuls.io/home" target="_blank">{{$t('bottom.website')}}</a></li>
      <li class="b_li font14 fl"><a href="https://github.com/nuls-io" target="_blank">Github</a></li>
      <li class="b_li font14 fl capitalize"><a href="https://wallet.nuls.io/" target="_blank">{{$t('bottom.webWallet')}}</a></li>
      <li class="b_li font14 fl capitalize"><a href="https://nuls.community/" target="_blank">{{$t('bottom.community')}}</a></li>
      <li class="b_li font14 fl capitalize">{{$t('bottom.about')}}</li>
      <li class="b_li font14 fr">Copyright @2019 NULS</li>
    </ul>
  </div>
</template>

<script>
  //import {superLong, timesDecimals} from '@/api/util.js'
  export default {
    created() {
      this.getBestBlockHeader();
      this.getNodeNumber();
      this.getNULSNumber();
      //10秒循环一次数据
      setInterval(() => {
        this.getBestBlockHeader();
        this.getNodeNumber();
        this.getNULSNumber();
      }, 10000);
    },
    methods:{
      /**
       * 获取最新高度
       */
      getBestBlockHeader() {
        this.$post('/', 'getBestBlockHeader', [])
          .then((response) => {
            //console.log(response)
            if (response.hasOwnProperty("result")) {
              this.$store.commit('SET_HEIGHT', response.result.height);
            }
          })
      },

      /**
       * 获取节点数量
       */
      getNodeNumber() {
        this.$post('/', 'getConsensusNodeCount', [])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              this.$store.commit('SET_NODENUMBER', response.result);
            }
          })
      },

      /**
       * 获取NULS数量信息
       */
      getNULSNumber() {
        this.$post('/', 'getCoinInfo', [])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              this.$store.commit('SET_NULSNUMBER', response.result);
            }
          })
      },
    }
  }
</script>

<style lang="less">
  @import "./../assets/css/style";

  .bottom {
    border-top: @BD1;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 9898;
    .b_ul {
      .b_li {
        color: @Acolor4;
        line-height: 60px;
        width: auto;
        margin: 0 12px;
        text-align: center;
        @media screen and (max-width: 1000px) {
          line-height: 45px;
          margin: 0 6px;
        }
        &:first-child{
          margin-left: 0;
          @media screen and (max-width: 1000px) {
            margin: 0 4px;
          }
        }
        &:last-child {
          width: 190px;
          text-align: right;
          color: @Acolor3;
          margin-right: 0;
          @media screen and (max-width: 1000px) {
            display: none;
          }
        }
        @media screen and (max-width: 1000px) {
          font-size: 0.7rem;
        }
        a{
          cursor: pointer;

        }
      }
    }

  }

</style>
