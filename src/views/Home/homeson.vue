<template>
  <div id="add">
    <!-- 头 -->
    <button @click="add">数据</button>
    <div class="toppic">
      <img :src="datalist.playlist.coverImgUrl" alt="" width="100%" />
    </div>
    <div class="toppic2">
      <div class="pic">
        <img :src="datalist.playlist.coverImgUrl" alt="" height="100%" />
      </div>
      <p>{{ datalist.playlist.name }}</p>
      <div class="end">
        <div class="endson"></div>
        <img :src="datalist.playlist.creator.avatarUrl" alt="" width="30px" />
        <p>{{ datalist.playlist.creator.nickname }}</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="main">
      <p class="p1">歌曲列表</p>
      <!-- {{ datalist.playlist.tracks }} -->
      <div class="maindiv">
        <ul class="ul">
          <li v-for="(item, index) in datalist2" :key="index">
            <div class="leftli">
              {{ index + 1 }}
            </div>
            <h3>{{ item.name }}</h3>
            <p>
              <i></i>{{ item.ar[0].name }}<span>-</span>
              {{ item.al.name }}
            </p>
            <div class="right"></div>
          </li>
        </ul>
        <div class="llii">查看更多歌曲，请下载客户端</div>
      </div>
    </div>
    <!-- 评论 -->
    <Commentary :id="id"></Commentary>
  </div>
</template>
<script>
import Commentary from './Commentary'
export default {
  components: {
    Commentary,
  },
  data() {
    return {
      datalist: {
        playlist: {
          coverImgUrl: '',
          creator: {
            avatarUrl: '',
          },
        },
      },
      datalist2: [],
      id: '',
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    add() {
      console.log(this.datalist2)
    },
    getlist() {
      let id = this.$route.query.id
      this.id = id
      // console.log(id)
      this.http.get('/playlist/detail?id=' + id).then((res) => {
        this.datalist = res.data
        // console.log(1)
        let inx = res.data.playlist.trackIds
          .map((item) => item.id)
          .splice(0, 10)
        // console.log(inx)
        // console.log(inx.join(','))
        this.http.get('/song/detail?ids=' + inx).then((res) => {
          this.datalist2 = res.data.songs
          // console.log(this.datalist2)
        })
      })
    },
  },
}
</script>
<style lang="less" scoped>
#add {
  position: relative;
  background-color: #eee;
}
// 头部
.toppic {
  position: absolute;
  height: 230px;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  box-sizing: border-box;
  img {
    filter: blur(20px);
  }
}
.toppic2 {
  position: absolute;
  height: 230px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  padding: 20px;
  .pic {
    width: 180px;
    height: 180px;
    float: left;
    margin-right: 20px;
  }
  p {
    font-size: 17px;
    color: #fefefe;
    margin-top: 15px;
  }
  .end {
    width: 200px;
    height: 100px;
    float: left;
    margin-top: 45px;
    color: #999;
    position: relative;
    img {
      border-radius: 50%;
      float: left;
    }
    p {
      font-size: 12px;
      margin: 5px 0 0 35px;
    }
    .endson {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: coral;
      background: url(../../assets/星.png) -40px 0;
      background-size: 75px auto;
      top: 20px;
      left: 18px;
    }
  }
}
// 内容
.main {
  margin-top: 240px;
  position: relative;
  .p1 {
    margin-left: 10px;
  }
  .maindiv {
    // height: 330px;
    width: 100%;
    background-color: #fff;
  }
}

.ul {
  width: 100%;
  li {
    color: #555;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #ddd;
    // line-height: 55px;
    padding-left: 10px;
    position: relative;
    h3 {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18px;
    }
    p {
      margin-top: 3px;
      color: #777;
      font-size: 9px;
      span {
        display: inline-block;
        margin: 0 5px;
      }
      i {
        display: inline-block;
        width: 14px;
        height: 9px;
        background: url(../../assets/index_icon.png);
        background-size: 200px 100px;
        margin-right: 10px;
      }
    }
    .right {
      width: 22px;
      height: 22px;
      float: right;
      margin-top: -30px;
      margin-right: 20px;
      background: url(../../assets/index_icon.png) no-repeat -24px 0;
      background-size: 166px 97px;
    }
  }

  .leftli {
    float: left;
    width: 30px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: goldenrod;
    font-size: 18px;
  }
}
.llii {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  line-height: 300px;
  border: 0;
  text-align: center;
  font-size: 25px;
  color: #7d87f0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #9198e5);
}
// 评论
</style>
