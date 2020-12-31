<template>
  <div id="add">
    <audio :src="songUrl"></audio>
    <div
      class="bgc"
      :style="{ 'background-image': 'url(' + imgUrl + ')' }"
    ></div>
    <div class="main">
      <div class="topfloat"></div>
      <div class="mainbox"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      imgUrl: null,
      songUrl: null,
      nickName: null,
      name: null,
      lock: false,
    }
  },
  created() {
    // 获取歌曲地址
    this.songUrl =
      'https://music.163.com/song/media/outer/url?id=' +
      this.$route.query.id +
      '.mp3'
    // 获取背景图片地址
    this.imgUrl = this.$route.query.picUrl
    // 歌曲名称
    this.name = this.$route.query.name
    // 作者
    this.nickName = this.$route.query.nickName
  },
}
</script>
<style lang="less" scoped>
#add {
  height: 100%;
  height: 700px;
  // position: relative;
  .bgc {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    filter: blur(30px);
    // position: absolute;
    position: fixed;
    z-index: -1;
  }
}
.main {
  width: 100%;
  height: 758px;
  position: relative;
  .topfloat {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100px;
    height: 140px;
    background: url(../assets/erji.png) no-repeat;
    // background-color: #fff;
    background-size: contain;
  }
  .mainbox {
    width: 300px;
    height: 300px;
    background-color: #000;
    border-radius: 50%;
    border: 10px solid rgba(0, 0, 0, 0.1);
    color: red;
  }
}
</style>
