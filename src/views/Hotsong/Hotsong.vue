<template>
  <div id="add">
    <!-- <button @click="add">数据</button> -->
    <div class="banner">
      <img src="../../assets/hotbnner.jpg" alt="" />
      <div class="left"></div>
      <div class="center"></div>
    </div>
    <hotsongson :datalist2="datalist2"></hotsongson>
    <p @click="numss">查看更多歌单></p>
    <!-- {{ datalist2 }} -->
  </div>
</template>
<script>
import hotsongson from './hotsongson.vue'
export default {
  components: {
    hotsongson,
  },
  data() {
    return {
      datalist: [],
      datalist2: [],
      num: 20,
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    numss() {
      this.num += 20
      this.getlist()
    },
    getlist() {
      this.http.get('/playlist/detail?id=3778678').then((res) => {
        let datalist = res.data.playlist.trackIds
          .map((item) => item.id)
          .splice(0, this.num)
        console.log(datalist.join(','))
        this.http.get('/song/detail?ids=' + datalist).then((res) => {
          this.datalist2 = res.data.songs
        })
      })
    },
    //歌手名字  datalist2.ar.name   歌名datalist2.name
    getlist1() {},
    add() {
      console.log(this.datalist2)
    },
  },
}
</script>
<style lang="less" scoped>
#add {
  width: 100%;
}
.banner {
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .left {
    position: absolute;
    width: 142px;
    height: 67px;
    left: 5%;
    top: 15%;
    background: url(../../assets/index_icon.png) no-repeat -24px -30px;
    background-size: 166px 97px;
  }
  // .center {
  //   position: absolute;
  //   width: 142px;
  //   height: 60px;
  //   left: 5%;
  //   top: 35%;
  //   background-color: aqua;
  // }
}
p {
  height: 60px;
  text-align: center;
  line-height: 60px;
}
</style>
